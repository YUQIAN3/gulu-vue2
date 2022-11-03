<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected=item">
        {{item.name}}
      </div>
    </div>
    <div class=right v-if="rightItems">
      <cascader-item :items="rightItems"></cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name:'cascaderItem',
  props:{
    items:{
      type:Array
    }
  },
  data(){
    return{leftSelected:null}
  },
  computed:{
    rightItems(){
      if(this.leftSelected&&this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
    }
  }
}
</script>
<style>
 .cascaderItem{
   border:1px solid purple;
   display: flex;
   align-items: flex-start;
 }
 .left{
   border:1px solid #333
 }
 .right{
   top:-1px;
 }
</style>
