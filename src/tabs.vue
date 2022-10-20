<template>
  <div class="tabs-header">
    <slot></slot>
  </div>
</template>
<script>
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
  create(){
  // this.$emit('update:selected','xxx')
  }
}
</script>
<style>
.tabs-header{

}
</style>
