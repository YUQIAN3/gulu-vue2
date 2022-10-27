<template>
<div class="popover" @click="onClick" ref="popover">
  <div ref="contentWrapper"  class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
    <slot name="content" ></slot>
  </div>
<span ref="triggerWrapper" style="display: inline-block">
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
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return['top','bottom','left','right'].indexOf(value)>=0
      }
    }
  },
  methods:{
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let{width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
      if(this.position==='top'){
        this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
        this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
      }else if(this.position==='bottom'){
        this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
        this.$refs.contentWrapper.style.top=top+height+window.scrollY+'px'
      }else if(this.position==='left'){
        let{height:height2}=this.$refs.contentWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
        this.$refs.contentWrapper.style.top=top+(height-height2)/2+window.scrollY+'px'
      }else if(this.position==='right'){
        let{height:height2}=this.$refs.contentWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left=left+width+window.scrollX+'px'
        this.$refs.contentWrapper.style.top=top+(height-height2)/2+window.scrollY+'px'
      }

    },
    onClickDocument(){
      let x=(e)=> {

        if (this.$refs.popover&&this.$refs.popover.contains(e.target)) {
        }
        if(this.$refs.contentWrapper&&(this.$refs.contentWrapper===e.target||this.$refs.contentWrapper.contains(e.target))){
          return
        }
          this.visible = false
          console.log('结束监听document');
          document.removeEventListener('click', x)

      }
      console.log('监听document');
        document.addEventListener('click', x)

    },
    onShow(){
      this.$nextTick(()=>{
        this.positionContent()
        this.onClickDocument()
      })
    },
    onClick(event){
      if(this.$refs.triggerWrapper&&this.$refs.triggerWrapper.contains(event.target)) {
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
    background: white;
    border:1px solid #333;
    filter: drop-shadow(0 1px 1px  rgba(0,0,0,0.5));//兼容性不好，需要去caniuse去查查
    //box-shadow: 0 0 3px rgba(0,0,0,0.5);
    padding:.5em 1em;
    max-width: 20em;
    word-break: break-word;
    &::before, &::after{
      content:'';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top:-10px;

      &::before{
        border-top-color: #333;
        top:100%;
        left:10px;
      }
      &::after{
        border-top-color: white;
        top:calc(100% - 1px);
        left:10px;
      }
    }
   &.position-bottom{
     margin-top:10px;
     &::before{
       border-bottom-color: #333;
       bottom: 100%;
       left:10px;
     }
     &::after{
       border-bottom-color: white;
       bottom:calc(100% - 1px);
       left:10px;
     }
   }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before{
        border-left-color: #333;
        bottom: 100%;
        left:100%;
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color: white;
        bottom:calc(100% - 1px);
        left:calc(100% - 1px);
        top:50%;
        transform: translateY(-50%);
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before{
        border-right-color: #333;
        top:50%;
        right: 100%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color: white;
        right:calc(100% - 1px);
        top:50%;
        transform: translateY(-50%);
      }
    }
  }


</style>
