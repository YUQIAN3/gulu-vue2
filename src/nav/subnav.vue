<template >
  <div class="g-subnav" :class="{active,vertical}" v-click-outside="close">
    <span class="g-subnav-label" @click="onClick" >
      <slot name="title"></slot>
      <span class="g-subnav-icon" :class="{open,vertical}">
         <g-icon name="right" ></g-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave"
                  @after-enter="afterEnter">
        <div class="g-subnav-popover" v-show="open" :class="{vertical:vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-subnav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script>
import ClickOutside from '../click-outside';
import GIcon from '../icon'
export default {
  components: {GIcon},
  directives: {ClickOutside},
  name: 'Subnav',
  inject: ['root', 'vertical'],
  props: {
    name: {
      type: String,
      require: true
    }
  },
data(){
    return {open:false,
    }
},
  computed: {
    active () {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods:{
    enter (el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    leave: function (el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave: function (el) {
      el.style.height = 'auto'
    },
    onClick(){
      this.open=!this.open
    },
    close(){
      this.open=false
    },
    updateNamePath(){
      this.active=true
      this.root.namePath.unshift(this.name)
      if(this.$parent.updateNamePath){
        this.$parent.updateNamePath()
      }else{

      }

    }
  }
}
</script>
<style lang="scss" scoped>
.g-subnav{
  position:relative;
  &:not(.vertical){
    &.active{
      &::after{
        content:'';
        position:absolute;
        top:100%;
        left:0;
        border-bottom:3px solid #4a90e2;
        width:100%;

      }

    }
  }

  &-label{
    padding:  10px 20px;
    display: block;
  }
  &-icon{
    display: none;
  }
  &-popover{
    transition: height 250ms;
    background: white;
    position:absolute;
    top:100%;
    left:0;
    white-space: nowrap;
    margin-top:4px;
    box-shadow: 0 0 3px grey;
    border-radius: 4px;
    font-size: 12px;
    color:grey;
    min-width: 8em;
    &.vertical {
      position: static;
      border-radius: 0;
      border:none;
      box-shadow: none;
      overflow: hidden;
    }
  }

}
.g-subnav .g-subnav {
  .g-subnav-popover{
  top:0;
  left: 100%;
  margin-left: 8px;
}
  .g-subnav-label{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .g-subnav-icon{
    transition: transform 200ms;
    display: inline-flex;margin-left: 1em;
    svg{fill:grey;}
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }

    &.open{
      transform:rotate(180deg);
    }
  }
  &.active{
    &::after{
     display: none;
    }
  }


}
</style>
