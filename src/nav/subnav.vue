<template >
  <div class="g-subnav">
    <span  @click="onClick" >
      <slot name="title"></slot>
    </span>
    <div class="g-subnav-popover" v-show="open">
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default{
  name:'Subnav',
data(){
    return {open:false}
},
  methods:{
    onClick(){

      this.open=!this.open
    }
  }
}
</script>
<style lang="scss" scoped>
.g-subnav{
  position:relative;
  > span{
    padding: 10px 20px;
    display: block;
  }
  &-popover{
    position:absolute;
    top:100%;
    left:0;
    white-space: nowrap;
    border:1px solid black;
  }
}
.g-subnav .g-subnav .g-subnav-popover{
  top:0;
  left: 100%;
  margin-left: 8px;
}
</style>
