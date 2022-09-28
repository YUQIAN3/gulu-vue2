<template>
  <button class="g-button">按钮</button>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.g-button{
  height: 32px;
  padding: 0 1em;
  font:inherit;
  border-radius: 4px;
  border:1px solid #999;
  background: white;

&:hover{
  border-color:#666;
}
&:active{
  background-color:#999;
}
&:focus{
outline:none
}
}
</style>
