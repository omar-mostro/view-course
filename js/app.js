new Vue({
    el: '#exercise',
    data: {
        attachedShrink: false,
        personalCssClass: '',
        isVisible: false,
        myStyle: {
            width: '100px',
            height: '150px',
            backgroundColor: 'gray'
        },
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },
    computed: {
        startEffect: function () {
            return {
                highlight: this.attachedShrink,
                shrink: !this.attachedShrink
            }
        },

    },
    methods:{
        startProgress: function () {
            let vm = this;
            let width = 0;

            setInterval(function () {
                width = width + 10;
                vm.progressBar.width = width + 'px';
            }, 500);
        }
    }

});
