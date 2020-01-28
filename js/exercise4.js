new Vue({
    el: '#exercise',
    data: {
        switchClass: true,
        startDemo: false,
        timerId: null
    },
    computed: {
        divClasses: function() {
            return {
                highlight: this.switchClass,
                shrink: !this.switchClass
            }
        }
    },
    methods: {
        startEffect: function() {
            this.startDemo = !this.startDemo;
            if (this.startDemo === true)  {
                var vm = this;
                this.timerId = setInterval(function() {
                                vm.switchClass = !vm.switchClass;
                            }, 1000);
            } else {
                return clearInterval(this.timerId);
            }
        }
    }
});