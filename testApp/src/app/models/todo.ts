export class Todo {

    constructor(
        public title: string,
        public content: string,
        public important: boolean
    ) {

    }

    public toggle() {
        this.important = !this.important;
    }
    
  public isAwesomeDiv() {
    return this.important;
  }
}
