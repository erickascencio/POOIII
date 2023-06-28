import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauces from "../componentes/Sauces";


export default class Sanduiche {
    private _sanduicheType: SanduicheType;
    
    private _bread: Bread;
  
    private _protein: Protein;
    
    private _salad: Salad;
    
    private _sauce : Sauces [] = [];

    addSauce(sauce: Sauces){
        this._sauce.push(sauce);
    }

    public getSauce () : Sauces []{
        return this._sauce;
    }

    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }

    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }
    public get salad(): Salad {
        return this._salad;
    }
    public set salad(value: Salad) {
        this._salad = value;
    }
    
}