<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <slot></slot>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :class="{active:selectedIndex===n-1}" @click="select(n-1)">
  {{n}}
    </span></div>
  </div>
</template>
<script>
export default {
  props:{
    selected:{
      type:String,
    },
    autoPlay:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      childrenLength:0
    }
  },
mounted(){
  this.updateChildren()
  this.playAutomatically()
  this.childrenLength=this.$children.length
},
  updated(){
   this.updateChildren()
  },
  computed:{
    selectedIndex(){
      return this.names.indexOf(this.selected) || 0

    },
    names(){
      return this.$children.map(vm=>vm.name)
    }
  },
  methods:{
    select(index){
      this.$emit('update:selected',this.names[index])
    },
    playAutomatically(){
      let names=this.$children.map(vm=>vm.name)
      let index=names.indexOf(this.getSelected())

      setInterval(()=>{
        if(index===name.length){
          index=0
        }
        this.$emit('update:selected',names[index+1])
        index ++
    },3000)},
    getSelected(){
      let first=this.$children[0]
      return this.selected||first.name
    },
    updateChildren(){
     let selected=this.getSelected()
      this.$children.forEach((vm)=>{
        vm.selected=selected
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.g-slides{
  display:block;
  position: relative;
  &-window{

  }
  &-dots{

    > span{
      &.active{
        background: lawngreen;
      }

    }





  }
}
</style>
