<template>
<div class="popover" @click="onClick" ref="popover">
  <div ref="contentWrapper"  class="content-wrapper" v-if="visible">
    <slot name="content" ></slot>
  </div>
<span ref="triggerWrapper">
  <slot></slot>
</span>
</div>
</template>
<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  methods:{
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let{width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
      this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
    },
    listenToDocument(){
      let x=(e)=> {
        if (this.$refs.popover.contains(e.target)) {

        }
          this.visible = false
          console.log('close');
        console.log('结束监听document');
          document.removeEventListener('click', x)
      }
      console.log('监听document');
        document.addEventListener('click', x)

    },
    onShow(){
      this.$nextTick(()=>{
        this.positionContent()
        this.listenToDocument()
      })
    },
    onClick(event){
      if(this.$refs.triggerWrapper.contains(event.target)) {
      this.visible=!this.visible
        if(this.visible===true) {
          this.onShow()
        }else{
          console.log('关闭');
        }
      }
       }
    }
}
</script>
<style lang="scss" scoped>
.popover{
  display: inline-block;
  vertical-align: top;
  position: relative;
}
  .content-wrapper{
    position:absolute;
    border:3px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }

</style>
