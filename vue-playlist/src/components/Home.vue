<!-- 1模板: html结构  -->
<template>
  <div id="home">
   <users v-bind:cunzhang="users"></users>
   <users v-bind:cunzhang="users"></users>
   <app-header v-on:titleChange= "updateTitle($event)" v-bind:title="title" ></app-header>
   <app-footer v-bind:title="title"></app-footer>
  </div>
</template>



<!-- 2形为: 处理逻辑  -->
<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return {
      //title:"这是我的第一个vue脚手架项目"
        users: [

       ],
       title:"传递的是一个值,(num,string,boolen)"
    }
  },
  methods:{
    updateTitle(title){
      this.title = title
    }
  },
  components:{
   Users,
   "app-header":Header,
   "app-footer":Footer
  },

  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) => {
          this.users = data.body
      })
  },

}
</script>


<!-- 3样式: 解决样式  -->
<style scoped>
h1{
 color:red;
}
</style>
