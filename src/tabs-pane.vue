<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name);
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>
<style>
.tabs-header{

}
</style>
