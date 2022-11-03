<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected=item">
        {{item.name}}
        <icon class="icon"  name="right" v-if="item.children"> ></icon>
      </div>
    </div>
    <div class=right v-if="rightItems">
      <cascader-item :items="rightItems" :height="height"></cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name:'cascaderItem',
  components:{Icon},
  props:{
    items:{
      type:Array
    },
    height:{
      type:String
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
   display: flex;
   align-items: flex-start;
   height:100px;
 }
 .left{
   height: 100%;
   padding:.3em 0;
 }
 .right{

   top:-1px;
   height: 100%;
   border-left: 1px solid #999;
 }
 .label{
   white-space: nowrap;
   padding:.3em 1em;
   display: flex;
   align-items: center;
 }
 .icon{
   margin-left: 1em;
   transform: scale(0.7);
 }
</style>
