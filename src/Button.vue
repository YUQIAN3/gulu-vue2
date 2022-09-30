<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon class="icon"  v-if="iconName" :name="iconName"></g-icon>
    <g-icon class="loading"  name="loading"></g-icon>
  <div class="content">
    <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    iconName: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    },
  }
</script>
<style lang="scss">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.g-button{
  height: 32px;
  padding: 0 1em;
  font:inherit;
  border-radius: 4px;
  border:1px solid #999;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
&:hover{
  border-color:#666;
}
&:active{
  background-color:#999;
}
&:focus{
outline:none
}
  > .icon{
    order:1;
    margin-right: .1em;
  }
  > .content{
    order:2;
    color:green;
  }
  &.icon-right{
    > .content{
      order:1;
      color: blue;
    }
    > .icon{
      order:2;
      margin-left: .1em;
      margin-right:0;
    }
  }
.loading{
  animation: spin 2s infinite linear ;
}
}
</style>
