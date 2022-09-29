<template>
  <button class="g-button" :class="{[`icon-${positions}`]:true}">
    <svg v-if="icon"   class="icon">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
  <div class="content">
    <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
props:{
  icon:{},
  positions:{
    type:String,
    default:'left'
  }
}
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

}
</style>
