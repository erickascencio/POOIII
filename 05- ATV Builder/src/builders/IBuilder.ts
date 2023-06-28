import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauces from "../componentes/Sauces";
import Sanduiche from "../produtos/Sanduiche";

export default interface IBuilder {
    reset(): void;
    getSanduiche(): Sanduiche;
    addSauce(sauce: Sauces);
    setSanduicheType(value: SanduicheType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);
}