<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
  @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div class="g-slides-window" >
      <slot></slot>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPre">
        <g-icon name="left"></g-icon>
      </span>
      <span v-for="n in childrenLength" :class="{active:selectedIndex===n-1}" @click="select(n-1)">
  {{n}}
    </span>
      <span @click="onClickNext">
        <g-icon name="right"></g-icon>
      </span></div>
  </div>
</template>
<script>
import GIcon from './icon'
export default {
  components:{GIcon},
  props:{
    selected:{
      type:String,
    },
    autoPlay:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      childrenLength:0,
      lastSelectedIndex:undefined,
      timeId:undefined,
      startTouch:undefined
    }
  },
mounted(){
  this.updateChildren()
  this.playAutomatically()
  this.childrenLength=this.items.length
},
  updated(){
   this.updateChildren()
  },
  computed:{
    selectedIndex(){
      let index=this.names.indexOf(this.selected)
     if(index===-1){
       return 0
     }else{
       return index
     }
    },
    names(){
      return this.items.map(vm=>vm.name)
    },
    items(){
      return this.$children.filter(vm=>vm.$options.name==='SlidesItem')
    }
  },
  methods:{
    onClickPre(){this.select(this.selectedIndex-1)},
    onClickNext(){this.select(this.selectedIndex+1)},
    onMouseEnter(){
      this.pause()
    },
    onMouseLeave(){
      this.playAutomatically()
    },
    onTouchStart(e){
      this.pause()
      this.startTouch=e.touches[0]
      console.log('摸');
    },
    onTouchMove(){
      console.log('边摸变动');
    },
    onTouchEnd(e) {
      console.log('摸完了');
      let endTouch = e.changedTouches[0]
      let {clientX: x1, clientY: y1} = this.startTouch
      let {clientX: x2, clientY: y2} = endTouch
      let distance = Math.sqrt(Math.pow(x2 - x1, 2 )+Math.pow(y2 - y1, 2 ))
      console.log(distance);
      let deltaY = Math.abs(y2 - y1)
      let rate=deltaY/distance
      console.log('rate');
      console.log(rate);
      if (rate <0.5 ) {
        console.log('在滑我');
        if (x2 > x1) {
          console.log('right');
          this.select(this.selectedIndex + 1)

        } else {
          console.log('left');
          this.select(this.selectedIndex - 1)

        }
      }
      this.$nextTick(()=>{
        this.playAutomatically()
      })

    },
    select(newIndex){
      this.lastSelectedIndex=this.selectedIndex
      if(newIndex===-1){
        newIndex=this.names.length-1
      }
      if(newIndex===this.names.length){
        newIndex=0
      }
      this.$emit('update:selected',this.names[newIndex])
    },
    playAutomatically() {
      if(this.timeId){return}
      let run=()=>{

        let index = this.names.indexOf(this.getSelected())
        let newIndex=index+1
        this.select(newIndex)
        this.timeId=setTimeout(run,3000)
      }
      this.timeId=setTimeout(run,3000)
    },
    pause(){
     window.clearTimeout(this.timeId)
      this.timeId=undefined
    },
    getSelected(){
      let first=this.items[0]
      return this.selected||first.name
    },
    updateChildren(){
     let selected=this.getSelected()
      this.items.forEach((vm)=>{
        let reverse=this.selectedIndex>this.lastSelectedIndex?false:true
        if(this.timeId){
          if(this.lastSelectedIndex===this.items.length-1 && this.selectedIndex===0){
            reverse=false
          }
          if(this.lastSelectedIndex===0 && this.selectedIndex===this.items.length-1){
            reverse=true
          }
        }
        vm.reverse=reverse
        this.$nextTick(()=>{
          vm.selected=selected
        })

      })
    }
  }
}
</script>
<style lang="scss" scoped>
.g-slides{
  display:block;
  position: relative;
  &-window{
    overflow: hidden;
  }
  &-dots{
    padding:8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span{
      width: 20px;
      height:20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover{
       cursor: pointer;
      }
      &.active{
        background: black;
        color: white;
        &:hover{
          cursor: default;
        }
      }

    }





  }
}
</style>
