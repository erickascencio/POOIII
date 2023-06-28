import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauces from "../componentes/Sauces";
import Sanduiche from "../produtos/Sanduiche";

export default class SanduicheBuilder {
    private sanduiche = new Sanduiche();

    reset(): void {
        this.sanduiche = new Sanduiche();
    }

    getSanduiche(): Sanduiche {  // ??
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }

    addSauce(sauce: Sauces){
        this.sanduiche.addSauce(sauce);
    }

    setSanduicheType(value: SanduicheType){
        this.sanduiche.sanduicheType = value;
    }

    setBread(bread: Bread){
        this.sanduiche.bread = bread;
    }

    setProtein(protein: Protein){
        this.sanduiche.protein = protein;
    }

    setSalad(salad: Salad){
        this.sanduiche.salad = salad;
    }
    
}