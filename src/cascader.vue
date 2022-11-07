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
    }
  },
  data(){
    return{popoverVisible:false}
  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
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
