import { arrayData, typeArray } from "../../utils/makeCard";

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

    return (
        <>

            {arrayFind.map((element, key) => {
                let length = arrayItems.filter(item => item.id === element.id).length;

                return (
                    <tr className="cardBuy" key={key}>
                        <td className="cardChildren photoDiv">
                            <div>
                                <img src={element.img} alt={element.img} />
                                <h2>God of war: Ragnarok - {element.title}</h2>
                            </div>
                        </td>

                        <td className="cardChildren">
                            <div className="flexCard">
                                <p className="removeDesk">Preço</p>
                                <p className="alignBuy">R${element.price.toFixed(2)}</p>
                            </div>
                        </td>

                        <td className="cardChildren">
                            <div className="flexCard">
                                <p className="removeDesk">Quantidade</p>
                                <div className="cardChildren alignBuy changeCard">
                                    <button onClick={() => removeMore(element.id)} className="changeItems" aria-label="remover item">-</button>
                                    <p className="itemsQtd">{length}</p>
                                    <button onClick={() => addMore(element.id)} className="changeItems" aria-label="adicionar item">+</button>
                                </div>
                            </div>

                        </td>

                        <td className="cardChildren">
                            <div className="flexCard">
                                <p className="removeDesk">Sub-total</p>
                                <p className="alignBuy">R${(element.price * length).toFixed(2)}</p>
                            </div>

                        </td>
                    </tr>

                )
            })}
        </>
    )
}