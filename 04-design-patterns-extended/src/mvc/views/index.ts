export default class View {
    protected _links: string[] = [];
    protected _meta: string[] = [];
    protected _scripts: string[] = [];
    protected content: string;
    protected get header(): string {
        return `
        <!DOCTYPE html >
        <html lang="en" >
        <head>
            <meta charset="UTF-8" >
            <meta http - equiv="X-UA-Compatible" content = "IE=edge" >
            <meta name="viewport" content = "width=device-width, initial-scale=1.0" >
            ${this._meta.join('\n')}
            <title>${this.title}</title>
            ${this._links.join("\n")}
        </head>`
    };

    protected get body(): string {
        return `<body>${this.content}<body>${this._scripts.join('\n')}</html>`;
    }

    constructor(protected readonly title: string) { }

    build(): string {
        return `${this.header}${this.body}`
    }
}