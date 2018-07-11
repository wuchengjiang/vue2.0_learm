###搭建脚手架CLI
- 安装nodejs

   [nodejs](https://nodejs.org/en/)

   版本号:
   ```
   C:\Users\zhangzihong>node -v
    v8.11.3
   ```

- npm

  版本号：

  ```
  C:\Users\zhangzihong>npm -v
  5.6.0
  ```

- 全局安装vue-cli

  ```
  npm install --global vue-cli
  ```

  查看vue版本号:

  ```
  C:\Users\zhangzihong>vue --version
  2.9.6
  ```

- 创建一个基于webpack模板的新项目

   ```
   F:\BaiduNetdiskDownload\restframework\VUE>vue init webpack vue-playlist

    'git' �����ڲ����ⲿ���Ҳ���ǿ����еĳ���
    �������ļ�
    ? Project name vue-playlist
    ? Project description Vue基础知识
    ? Author
    ? Vue build (Use arrow keys)
    ? Vue build standalone
    ? Install vue-router? No
    ? Use ESLint to lint your code? No
    ? Set up unit tests No
    ? Setup e2e tests with Nightwatch? No
    ? Should we run `npm install` for you after the project has been created? (recom
    ? Should we run `npm install` for you after the project has been created? (recom

    mended) npm

    vue-cli · Generated "vue-playlist".
    ```

- 用开发工具打开新创建的项目

   ```
  build目录：可以更改端口号、构建了客户端和服务端
  config目录:对应的配置文件
  src目录:
     accets:可以放置一些图片
     components：放置组件
     App.vue:根组件
     main.js：index.html  -> main.js -> App.vue
  static目录:放置静态文件
  .gitignore：忽略文件
  index.html：当前的入口文件
  package.json：所需要的依赖

   ```

- 运行项目

   ```
   npm run dev
   ```

- 全局注册组件

   ```
   1.在main.js中导入你的组件
     import Users from './components/Users'
   2.注册组件
     Vue.component("users",Users);
     第一个users是自己起的名字，第二个Users是组件
   3.在App.vue根组件调用
     <users></users>
   ```

- 局部注册组件

  ```
   1.在App.vue导入组件
   2.写入components
    <template>
      <div id="app">
      {{ title }}
      <users></users>
      </div>
    </template> 
    <script>
      import Users from './components/Users'

      export default {
        name: 'app',
        data(){
          return {
            title:"这是我的第一个vue脚手架项目"
          }
        },
        components:{
          Users
        }

      }
    </script>
  ```

- 组件CSS作用域

   ```
   每个组件设置自己不同的值时，设置scoped作用域
    <style scoped>
      h1{
        color:red;
      }
    </style>
   ```


- 属性传值
   
   父传子：props

   ```
   父组件：
      <users v-bind:cunzhang="users"></users>给users绑定属性

      data(){
        return {
          //title:"这是我的第一个vue脚手架项目"
            users: [
              {name:'村长',position:"web开发",show:false},
              {name:'老王',position:"web开发",show:false},
              {name:'孔子',position:"web开发",show:false},
          ]
        }
    },

   子组件:
        模板:

          <ul>
            <li v-for="user in cunzhang" 
                v-on:click="user.show = !user.show">
              <h2>{{user.name}}</h2>
              <h3 v-show="user.show">{{user.position}}</h3>
            </li>
          </ul>

        script:

      props:{
        cunzhang:{
          type:Array,
          required:true,
        }
      }


   ```

   子传父

   ```
   1.在子组件方法里注册事件：

     methods:{
      changeTitle:function(){
          //this.title = "changed"
          this.$emit("titleChange",'子向父组件传值')
          // titleChange注册事件名，随便起名
          // 第二个内是你要向父传递什么内容，为传的参数，在父组件里用$event来接收
      }
  }

  2.在父组件方法里面
     模板里点击事件：$event来接收子组件传过来的值
  <app-header v-on:titleChange= "updateTitle($event)" v-bind:title="title" ></app-header>
     在方法里调用点击事件
    methods:{
    updateTitle(title){
      //title为子组件传过来的值，形参
      this.title = title //等于title为形参值
    }
  },
   ```

- 生命周期

   ```
     beforeCreate:function(){
          alert("组件实例化之前执行的函数")
      },
      created:function(){
          alert("组件实例化完毕，但页面还未显示")
      },
      beforeMount:function(){
          alert("组件挂载前,页面仍未展示,但虚拟Dom已经配置")
      },
      mounte:function(){
          alert("组件挂载后，此方法执行后，页面显示")
      },
      beforeUpdate:function(){
          alert("组件更新前，页面仍未更新，但虚拟Dom已经配置")
      },
        updated:function(){
          alert("组件更新,此方法执行后，页面显示")
      },
        beforeDestory:function(){
          alert("组件销毁前")
      },
        destoryed:function(){
          alert("组件销毁")
      },
   ```

- 路由安装
    
    1.安装路由
   ```
   npm install vue-router --save-dev
   ```
   2.引入路由

      ```
       打开main.js文件

       import VueRouter from 'vue-router'
      ```

  3.配置路由 main.js

  ```
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import App from './App.vue'
    import Home from './components/Home'
    import Menu from './components/Menu'
    import Admin from './components/Admin'
    import About from './components/about/About'
    import Login from './components/Login'
    import Register from './components/Register'

    Vue.use(VueRouter)

    //创建路由
    const routes = [
      {path:'/',component:Home},
      {path:'/menu',component:Menu},
      {path:'/admin',component:Admin},
      {path:'/about',component:About},
      {path:'/login',component:Login},
      {path:'/register',component:Register},
      {path:'*',redirect:'/'} //如果以上路由都没有匹配到都跳转到根路径
    ]

    //实例化路由
    const router = new VueRouter({
      routes,
      mode:'history'
    })


    new Vue({
      router,
      el: '#app',
      render: h => h(App)
    })

  ```

  4.添加超连接

  ```
   <li><router-link to="/">Home</router-link></li>
   <li><router-link to="/helloword">Hello</router-link></li>
  ```

    



   


   







