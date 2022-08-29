interface Component {
    render():string;
}

class Button implements Component {
    render(): string {
        return '<button>Click me</button>';
    }
}

class Widget implements Component {
    constructor(protected component:Component){}

    render(): string {
        return this.component.render();
    }
}

class Dialog extends Widget {
    render(): string {
        return `<dialog>${this.component.render()}</dialog>`;
    }
}

const button = new Button();

const dialog = new Dialog(button);

dialog.render();// <dialog><button>Click me</button></dialog>