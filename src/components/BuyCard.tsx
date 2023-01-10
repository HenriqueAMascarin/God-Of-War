import { arrayData } from "../utils/makeCard";
import { changeArray } from "../utils/changeArray";

type buyCard = {
    info: {
        img: string;
        title: string;
        liArray: string[];
        price: string;
        key: string;
    };
}

export default function BuyCard({info}: buyCard){
    let father: Element | null;

    function marketBuy(element: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        if(element.target instanceof Element){
            father = element.target.closest(".card");
            let fatherId = Number(father?.id);
            changeArray(arrayData[fatherId].info);
        }
    }

    return(
        <div className="card" key={info.key} id={info.key} >
            <img src={info.img} alt={info.title} className="imgCard"/>
            <div className="mainCard">
                <h3>{info.title}</h3>
                <ul>
                    {info.liArray.map((element, key) => {
                        return <li key={key}>{element}</li>
                    })}    
                </ul>
                <div className="buyDiv">
                    <p className="priceText">{info.price}</p>
                    <button className="buyButton" onClick={(e) => marketBuy(e)}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    );
}