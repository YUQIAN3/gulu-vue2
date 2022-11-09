<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <icon class="icon"  name="right" v-if="!item.isLeaf"></icon>
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
    },
  },
  data(){
    return{leftSelected:null}
  },
  updated () {
    // console.log('cascader items updated')
    // console.log(JSON.stringify(this.items))
  },
  computed:{
    rightItems(){
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
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
<style lang="scss" scoped>
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
   padding:.5em 1em;
   display: flex;
   align-items: center;
   cursor: pointer;
   &:hover{
     background: #eee;
   }
   > .name{
     margin-right: 1em;
     user-select: none;
   }
 }
 .icon{
   margin-left: auto;
   transform: scale(0.7);
 }
</style>
