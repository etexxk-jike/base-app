<template>
  <div>
    <div class="oDiv">
      <div id="vue-form" class="div1"></div>
    </div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'child1-vue',
  mounted () {
    loadMicroApp({
      name: 'vueApp',
      entry: 'http://localhost:10044',
      container: '#vue-form',
      props: { a: 'loadMicroApp' }
    }, {
      // sandbox: {
      //   strictStyleIsolation: true // 配置 shadow DOM 样式隔离
      // }
    })

    return false
  }
}
</script>

<style scoped lang="less">
.oDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*height: 500px;*/
  >div {
    flex: 1;
    border: 1px solid black;
  }
}
</style>
