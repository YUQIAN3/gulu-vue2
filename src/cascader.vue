<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      {{result||'&nbsp'}}
    </div>
<div class="popover" v-if="popoverVisible">
<cascader-items :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>

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
    },
    selected:{
      type:Array,
      default:()=>{return []}
    },
    loadData: {
      type: Function
    }
  },
  data(){
    return{popoverVisible:false}
  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]

      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }
      let updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        this.$emit('update:source', copy)
      }
      if(!lastItem.isLeaf){
        this.loadData(lastItem, updateSource)
      }
      // 回调:把别人传给我的函数调用一下
      // 调回调的时候传一个函数,这个函数理论应该被调用
    }
  },
  computed:{
    result(){
      return this.selected.map((item)=>item.name).join('-')
    }
  }
}
</script>
<style lang="scss" scoped>
.cascader{
  position: relative;
  .trigger{
    height: 30px;
    min-width:10em;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    border:1px solid #3333332e;
    border-radius: 4px;
  }
.popover{
  margin-top: 4px;
  position: absolute;
  top:100%;
  left:0;
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);

}
}
</style>
