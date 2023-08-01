import Caretaker from "./caretaker/Caretaker";
import ConcreteOriginator from "./originator/ConcreteOriginator";

const originator = new ConcreteOriginator('Mementoooooooo');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');
caretaker.showHistory();

console.log('\nClient: Voltando um estado!\n');
caretaker.undo();

console.log('\nClient: Mais uma vez!\n');
caretaker.undo();