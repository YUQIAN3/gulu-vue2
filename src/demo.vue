<template>
  <div>
<!--    <p>{{selected&&selected[0]&&selected[0].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[1]&&selected[1].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[2]&&selected[2].name||'空'}}</p>-->
    <div style="padding:20px">
      <g-cascader :source.sync="source" popover-height="200px"
                  @update:source="onUpdateSource"
                  @update:selected="onUpdateSelected"
                  :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
    {{selected.map(item=>item.name)}}
  </div>

</template>
<script>
import Button from './button'
import Cascader from './cascader'
import Icon from './icon'
import db from './db'
import Popover from './popover'
function ajax (parentId=0) {
  return new Promise((success,fail)=>{
    setTimeout(()=>{
      let result=db.filter((item)=>item.parent_id===parentId)
      result.forEach(node=>{
        if(db.filter((item)=>item.parent_id===node.id).length>0){
          node.isLeaf=false
        }else{
          node.isLeaf=true

        }
          }
      )
      success(result)
    },2000)

  })
}
export default {
  name:'demo',
  components:{
    'g-button':Button,
    'g-cascader':Cascader,
    'g-icon':Icon,
    'g-popover':Popover
  },
  data(){
    return {
      selected:[],
      source:[]
    }
  },
  created(){
   ajax(0).then((result)=>{
     console.log(result);
      this.source=result
    })
    ajax(1).then((result)=>{
      console.log(result);
    })
  },
  methods:{
    loadData ({id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
    xxx () {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
        this.$set(lastLevelSelected, 'children', result)
      })
    },
    onUpdateSource () {
    },
    onUpdateSelected () {
    }
  }
}
</script>
<style>
*{margin:0;padding:0;box-sizing: border-box;}
html{
  margin:20px;
}
body{
  font-size: 14px;
}
</style>
