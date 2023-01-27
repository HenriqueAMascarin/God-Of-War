import CardsMarket from "./CardsMarket";
import { typeArray } from "../../utils/makeCard";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function MarketMain() {

    const item = (localStorage.getItem("arrayData"));
    let dataJson: typeArray = [];

    if (item) {
        dataJson = JSON.parse(item);
    }
    const [arrayItems, changeItems] = useState(dataJson);

    let totalPrice = 0;
    arrayItems.map(Element => {
        totalPrice += Element.price;
    })

    const noItem =
        <div className="noItem">
            <Link to="/" className='marketBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <title>Carrinho de compras</title>
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
            </Link>
            <h2>Adicione itens ao carrinho</h2>
        </div>;

    useEffect(() => {
        const array = JSON.stringify(arrayItems);
        localStorage.setItem("arrayData", array);
    }, [arrayItems]);

    return (
        <main className="mainMarket">
            <section className="buySection">
                <div className="buyDiv">
                    <div className="buyTitle">
                        <h1>Faturação e pagamento</h1>
                    </div>

                    <div className="buySections">
                        {arrayItems.length > 0 ?
                            <table cellSpacing={0} className="cardsSection">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                        <th>Sub-total</th>
                                    </tr>
                                </thead>
                                <tbody className="flexTBody">
                                    <CardsMarket arrayItems={arrayItems} changeItems={changeItems} />
                                </tbody>
                            </table>
                            : noItem}

                        <div className="buyInfo">
                            <div className="priceDiv">
                                <h3>Sub-total:</h3>
                                <p className="priceText">R${totalPrice.toFixed(2)}</p>
                            </div>

                            <button>Fazer pedido</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}