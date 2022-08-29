class Cocktail{
    protected name: string;
    protected price: number = 0;
    protected ingredients: string[] = [];

    get addApple(): Cocktail {
        this.ingredients.push('apple');
        this.price += 0.5;
        return this;
    }
    get addOrange(): Cocktail {
        this.ingredients.push('orange');
        this.price += 0.5;
        return this;
    }
    get addMint(): Cocktail {
        this.ingredients.push('mint');
        this.price += 0.25;
        return this;
    }
    get addLemon(): Cocktail {
        this.ingredients.push('lemon');
        this.price += 1;
        return this;
    }
    get addCherry(): Cocktail {
        this.ingredients.push('cherry');
        this.price += 1;
        return this;
    }

    make(name):Cocktail {
        this.name = name;
        console.log(`${this.name} is made, price: ${this.price}`);
        return this;
    }
}

new Cocktail().addApple.addLemon.addApple.addCherry.addLemon.addApple.addLemon.make('My Cocktail');




