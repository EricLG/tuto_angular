export class User {

    constructor(public name: string, public username: string) {

    }

    public sayHello() {
        console.log(this.name + this.username);
    }
}