<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
<div class="popover" v-if="popoverVisible">
<cascader-items :items="source"></cascader-items>

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
    }
  },
  data(){
    return{popoverVisible:false}
  }
}
</script>
<style lang="scss" scoped>
.cascader{
  .trigger{
    height: 20px;
    width:80px;
    border:1px solid blue;
  }
.popover{
  height: 200px;
  width:50px;
  border:1px solid purple;

}
}
</style>
