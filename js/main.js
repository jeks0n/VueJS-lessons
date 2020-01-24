new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        },
        increase: function() {
            this.counter++;
        }
    }
});