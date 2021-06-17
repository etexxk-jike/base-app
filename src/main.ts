import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

// 子应用为 hash 模式配置, 步骤1
const getActiveRule = (hash:string) => (location:any) => location.hash.startsWith(hash)

/*
{
  name: 'vueApp',
  entry: '//localhost:10002', // 默认记载这个 HTML, 解析里面的 js 动态的执行(子应用必须支持跨域)
  container: '#vue-app', // 基座上的挂载点
  activeRule: '/vue', // 基座访问该路径时,加载子应用
  props: { a: 1, message: 'child1 app' } // 父子应用通信
}
// 子应用为 hash 模式配置, 步骤2
*/
const app = [
  // 子应用为 history 模式, 只需配置该项
  {
    name: 'vueApp',
    entry: 'http://127.0.0.1:10002',
    container: '#vue-app',
    activeRule: getActiveRule('#/vue')
    // 这里也可以直接写 activeRule: '#/vue'，但是如果主应用是 history 模式或者主应用部署在非根目录，这样写不会生效。
  },
  {
    name: 'vue-app1',
    entry: 'http://localhost:10003',
    container: '#vue-child2',
    activeRule: getActiveRule('#/app1')
  }
]

registerMicroApps(app)

start({
  sandbox: true
})

createApp(App).use(store).use(router).mount('#app')
