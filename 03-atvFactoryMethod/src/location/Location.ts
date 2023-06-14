import IItems from "./midias/interface/InterfaceItems";

export default abstract class Location {
    startItem(): void{
        const item = this.createItem();
        item.start();
    }

    protected abstract createItem(): IItems;

}