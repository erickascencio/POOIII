import IPlatform from "./plataformas/IPlatform";
import Playstation from "./plataformas/Playstation";
import Xbox from "./plataformas/Xbox";
import AdvancedPlay from "./tiposplay/AdvancedPlay";
import Play from "./tiposplay/Play";

function startPlay(platform: IPlatform){
    console.log("Aguarde....");

    const live = new Play(platform);
    live.playing();
    live.result();
}

function startAdvancedPlay(platform: IPlatform){
    console.log("Aguarde....");

    const live = new AdvancedPlay(platform);
    live.playing();
    live.result();
    live.chalenge();
}

startPlay(new Playstation());
startPlay(new Xbox());
startAdvancedPlay(new Playstation());
startAdvancedPlay(new Xbox());