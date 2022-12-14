import principalGame from "../assets/images/principalGame.jpg";
import gameplay from "../assets/images/gameplay.png"

export default function BuySection(){
    return(
        <section>
            
            <div>
                <span></span>
                <div>
                    <div>
                        <div className="card">
                            <img src={principalGame} alt="Imagem da versão deluxe" />
                            <h3>Edição deluxe</h3>
                            <ul>
                                <li>God of War Ragnarök PS4 e PS5</li>
                                <li>Armadura do Valescuro</li>
                                <li>Traje do Valescuro (cosmético)</li>
                                <li>Punho de Machado do Valescuro</li>
                                <li>Cabos das Lâminas do Valescuro</li>
                                <li>Livro de arte digital da Dark Horse</li>
                                <li>Trilha sonora digital oficial</li>
                                <li>Avatares da PSN para PS4 e PS5</li>
                            </ul>
                            <p>R$399.50</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <a href="https://youtu.be/6fNUO23I_BA?list=PLH9fqbYeMD3PekQX9N7clbjR4lKyNk6_C" target="_blank" >Desbrave as terras nórdicas</a>
                <img src={gameplay} alt="Imagem de gameplay do youtuber Brksedu" />
            </div>

        </section>
    )
}