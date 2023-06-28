import IBuilder from "../builders/IBuilder";
import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauces from "../componentes/Sauces";

export default class Director {
    constructor (private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.hotdog);
        this.builder.setBread(Bread.tresqueijos);
        this.builder.setProtein(Protein.salsicha);
        this.builder.setSalad(Salad.vinagrete);
        this.builder.addSauce(new Sauces("mostarda"));
        this.builder.addSauce(new Sauces("ketchup"));
        this.builder.addSauce(new Sauces("maionese"));
    }

    constructXsalada(){
        this.builder.setSanduicheType(SanduicheType.xsalada);
        this.builder.setBread(Bread.frances);
        this.builder.setProtein(Protein.hamburguer);
        this.builder.setSalad(Salad.alface);
        this.builder.addSauce(new Sauces("ketchup"));
        this.builder.addSauce(new Sauces("maionese"));
    }

}