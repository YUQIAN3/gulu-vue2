<template >
  <div class="g-nav">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'Nav',
  provide(){
    return {
      root:this
    }
  },
  props:{
    selected:{
      type:String,
    },
  },
  data(){
    return{
      items:[],
     namePath:[]}
  },
  // computed:{
  //   items(){
  //     return this.$children.filter(vm=>vm.$options.name==='NavItem')
  //   }
  // },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
    },
  updated(){
    this.updateChildren()
  },
methods:{
    addItem(vm){
      this.items.push(vm)
    },
    updateChildren(){
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      })
    },
  listenToChildren(){
    this.items.forEach(vm => {
      vm.$on("update:selected", (name) => {
          this.$emit('update:selected', name);
      });
    });
  }
}


}

</script>
<style lang="scss" scoped>
.g-nav{
  display: flex;
  border-bottom:1px solid #eee;
 cursor: default;
  user-select: none;
}
</style>
