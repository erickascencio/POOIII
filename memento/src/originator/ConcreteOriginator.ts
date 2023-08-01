import ConcreteMemento from "../memento/ConcreteMemento";
import Memento from "../memento/Memento";

export default class ConcreteOriginator {

    private state : string;

    constructor(state : string) {
        this.state = state;
        console.log(`Originator: Meu Estado Inicial é: ${state}`);
    }

    public doSomething(): void {
        console.log('Originator: Estou mudando meu estado...')
        this.state = this.generateRandomString(20);
        console.log(`Originator: Meu Estado foi alterado para: ${this.state}`);
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: Estado Alterado Para: ${this.state}`);
    }
}