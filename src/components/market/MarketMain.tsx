export default function MarketMain(){

    let item = null;

    return(
        <main className="mainMarket">
            <section className="buySection">
                <div className="buyDiv">
                    <div>
                        <h1>Faturação e pagamento</h1>
                    </div>

                    <div>
                        {item ? <></> : <p>naotem</p>}
                    </div>

                    <div>
                        <p>Sub-total</p>
                        <p>{}</p>
                    </div>

                    <button>Fazer pedido</button>
                    
                </div>
            </section>
        </main>
    )
}