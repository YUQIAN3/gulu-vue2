<template>
<div class="popover" @click="xxx">
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
  mounted(){
    console.log(this.$refs.triggerWrapper);
  },
  methods:{
    xxx(){
      this.visible=!this.visible
      console.log('切换visible');
      if(this.visible===true) {
          this.$nextTick(()=>{
           document.body.appendChild(this.$refs.contentWrapper)
            let{width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
           this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
            this.$refs.contentWrapper.style.top=top+window.scrollY+'px'

          let x=()=>{
            this.visible = false
            document.removeEventListener('click',x)
            console.log('删除 document监听器');
            console.log('点击body就关闭popover');
          }
          document.addEventListener('click',x)

      })
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
