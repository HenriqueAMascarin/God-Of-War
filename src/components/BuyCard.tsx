import { arrayData } from "../utils/makeCard";
import { useData } from "../context/Data";

export default function BuyCard() {
    let father: Element | null;
    const { data, change } = useData();

    function classAdd(element: Element) {
            element.classList.add("active");
            element.textContent = "Confira o carrinho";
    }

    function marketBuy(element: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
            {arrayData.map((el) => {
                return (
                    <div className="card" key={el?.key} id={el?.key} >
                        <img src={el?.img} alt={el?.title} className="imgCard" />
                        <div className="mainCard">
                            <h3>{el?.title}</h3>
                            <ul>
                                {el?.liArray.map((element, key) => {
                                    return <li key={key}>{element}</li>
                                })}
                            </ul>
                            <div className="buyDiv">
                                <p className="priceText">{el?.price}</p>
                                <button className="buyButton" onClick={(e) => marketBuy(e)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    );
}