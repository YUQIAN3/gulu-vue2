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
      source:[{name:'山东',
        children:[
          {name:'济南',children:[{name:'历下区'},{name:'市中区'},{name:'槐荫区'}]},
          {name:'菏泽',children:[{name:'牡丹区'},{name:'定陶区'}]}
        ]},
        {name:'浙江',
          children:[
            {name:'杭州',children:[{name:'上城区'},{name:'下城区'},{name:'江干区'}]},
            {name:'嘉兴'}] },
        {name:'安徽',children: [{name:'合肥'},{name:'芜湖'}]}
      ],
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
