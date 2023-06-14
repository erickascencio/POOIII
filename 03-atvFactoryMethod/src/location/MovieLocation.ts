import Location from "./Location";
import Movie from "./midias/Movie";
import InterfaceItems from "./midias/interface/InterfaceItems";

export default class MovieLocation extends Location {
    protected createItem(): InterfaceItems{
        return new Movie();
    }
}