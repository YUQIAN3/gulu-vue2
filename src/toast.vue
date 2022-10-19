<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.toast{
  font-size:14px;
  height:40px;
  line-height: 1.8;
  background: rgba(0,0,0,0.75);
  border:1px solid purple;
  position:fixed;
  top:0;
  left:50%;
  transform:translateX(-50%);
  display: flex;
  align-items: center;
 border-radius: 4px;
  color:white;
}
</style>
