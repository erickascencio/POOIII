import Location from "./Location";
import Game from "./Midias/Game";
import InterfaceItems from "./midias/interface/InterfaceItems";


export default class GameLocation extends Location {
    protected createItem(): InterfaceItems{
        return new Game();
    } 
}