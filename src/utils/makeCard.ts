import BuyCard from "../components/BuyCard";

import kratosAndAtreus from "../assets/images/kratosAtreus.jpg";
import allCharacters from "../assets/images/characters.jpg";
import principalGame from "../assets/images/principalGame.jpg";

let arrayData = [
    {
        info: { img: kratosAndAtreus, title: "Edição PS4", liArray: ["God of War Ragnarök PS4"], price: "R$299,90", key: "0" },
    },
    {
        info: { img: allCharacters, title: "Edição PS5", liArray: ["God of War Ragnarök PS5"], price: "R$299,90", key: "1" },
    },
    {
        info: { img: principalGame, title: "Edição Premium", liArray: ["God of War Ragnarök PS4 e PS5", "Armadura do Valescuro", "Traje do Valescuro (cosmético)", "Punho de Machado do Valescuro", "Cabos das Lâminas do Valescuro", "Livro de arte digital da Dark Horse", "Trilha sonora digital   oficial", "Avatares da PSN para PS4 e PS5"], price: "R$399,90", key: "2" },
    },
]

let arrayLi: JSX.Element[] = [];

for (let i = 0; i < arrayData.length; i++) {
    arrayLi.push(BuyCard(
        {
            info: arrayData[i].info,
        }
    ))
}

export {arrayLi ,arrayData};