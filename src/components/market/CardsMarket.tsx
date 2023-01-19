import { arrayData } from "../../utils/makeCard";



type arrayFilter = {
        img: string,
        title: string,
        liArray: string[],
        price: string,
        id: string
}[];

type data = {
    items: arrayFilter;
}

export default function CardsMarket({ items }: data) {
    let arrayFilter: arrayFilter = [];


    for (let keyNumber = 0; keyNumber < arrayData.length; keyNumber++) {
        let item = items.find((element) => element.id === keyNumber.toString())

        if (item) {
            arrayFilter.push(item);
        }
    }

    return (
        <>
            {arrayFilter.map((element, key) => {
                console.log(element)
                return(
                    <div key={key} className="cardBuy">
                        <div>
                            <img src={element.img} alt={element.img} />
                            <h2>God of war: Ragnarok - {element.title}</h2>
                        </div>

                        <div>
                            <p>Preço:</p>
                            <p>{element.price}</p>
                        </div>

                        <div>
                            <p>Quantidade</p>
                            <p>- {} +</p>
                        </div>

                        <div>
                            <p>Sub-total:</p>
                            <p>{}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}