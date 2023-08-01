import Originator from "../originator/Originator";
import Memento from "../memento/Memento";

export default class Caretaker {
    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nCaretaker: Salvando Estado Atual do originator...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`Caretaker: Restaurando Estado para: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Caretaker: Aqui está a lista de mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}