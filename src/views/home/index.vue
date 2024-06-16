<template>
    <div class="home-box">
      <Menu />
      <div class="content-box">
        <NavigationBar />
        <div class="router-view">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Menu from './Menu.vue'; // Assuming Menu component exists
  import NavigationBar from './NavigationBar.vue'; // Assuming NavigationBar component exists
  
  export default {
    components: {
      Menu,
      NavigationBar,
    },
  };
  </script>
  
  <style scoped lang="scss">
  .home-box {
    // Styles for the root container
  }
  
  .content-box {
    // Styles for the content area
  }
  
  .router-view {
    // Styles for the router-view area
  }
  </style>
  