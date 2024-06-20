<template>
  <div class="user-view-container">
    <el-container>
      <el-header>
        <el-input
            placeholder="查询用户名"
            v-model="searchQuery"
            style="width: 200px; margin-right: 20px;"
        />
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button type="primary" @click="handleAddUser">新增用户</el-button>
      </el-header>
      <el-table :data="tableData" style="width: 100%" class="animated-table">
        <el-table-column prop="username" label="用户名" width="140"></el-table-column>
        <el-table-column prop="nickname" label="昵称" width="120"></el-table-column>
        <el-table-column prop="avatar" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="avatar" class="avatar">
          </template>
        </el-table-column>
        <el-table-column prop="enabled" label="启用状态" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.enabled ? 'success' : 'danger'">{{ scope.row.enabled ? '启用' : '禁用' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="roles" label="角色">
          <template slot-scope="scope">
            <span v-for="role in scope.row.roles" :key="role.roleName">{{ role.roleName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="180"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.username)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <Pagination
          :total="total"
          :page-size="pageSize"
          :current-page="currentPage"
          @page-change="handleCurrentChange" />
    </el-container>

    <el-dialog :visible.sync="editDialogVisible" title="修改用户">
      <el-form :model="editForm">
        <el-form-item label="昵称">
          <el-input v-model="editForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-input v-model="editForm.avatar"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitEdit">确定</el-button>
      </div>
    </el-dialog>

    <AddUserDialog ref="addUserDialog" @user-added="handleSearch(currentPage)" />
  </div>
</template>

<script>
import { GetUserList, DeleteUser, Modify } from "@/api/SvtccUser";
import Pagination from "@/components/tourMenu/Pagination.vue";
import AddUserDialog from "@/components/AddUserDialog.vue";

export default {
  name: 'userView',
  components: {
    Pagination,
    AddUserDialog
  },
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      editDialogVisible: false,
      editForm: {
        password: '',
        nickname: '',
        avatar: ''
      },
      editId: null,
      searchQuery: ''
    };
  },
  mounted() {
    this.handleSearch(this.currentPage, "");
  },
  methods: {
    handleSearch()  {
      GetUserList(this.currentPage,this.searchQuery).then(response => {
        console.log(response);

        // 将 records 数据赋值给 tableData
        this.tableData = response.data.records;
        this.total = response.data.total;
      }).catch(error => {
        console.error("Error fetching data:", error);
      });
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.handleSearch(this.currentPage, this.pageSize);
    },
    handleDelete(username) {
      DeleteUser(username).then(response => {
        this.$message.success("删除成功");
        this.handleSearch(this.currentPage, this.pageSize);
      }).catch(error => {
        this.$message.error("删除失败");
        console.error("删除请求出错:", error);
      });
    },
    handleEdit(row) {
      this.editId = row.username;
      this.editForm.nickname = row.nickname;
      this.editForm.avatar = row.avatar;
      this.editForm.password = '';
      this.editDialogVisible = true;
    },
    submitEdit() {
      Modify(this.editId, this.editForm).then(response => {
        this.$message.success("修改成功");
        this.editDialogVisible = false;
        this.handleSearch(this.currentPage, this.pageSize);
      }).catch(error => {
        this.$message.error("修改失败");
        console.error("修改请求出错:", error);
      });
    },
    handleAddUser() {
      this.$refs.addUserDialog.dialogVisible = true;
    },

  }
}
</script>

<style lang="scss" scoped>
.user-view-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.el-table {
  flex: 1;
}

.animated-table {
  transition: all 0.3s ease-in-out;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.dialog-footer {
  text-align: right;
}
</style>