new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            vw = this;
            return vw.value < 37 ? 'not there yet' : 'done'
        }
    },
    watch: {
        value: function (value) {
            let vm = this;
            setTimeout(function () {
                vm.value = 0;
            }, 2000);
        }
    }
});