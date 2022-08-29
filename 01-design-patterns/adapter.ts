class LegacyWidget {
    output(content) {
        return content;
    }
}

class NewWidget {
    constructor(protected content) {}

    render() {
        return `<div>${this.content}</div>`;
    }
}

class WidgetAdapter extends NewWidget {
    
    constructor(protected content, protected legacyWidget: LegacyWidget) {
        super(content);
    }

    render(): string {
        return this.legacyWidget.output(this.content);
    }
}

class App {
    constructor(protected widget: NewWidget) {}

    render() {
        return this.widget.render();
    }
}

new App( new NewWidget('my widget') ).render();
// new App( new LegacyWidget() ).render(); error
new App( new WidgetAdapter('my legacy widget', new LegacyWidget()) ).render();