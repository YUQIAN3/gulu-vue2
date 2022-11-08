<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}

        <icon class="icon"  name="right" v-if="item.children"></icon>
      </div>
    </div>
    <div class=right v-if="rightItems">
      <cascader-item :items="rightItems" :height="height" :level="level+1"
                     :selected="selected" @update:selected="onUpdateSelected"></cascader-item>
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
    },
    selected:{
      type:Array,
      default:()=>{return []}
    },
    level:{
      type:Number,
      default:0
    }
  },
  data(){
    return{leftSelected:null}
  },
  computed:{
    rightItems(){
      let currentSelected=this.selected[this.level]
      if(currentSelected && currentSelected.children){
        return currentSelected.children
      }else{
        return null
      }
    }
  },
  methods:{
    onClickLabel(item){
      //this.selected[this.level]=item;//不能直接操作数组,不允许字组件修改props
    let copy=JSON.parse(JSON.stringify(this.selected))
      copy[this.level]=item
      copy.splice(this.level+1)
      this.$emit('update:selected',copy)
      //console.log(this.selected[this.level]);
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
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
   overflow: auto;
 }
 .right{
   top:-1px;
   height: 100%;
   border-left: 1px solid #3333332e
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
