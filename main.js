var gladiator = {
    fight: function (monster) {
        var champHP = this.setHitpoints();
        var monstHP = monster.setHitpoints();
        var action = true;
        var turn = 1;

        console.log('~~~~~ ' + this.name + ' vs ' + monster.name + ' ~~~~~');

        while (action === true) {
            var champDmg = this.setAttack();
            var monstDmg = monster.setAttack();

            console.log('===== Turn ' + turn + ' =====');
            console.log(this.name + ' HP: ' + champHP);
            console.log(monster.name + ' HP: ' + monstHP);

            monstHP = monstHP - champDmg;
            champHP = champHP - monstDmg;
            turn++;

            console.log(this.name + ' hits ' + monster.name + ' dealing ' + champDmg + ' damage');
            console.log(monster.name + ' hits ' + this.name + ' dealing ' + monstDmg + ' damage');

            if (champHP <= 0) {
                console.log('~~~~~ ' + monster.name + ' wins! ~~~~~');
                action = false;
            }
            if (monstHP <= 0) {
                console.log('~~~~~ ' + this.name + ' wins! ~~~~~');
                action = false;
            }
        }
    },
    setAttack: function () {
        return Math.floor( Math.random() * 9 ) + 1;
    },
    setHitpoints: function () {
        return Math.floor( Math.random() * 20 ) + 80;
    }
};

var Champion = function(name) {
    this.name = name;
};

Champion.prototype = gladiator;

var Monster = function(name) {
    this.name = name;
};

Monster.prototype = gladiator;
