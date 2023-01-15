import kratosAndAtreus from "../assets/images/kratosAtreus.jpg";
import allCharacters from "../assets/images/characters.jpg";
import principalGame from "../assets/images/principalGame.jpg";

type array = 
    ({
        img: string;
        title: string;
        liArray: string[];
        price: string;
        key: string;
    })[]


export let arrayData: array = [
    
        { img: kratosAndAtreus, title: "Edição PS4", liArray: ["God of War Ragnarök PS4"], price: "R$299,90", key: "0" }
    ,

        { img: allCharacters, title: "Edição PS5", liArray: ["God of War Ragnarök PS5"], price: "R$299,90", key: "1" }
    ,
    
        { img: principalGame, title: "Edição Premium", liArray: ["God of War Ragnarök PS4 e PS5", "Armadura do Valescuro", "Traje do Valescuro (cosmético)", "Punho de Machado do Valescuro", "Cabos das Lâminas do Valescuro", "Livro de arte digital da Dark Horse", "Trilha sonora digital   oficial", "Avatares da PSN para PS4 e PS5"], price: "R$399,90", key: "2" }
    ,
]