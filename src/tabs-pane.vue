<template>
  <div class="tabs-pane" v-if="active" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus'],
  props:{
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
  created() {
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
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane{
  padding: 1em;
&.active{;
 }
}
</style>
