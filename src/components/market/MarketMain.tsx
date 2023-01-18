import CardsMarket from "./CardsMarket";

export default function MarketMain() {

    const item = (localStorage.getItem("arrayData"));
    let dataJson: {}[] | undefined = undefined;
    item ? dataJson = JSON.parse(item) : undefined;

    return (
        <main className="mainMarket">
            <section className="buySection">
                <div className="buyDiv">
                    <div className="buyTitle">
                        <h1>Faturação e pagamento</h1>
                    </div>
                    <div className="infoSections">
                        <div>
                            {dataJson && dataJson.length > 0 ? <CardsMarket items={dataJson} /> : <p>naotem</p>}
                        </div>


                        <div className="buyInfo">
                            <div>
                                <h3>Sub-total:</h3>
                                <p>{ }</p>
                            </div>

                            <button>Fazer pedido</button>
                        </div>
                    </div>
                    

                </div>
            </section>
        </main>
    )
}