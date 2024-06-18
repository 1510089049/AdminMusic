<template>
  <div>
    <h1>
      {{created}}
    </h1>
    <h1>MusicView</h1>
    <h1>此处应为一个路由，路由下是艺术家，相册和音乐列表</h1>
    <router-view/>
  </div>
  </template>
  
  <script>
  import {getUser} from "@/api/user"; // 确保路径正确
  export default {
    name: 'MusicView',
    methods:{
      created() {
        this.$store.dispatch('moudls/getusers')
        const res = getUser()
        console.log(res)
        return res
      },
    }
    // This component is simply a router-view, so no script is needed.
  };
  </script>
  