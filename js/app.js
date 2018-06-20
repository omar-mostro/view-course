new Vue({
    el: '#app',
    data: {
        startNewGame: false,
        humanLife: 100,
        monsterLife: 100,
        turns: []
    },
    methods: {
        startGame: function () {
            this.startNewGame = true;
            this.humanLife = 100;
            this.monsterLife = 100;
            this.turns = []

        },
        attack: function () {

            let damage = this.getRandomInt(8, 15);
            this.turns.unshift({
                isHuman: true,
                text: 'Player hits monster for ' + damage
            });
            this.monsterLife -= damage;


            this.monsterAttacks();

            this.winStatus();
        },
        specialAttack: function () {
            let damage = this.getRandomInt(8, 20);
            this.turns.unshift({
                isHuman: true,
                text: 'Player hits monster attack for ' + damage
            });
            this.monsterLife -= damage;
            this.monsterAttacks();
            this.winStatus();

        },
        heal: function () {
            if (this.humanLife < 90) {
                let heal = this.getRandomInt(2, 20)
                this.humanLife += heal ;
                this.turns.unshift({
                    isHuman: true,
                    text: 'Player heals for ' + heal
                });
            }
            this.monsterAttacks();

        },
        giveUp: function () {
            this.startNewGame = false;
            this.humanAttack = false;
            this.humanLife = 100;
            this.monsterLife = 100;
        },
        monsterAttacks: function () {
            let damage = this.getRandomInt(1, 15);
            this.turns.unshift({
                isHuman: false,
                text: 'Monster hits Player for ' + damage
            });
            this.humanLife -= damage
        },
        getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        winStatus: function () {
            if (this.humanLife <= 0) {
                if (confirm('Perdiste, ¿deseas comenzar un nuevo juego?')) {
                    this.startGame()
                }

                return false
            }

            if (this.monsterLife <= 0) {
                if (confirm('Ganaste, deseas comenzar un nuevo juego?')) {
                    this.startGame()
                }

                return false
            }
        }
    }
});

