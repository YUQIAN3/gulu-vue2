<template >
  <div class="g-nav-item" :class="{selected,vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'NavItem',
  inject:['root','vertical'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      selected:false
    }
  },
  created() {
    this.root.addItem(this)
  },
  methods:{
    onClick(){
      this.root.namePath=[]
     this.$parent.updateNamePath&&this.$parent.updateNamePath()
      this.$emit('update:selected',this.name)
    }
  }

}
</script>
<style lang="scss" scoped>
.g-nav-item{
padding:10px 20px;
  position: relative;
  &:not(.vertical){
  &.selected{
    &::after{
      content:'';
      position:absolute;
      top:100%;
      left:0;
      border-bottom:3px solid #4a90e2;
      width:100%;

    }
  }
}
  &.vertical {
    &.selected {
      color: blue;
    }
  }
}
.g-subnav .g-nav-item:not(.vertical){

  &.selected{
    background: grey;
    color:black;
  }
  &::after{
    display: none;
  }
}
</style>
