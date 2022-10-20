import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-Group'
import Input from './input'
import Row from './row'
import Col from './column'
import Toast from './toast'
import plugin from './plugin'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
    el:"#app",
  data:{
      loading1:false,
       loading2:false,
       message:'hi',
    },
    created(){

    },

    methods:{
        showToast(){
        this.$toast('你的智商需要充值！', {
            position: 'middle',
            closeButton: {
                text: '已充值',
                callback () {
                    console.log('他说已经充值智商了')
                }
            },
            autoClose: false,
            autoCloseDelay: 3

        })
        },
        inputChange(e,x){
            console.log(e.target.value);
            console.log(x);
        }
    },




})
