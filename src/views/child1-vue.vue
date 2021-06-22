<template>
  <div>
    应用1
    <input v-model="state.name">
    <button @click.stop="changeState">更改</button>
    <div id="vue-app"></div>
  </div>
</template>

<script>
import { MicroAppStateActions, initGlobalState } from 'qiankun'

export default {
  name: 'child1-vue',
  data () {
    return {
      action: null,
      state: {
        name: 'master app',
        appMessage: 'master title'
      }
    }
  },
  created () {
    // 初始化 state
    const actions = initGlobalState(this.state)

    this.actions = actions
    this.actions.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log('基座应用:', state, prev)
    })
  },
  methods: {
    changeState () {
      this.actions.setGlobalState({
        name: this.state.name
      })
      // actions.offGlobalStateChange()
    }
  }
}
</script>

<style scoped>

</style>
