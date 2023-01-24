import CardsMarket from "./CardsMarket";
import { typeArray } from "../../utils/makeCard";
import { useState } from "react";

export default function MarketMain() {
    
    const item = (localStorage.getItem("arrayData"));
    let dataJson: typeArray = [];

    if(item){
        dataJson = JSON.parse(item);
    }
    const [arrayItems, changeItems] = useState(dataJson);

    let totalPrice = 0;
    arrayItems.map(Element =>{
        totalPrice += Element.price;
    })

    return (
        <main className="mainMarket">
            <section className="buySection">
                <div className="buyDiv">
                    <div className="buyTitle">
                        <h1>Faturação e pagamento</h1>
                    </div>
                    <div className="buySections">
                        <div className="cardsSection">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {<CardsMarket arrayItems={arrayItems} changeItems={changeItems}/>}
                                </tbody>
                            </table>
                        </div>

                        <div className="buyInfo">
                            <div className="priceDiv">
                                <h3>Sub-total:</h3>
                                <p className="priceText">R${ totalPrice.toFixed(2) }</p>
                            </div>

                            <button>Fazer pedido</button>
                        </div>
                    </div>
                    

                </div>
            </section>
        </main>
    )
}