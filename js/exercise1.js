new Vue({
    el: '#exercise',
    data: {
        name: 'Vin Diesel',
        age: '32',
        image: 'https://avatars.mds.yandex.net/get-pdb/918543/3e60927f-55a8-448c-a1e1-6f28242a6ecc/s1200'
    },
    methods: {
        multipliedAge: function() {
            return 3 * this.age;
        },
        randomValue: function() {
            return Math.random();
        }
    }
});