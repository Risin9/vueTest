Vue.component('button-counter',{
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">you click me {{ count }} times.</button>'
})
var app = new Vue({ 
    el: '#app',
    // data: {
    //     message: '初始值'
    // },
    // methods: {
    //     reverseMessage: function () {
    //         console.log(this.message);
    //         this.message = this.message.split('').reverse().join('')
    //     }
    // },
});

