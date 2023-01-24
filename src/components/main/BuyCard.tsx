import { useEffect, useState } from "react";
import { dataSave, useData } from "../../context/Data";
import { arrayData } from "../../utils/makeCard";

export default function BuyCard() {
    let father: Element | null;
    const { data, change } = useData();

    const itemsArray = localStorage.getItem("arrayData");

    useEffect(() => {
        change(itemsArray ? JSON.parse(itemsArray) : data);
    },[])

    useEffect(() =>{
        dataSave(data);
    },[data])

    const classAdd = (element: Element) => {
        element.classList.add("active");
        element.textContent = "Confira o carrinho";
    }

    const marketBuy = (element: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (element.target instanceof Element) {

            let button = element.target;

            father = button.closest(".card");

            classAdd(button);

            let fatherId = Number(father?.id);
            change([...data, arrayData[fatherId]]);
        }
    }


    return (
        <>
            {arrayData.map((element, key) => {
                return (
                    <div className="card" key={key} id={element?.id} >
                        <img src={element?.img} alt={element?.title} className="imgCard" />
                        <div className="mainCard">
                            <h3>{element?.title}</h3>
                            <ul>
                                {element?.liArray.map((element, key) => {
                                    return <li key={key}>{element}</li>
                                })}
                            </ul>
                            <div className="buyDiv">
                                <p className="priceText">R${element?.price}</p>
                                <button className="buyButton" onClick={(e) => marketBuy(e)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    );
}