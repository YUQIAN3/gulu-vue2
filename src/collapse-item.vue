<template>
  <div class="collapseItem" >
    <div class="title" @click="toggle">
       {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
props:{
  title:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required: true,
  }
},
  data(){
  return{open:false}
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(names)=>{
      if(names.indexOf(this.name)>=0){
        this.open=true
      }else{
        this.open=false
      }
    })
  },
  methods:{
    toggle(){
      if(this.open===true){
        this.eventBus.$emit('update:removeSelected',this.name)
      }else{
     this.eventBus.$emit('update:addSelected',this.name)
      }
    },
  },

}
</script>
<style lang="scss" scoped>
.collapseItem{
 > .title{
   border:1px solid #ddd;
   margin-top: -1px;
   margin-left: -1px;
   margin-right: -1px;
   min-height: 32px;
   display: flex;
   align-items: center;
   padding:0 8px;
 }
  > .content{
    padding: 8px;
  }
  &:first-child{
    > .title{
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child{
    > .title:last-child{
      border-bottom-left-radius: 4px;
      border-bottomright-radius: 4px;
    }
  }

}
</style>
