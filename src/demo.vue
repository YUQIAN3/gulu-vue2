<template>
  <div>
    <p>11111</p>
    <g-cascader :source="source" popover-height="200px"
                :selected="selected" @update:selected="selected = $event">
    </g-cascader>
    <p>2222</p>
    <g-button></g-button>
    <g-icon name="download"></g-icon>
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
