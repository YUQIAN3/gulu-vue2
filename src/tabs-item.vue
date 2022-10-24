<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'TabsItem',
  inject: ['eventBus'],
props:{
  disabled:{
    type:Boolean,
    default:false,
  },
  name:{
    type:String|Number,
    required:true
  }
},
  data(){
    return {
      active:false
    }
  },

  created(){
    this.eventBus.$on('update:selected', (name) => {
      if(name===this.name){
        this.active=true
      }else{
        this.active=false
      }
    })
},
  computed:{
    classes(){
      return {
        active:this.active,
        disabled: this.disabled
      }
    }
  },
  methods:{
    onClick(){
      if(this.disabled){
        return
      }
      this.eventBus.$emit('update:selected', this.name,this)
    }
  }

}
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding:0 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active{
    color:blue;
    font-weight: bold;
   }
&.disabled{
  color:gray;
}
}
</style>
