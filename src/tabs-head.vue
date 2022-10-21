<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper"> <slot name="actions"></slot></div>
  </div>
</template>
<script>
export default{
  name:'TabsHead',
  inject: ['eventBus'],
  created(){
  }
}
</script>
<style lang="scss" scoped>
.tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;

  position: relative;
  >.line{
    position: absolute;
    bottom:0;
    border-bottom: 1px solid blue;
    width:100px;
  }
> .actions-wrapper {
  margin-left: auto;
}

}
</style>
