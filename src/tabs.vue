<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default{
props:{
  selected:{
    type:String,
    required:true,
  },
  direction:{
    type:String,
    default:'horizontal',
    validator(value){
      return ['horizontal','vertical'].includes(value)
    }
  }
},
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
 mounted() {
   this.$children.forEach((vm)=>{
     if(vm.$options.name==='TabsHead'){
       vm.$children.forEach((childVm)=>{
        if(childVm.$options.name==='TabsItem'&& childVm.name===this.selected){

          this.eventBus.$emit('update:selected',this.selected,childVm)
        }
       })
     }
   })



   }
}
</script>
<style>
.tabs-header{

}
</style>
