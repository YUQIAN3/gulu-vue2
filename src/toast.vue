<template>
  <div class="toast" ref="wrapper" :class="toastPosition">
    <slot></slot>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
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
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
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
.toast{
  font-size:14px;
  min-height:40px;
  line-height: 1.8;
  background: rgba(0,0,0,0.75);
  position:fixed;
  display: flex;
  left:50%;
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
  &.position-top{
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom{
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
