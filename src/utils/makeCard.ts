import kratosAndAtreus from "../assets/images/kratosAtreus.webp";
import allCharacters from "../assets/images/characters.webp";
import principalGame from "../assets/images/principalGame.webp";

export type typeArray = 
    ({
        img: string;
        title: string;
        liArray: string[];
        price: number;
        id: string;
    })[]


export let arrayData: typeArray = [
    
        { img: kratosAndAtreus, title: "Edição PS4", liArray: ["God of War Ragnarök PS4"], price: 299.90, id: "0" }
    ,

        { img: allCharacters, title: "Edição PS5", liArray: ["God of War Ragnarök PS5"], price: 299.90, id: "1" }
    ,

        { img: principalGame, title: "Edição Premium", liArray: ["God of War Ragnarök PS4 e PS5", "Armadura do Valescuro", "Traje do Valescuro (cosmético)", "Punho de Machado do Valescuro", "Cabos das Lâminas do Valescuro", "Livro de arte digital da Dark Horse", "Trilha sonora digital   oficial", "Avatares da PSN para PS4 e PS5"], price: 399.90, id: "2" }
    ,
]