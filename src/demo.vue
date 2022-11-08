<template>
  <div>
<!--    <p>{{selected&&selected[0]&&selected[0].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[1]&&selected[1].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[2]&&selected[2].name||'空'}}</p>-->
    <div style="padding:20px">
      <g-cascader :source="source" popover-height="200px"
                  :selected="selected" @update:selected="selected = $event">
      </g-cascader>
    </div>

  </div>

</template>
<script>
import Button from './button'
import Cascader from './cascader'
import Icon from './icon'
import db from './db'
function ajax (parentId=0) {

  return db.filter((item) => item.parent_id===parentId)
}

console.log('1111');
console.log(ajax());
export default {
  name:'demo',
  components:{
    'g-button':Button,
    'g-cascader':Cascader,
    'g-icon':Icon
  },
  data(){
    return {
      selected:[],
      source:ajax()
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
