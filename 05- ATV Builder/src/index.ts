import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./produtos/Sanduiche";


const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Montando Sanduiche");
console.log("Tipo: " + hotdog.sanduicheType);
console.log("Molhos adicionados: " + hotdog.getSauce().length);

director.constructXsalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Montando Sanduiche");
console.log("Tipo: " + xsalada.sanduicheType);
console.log("Molhos adicionados: " + xsalada.getSauce().length);