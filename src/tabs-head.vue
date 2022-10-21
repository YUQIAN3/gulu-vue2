<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default{
  inject: ['eventBus'],
  created(){
  }
}
</script>
<style>
.tabs{

}
</style>
