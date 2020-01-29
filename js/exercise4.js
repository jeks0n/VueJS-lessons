new Vue({
    el: '#exercise',
    data: {
        switchClass: true,
        startedDemo: false,
        timerId: null,
        italic: 'italic',
        input1: null,
        input2: null,
        input3: null,
        input4: null,
        progressWidth: 0,
        progressTimerId: null,
        startedProgressBar: false
    },
    computed: {
        divClasses: function() {
            return {
                highlight: this.switchClass,
                shrink: !this.switchClass
            }
        },
        progressBar: function() {
            return {
                height: 24 + 'px',
                width: this.progressWidth + '%',
                background: 'grey'
            }
        }
    },
    methods: {
        startEffect: function() {
            this.startedDemo = !this.startedDemo;
            if (this.startedDemo === true)  {
                var vm = this;
                this.timerId = setInterval(function() {
                                vm.switchClass = !vm.switchClass;
                            }, 1000);
            } else {
                return clearInterval(this.timerId);
            }
        },
        startProgressBar: function() {
            this.startedProgressBar = !this.startedProgressBar;
            if (this.startedProgressBar === true)  {
                var vm = this;
                this.progressTimerId = setInterval(function() {
                    vm.progressWidth = (vm.progressWidth + 1) % 30;
                }, 100);
            } else {
                return clearInterval(this.progressTimerId);
            }
        }
    }
});