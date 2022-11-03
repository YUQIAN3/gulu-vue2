<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
<div class="popover" v-if="popoverVisible">
<cascader-items :items="source" :height="popoverHeight"></cascader-items>

</div>

  </div>

</template>
<script>
import CascaderItems from './cascader-items'
export default {
  components:{
    CascaderItems
  },
  props:{
    source:{
      type:Array,
    },
    popoverHeight:{
      type:String,
    }
  },
  data(){
    return{popoverVisible:false}
  }
}
</script>
<style lang="scss" scoped>
.cascader{
  position: relative;
  .trigger{
    height: 20px;
    width:80px;
    border:1px solid black;
  }
.popover{
  position: absolute;
  top:100%;
  left:0;
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);

}
}
</style>
