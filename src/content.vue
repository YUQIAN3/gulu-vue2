<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'Content',
}
</script>
<style lang="scss">
.content{
 flex-grow: 1;
}
</style>
