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
  created(){
  // this.$emit('update:selected','xxx')
  }
}
</script>
<style>
.tabs-header{

}
</style>
