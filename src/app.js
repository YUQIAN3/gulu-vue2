import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-Group'
import Input from './input'
import Row from './row'
import Col from './column'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Cascader from './cascader'

Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-cascader',Cascader)
Vue.component('g-col',Col)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-header',Header)
Vue.component('g-icon',Icon)
Vue.component('g-input',Input)
Vue.component('g-layout',Layout)
Vue.component('g-popover',Popover)
Vue.component('g-row',Row)
Vue.component('g-sider',Sider)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-toast',Toast)

Vue.use(plugin)
new Vue({
    el:"#app",
  data:{
        source:[{name:'山东',
            children:[
                {name:'济南',children:[{name:'历下区'},{name:'市中区'},{name:'槐荫区'}]},
                {name:'菏泽',children:[{name:'牡丹区'},{name:'定陶区'}]}
            ]},
             {name:'浙江',
                 children:[
                     {name:'杭州',children:[{name:'上城区'},{name:'下城区'},{name:'江干区'}]},
                     {name:'嘉兴'}] },
            {name:'安徽',children: [{name:'合肥'},{name:'芜湖'}]}
        ],
      loading1:false,
       loading2:false,
       message:'hi',
      selectedTab:'sports',
      selectedCollapse:['1','2'],

    },
    created(){

    },

    methods:{
        showToast1(){this.showToast('top')},
        showToast2(){this.showToast('middle')},
        showToast3(){this.showToast('bottom')},
        showToast(position){
        this.$toast(`你的智商目前为止 ${parseInt(Math.random()*100)} 你的智商需要充值！`, {
            position,
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
