<template >
  <div class="g-subnav" :class="{active}" v-click-outside="close">
    <span class="g-subnav-label" @click="onClick" >
      <slot name="title"></slot>
      <span class="g-subnav-icon" :class="{open}">
         <g-icon name="right" ></g-icon>
      </span>

    </span>
    <div class="g-subnav-popover" v-show="open">
      <slot></slot>
    </div>

  </div>
</template>
<script>
import ClickOutside from '../click-outside';
import GIcon from '../icon'
export default{
  components:{GIcon},
  directives: {ClickOutside},
  name:'Subnav',
  inject:['root'],
  props:{
    name:{
     type:String,
     require:true
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
  &-label{
    padding:  10px 20px;
    display: block;
  }
  &-icon{
    display: none;
  }
  &-popover{
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
    display: inline-flex;
    svg{fill:grey;}

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
