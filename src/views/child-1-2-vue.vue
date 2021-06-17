<template>
  <div>
    应用1,2联合
    <div class="oDiv">
      <div id="vue-app" class="div1"></div>
      <div id="vue-child2" class="div2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { loadMicroApp } from 'qiankun'
export default {
  name: 'child1-vue',
  mounted (): void {
    loadMicroApp({
      name: 'vueApp',
      entry: 'http://localhost:10002',
      container: '#vue-app',
      props: { a: 'loadMicroApp' }
    }, {
      sandbox: {
        strictStyleIsolation: true // 配置 shadow DOM 样式隔离
      }
    })

    loadMicroApp({
      name: 'vue-app1',
      entry: 'http://localhost:10003',
      container: '#vue-child2'
    })
  }
}
</script>

<style scoped lang="less">
.oDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
  width: ;
  >div {
    flex: 1;
    border: 1px solid black;
  }
}
</style>
