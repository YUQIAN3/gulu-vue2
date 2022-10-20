<template>
  <div class="wrapper" :class="toastPosition">
    <div class="toast" ref="toast" >
    <slot></slot>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
  </div>

</template>
<script>
export default {
  props:{
    autoClose:{
      type:Boolean,
      default:true,
    },
    autoCloseDelay:{
      type:Number,
      default: 3,
    },
    closeButton:{
      type:Object,
      default:()=>{
        return{
         text:'关闭',callback: (toast)=>{
           toast.close()
          }
        }
      }
    },
    position:{
      type:String,
      default:'bottom',
      validator(value){
        return ['top','middle','bottom'].includes(value)
      }
    }
  },
  created(){
    console.log(this.autoClose)
    console.log(this.position)
  },
  mounted(){
    if(this.autoClose){
      setTimeout(()=>{
        this.close()
      },this.autoCloseDelay*1000)
    }
    this.$nextTick(()=>{
      this.$refs.line.style.height =
          `${this.$refs.toast.getBoundingClientRect().height}px`
    })
  },
  computed:{
    toastPosition(){
      return {[`position-${this.position}`]:true}
    }
  },
  methods:{
    close(){
      this.$el.remove()
      this.$destroy()
    },
    onClickClose(){
      this.close()
      this.closeButton.callback()
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes slide-up{
  0% {opacity:0;transform: translateY(100%)}
  100%{opacity:1;transform: translateY(0%)}
}
@keyframes fade-in{
  0% {opacity:0;}
  100%{opacity:1;}
}
@keyframes slide-down{
  0% {opacity:0;transform: translateY(-100%)}
  100%{opacity:1;transform: translateY(0%)}
}
.wrapper{
  position:fixed;
  left:50%;
  transform: translateX(-50%);
  &.position-top{
    top: 0;
    transform: translateX(-50%);
    .toast{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-bottom{
    bottom: 0;
    .toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s;
    }

  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%);
    .toast{
      animation:fade-in 3s;
    }
  }
}
.toast{
  font-size:14px;
  min-height:40px;
  line-height: 1.8;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
 border-radius: 4px;
  color:white;
  .close{
    padding-left: 16px;
  }
  .line{
    height:100%;
    border-left:1px solid #666;
    margin-left:16px;
  }

}

</style>
