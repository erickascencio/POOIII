import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";


declare var process;
let location: Location;

if (process.argv.includes("filme")){
    location= new MovieLocation();
    location.startItem();
} else if (process.argv.includes("game")){
    location=new GameLocation();
    location.startItem();
}else {
    console.log("tipo de midia invalida!")
}