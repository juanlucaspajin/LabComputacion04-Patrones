interface Coin {
    render();
    giveMoney();
}

interface Enemy {
    lifePoints();
    energyPoints();
}

// Objetos
class GameboyCoin implements Coin {
    render() {
        return 'Gameboy coin';
    }
    giveMoney() {
        return 'Gameboy give money';
    }
}

class NintendoDSCoin implements Coin {
    render() {
        return 'Nintendo DS Coin';
    }
    giveMoney() {
        return 'Nintendo DS give money';
    }
}

class GameboyEnemy implements Enemy {
    lifePoints() {
        return 100;
    }
    energyPoints() {
        return 200;
    }
}

class NintendoDSEnemy implements Enemy {
    lifePoints() {
        return 150;
    }
    energyPoints() {
        return 300;
    }
}

// Abstract factory implementation
interface AbstractFactory {
    createCoin(): Coin;
    createEnemy(): Enemy;
}

class GameboyItemFactory implements AbstractFactory {
    createCoin(): Coin {
        return new GameboyCoin();
    }
    createEnemy(): Enemy {
        return new GameboyEnemy();
    }
}

class NintendoDSFactory implements AbstractFactory {
    createCoin(): Coin {
        return new NintendoDSCoin();
    }
    createEnemy(): Enemy {
        return new NintendoDSEnemy();
    }
}