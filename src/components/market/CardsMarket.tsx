import { useEffect } from "react";
import { arrayData } from "../../utils/makeCard";
import { typeArray } from "../../utils/makeCard";

type data = {
    arrayItems: typeArray,
    changeItems: React.Dispatch<React.SetStateAction<typeArray>>;
}

export default function CardsMarket({ arrayItems, changeItems }: data) {
    let arrayFind: typeArray = [];

    for (let i = 0; i < arrayData.length; i++) {
        let item = arrayItems?.find(element => element.id === i.toString());

        if (item) {
            arrayFind.push(item);
        }
    }

    const addMore = (id: string) => {
        const newElement = arrayData[Number(id)];
        changeItems([...arrayItems, newElement]);
    }

    const removeMore = (id: string) => {
        const element = arrayItems.filter(element => element.id === id).pop();
        if (element) {
            const indexof = arrayItems.indexOf(element);
            changeItems(arrayItems.filter((el, index) => index != indexof));
        }
    }

    useEffect(() => {
        const array = JSON.stringify(arrayItems);
        localStorage.setItem("arrayData", array);
    }, [arrayItems]);

    return (
        <>

            {arrayFind.map((element, key) => {
                let length = arrayItems.filter(item => item.id === element.id).length;

                return (
                    <tr key={key}>
                        <td>
                            <div className="cardBuy">
                                <div className="photoDiv">
                                    <img src={element.img} alt={element.img} />
                                    <h2>God of war: Ragnarok - {element.title}</h2>
                                </div>

                                <div>
                                    <p className="removeDesk">Preço:</p>
                                    <p className="alignBuy">R${element.price.toFixed(2)}</p>
                                </div>

                                <div>
                                    <p className="removeDesk">Quantidade</p>
                                    <div className="alignBuy changeCard">
                                        <button onClick={() => removeMore(element.id)}>-</button>
                                        <p className="itemsQtd">{length}</p>
                                        <button onClick={() => addMore(element.id)}>+</button>
                                    </div>

                                </div>

                                <div>
                                    <p className="removeDesk">Sub-total:</p>
                                    <p className="alignBuy">R${(element.price * length).toFixed(2)}</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}