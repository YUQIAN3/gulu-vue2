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
  mounted(){
    this.eventBus.$on('update:selected',(item,vm)=>{
      console.log(item,vm);
      let{width,height,top,left}=vm.$el.getBoundingClientRect()
     this.$refs.line.style.width=`${width}px`
      this.$refs.line.style.left=`${left}px`


    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
 border-bottom: 1px solid #ddd;
  position: relative;
  >.line{
    position: absolute;
    bottom:0;
    border-bottom: 3px solid blue;
    transition:all 350ms;
  }
> .actions-wrapper {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 1em;
}

}
</style>
