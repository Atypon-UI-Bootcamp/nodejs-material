interface Bastery {
    name: string
}

class Pizza implements Bastery {
    name = 'pizza'
}

class VigiPizza extends Pizza {
    constructor() {
        super()
        this.name = 'Vigi pizza'
    }
}

class PepperoniPizza extends Pizza {
    constructor() {
        super()
        this.name = 'Pepperoni pizza'
    }
}


class PizzaStore {
    static createPizza(type:string): Pizza {
        switch (type) {
            case 'vigi':
                return new VigiPizza()
            case 'pepperoni':
                return new PepperoniPizza()
            default:
                return new Pizza()
        }
    }
}