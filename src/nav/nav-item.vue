<template >
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'NavItem',
  inject:['root'],
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
   this.$emit('add:selected',this.name)
    }
  }

}
</script>
<style lang="scss" scoped>
.g-nav-item{
padding:10px 20px;
  position: relative;
  &.selected{
    &::after{
      content:'';
      position:absolute;
      top:100%;
      left:0;
      border-bottom:2px solid #4a90e2;
      width:100%;

    }
  }
}
.g-subnav .g-nav-item{

  &.selected{
    background: grey;
    color:black;
  }
  &::after{
    display: none;
  }
}
</style>
