<template>
    <header v-on:click="changeTitle">
        <h1>{{title1}} {{title}}</h1>
    </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
      title:{
          type:String
      }
  },
  data () {
    return {
     title1:"Vue.js Demo"
    }
  },
  methods:{
      changeTitle:function(){
          //this.title = "changed"
          this.$emit("titleChange",'子向父组件传值')
          // titleChange注册事件名，随便起名
          // 第二个内是你要向父传递什么内容
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:Lightgreen;
    padding:10px;
}
h1{
    color:#222;
    text-align:center;
}
</style>
