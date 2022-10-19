import Toast from './toast'
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            let constructor=Vue.extend(Toast)
            let toast=new constructor({
                propsData:{
                    toastOptions
                }
            })
            console.log(toastOptions)
            toast.$slots.default=[message]
            toast.$mount()
          document.body.appendChild(toast.$el)
        }
    }
}
