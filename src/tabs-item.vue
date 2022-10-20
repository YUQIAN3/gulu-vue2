<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default{
props:{
  disabled:{
    type:Boolean,
    default:false,
  }
}
}
</script>
<style>
.tabs-pane{

}
</style>
