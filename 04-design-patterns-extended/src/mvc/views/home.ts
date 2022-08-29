import View from ".";

export default class HomeView extends View {

    constructor(protected readonly users: { name: string }[]) {
        super('Home page');
        const _users = Object.values(users).map((user: any) => {
            return `<h2>${user.name}</h2>`
        }).join('\n');
        this.content = `
        <h1>List of users!</h1>
        ${_users}
        <form action="/user/create" method="post">
            <input name="name" required />
            <input name="email" type = "email" required />
            <button>submit </button>
        </form>
        `
    }

}