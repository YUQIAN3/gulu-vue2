<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default{
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
        active:this.active
      }
    }
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected', this.name)
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
  &.active{background: yellow;
   }
}
</style>
