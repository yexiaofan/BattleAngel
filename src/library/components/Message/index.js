import message from './Message.vue'
import Vue from 'vue'

function renderMesg () {
    console.log(1)
    const Instance = new Vue({
        render (h) {
            return h(message);
        }
    });
    console.log(2)
    console.log(Instance)
    console.log(4)
    const component = Instance.$mount();
    console.log(component.$el)
    document.body.appendChild(component.$el);
    console.log(3)
}

const Message = {
    success: function (option) {
        console.log(1)
        //渲染
        renderMesg()
    }
}

export default Message