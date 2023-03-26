
// Ejemplo resuelto con Factory pattern

// Interfaces
interface Factory<T> {
    createItem(): T;
}

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

// Factories
class GameboyCoinFactory implements Factory<Coin> {
    createItem(): Coin {
        return new GameboyCoin();
    }
}

class NintendoDSCoinFactory implements Factory<Coin> {
    createItem(): Coin {
        return new NintendoDSCoin();
    }
}

class GameboyEnemyFactory implements Factory<Enemy> {
    createItem(): Enemy {
        return new GameboyEnemy();
    }
}

class NintendoDSEnemyFactory implements Factory<Enemy> {
    createItem(): Enemy {
        return new NintendoDSEnemy();
    }
}