<template>
<div class="popover" ref="popover">
  <div ref="contentWrapper"  class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
    <slot name="content" :close="close" ></slot>
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
  computed:{
    openEvent(){
      if(this.trigger==='click'){
        return 'click'
      }else{
       return 'mouseenter'
      }
    },
    closeEvent(){
      if(this.trigger==='click'){
        return 'click'
      }else{
        return 'mouseleave'
      }
    }
  },
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return['top','bottom','left','right'].indexOf(value)>=0
      }
    },
    trigger:{
      type:String,
      default: 'click',
      validator(value){
        return['click','hover'].indexOf(value)>=0
      }
    }
  },
  mounted(){
  if(this.trigger==='click'){
    this.$refs.popover.addEventListener('click',this.onClick)
  }else{
    this.$refs.popover.addEventListener('mouseenter',this.onShow)
    this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed(){
    if(this.trigger==='click'){
      this.$refs.popover.removeEventListener('click',this.onClick)
    }else{
      this.$refs.popover.removeEventListener('mouseenter',this.onShow)
      this.$refs.popover.removeEventListener('mouseleave',this.close)
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
      this.visible=true
      this.$nextTick(()=>{
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close(){
      this.visible=false
      document.removeEventListener('click',this.onClickDocument)
    },
    onClick(event){
      if(this.$refs.triggerWrapper&&this.$refs.triggerWrapper.contains(event.target)) {
        if(this.visible===true) {
          this.close()
        }else{
          this.onShow()
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
        border-bottom:none;
        top:100%;
        left:10px;
      }
      &::after{
        border-top-color: white;
        border-bottom:none;
        top:calc(100% - 1px);
        left:10px;
      }
    }
   &.position-bottom{
     margin-top:10px;
     &::before{
       border-bottom-color: #333;
       border-top:none;
       bottom: 100%;
       left:10px;
     }
     &::after{
       border-bottom-color: white;
       border-top:none;
       bottom:calc(100% - 1px);
       left:10px;
     }
   }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before{
        border-left-color: #333;
        border-right:none;
        bottom: 100%;
        left:100%;
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color: white;
        border-right:none;
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
        border-left:none;
        top:50%;
        right: 100%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color: white;
        border-left:none;
        right:calc(100% - 1px);
        top:50%;
        transform: translateY(-50%);
      }
    }
  }


</style>
