<!-- 1模板: html结构  -->
<template>
  <div id="app">
   <ul>
     <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloword">Hello</router-link></li>
     
   </ul>
    <router-view></router-view>
  </div>
</template>



<!-- 2形为: 处理逻辑  -->
<script>



export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  methods:{

  },
  components:{

  }

}
</script>


<!-- 3样式: 解决样式  -->
<style scoped>
h1{
 color:red;
}
</style>
