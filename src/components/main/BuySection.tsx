import gameplay from "../../assets/images/gameplay.png";
import  { useEffect } from "react";
import BuyCard from "./BuyCard";
import carousel from "../../utils/carousel";

export default function BuySection(){

    useEffect(()=>{

        carousel({
            father: "#buySection",
            carouselObject: ".carouselImgs",
            items: ".card",
            buttonClass: ".changeBtn",
            initialItem: 1, // initial 0-max
            leftGap: 30, 
            classActive: "active",
        });

    }, []);

    return(
        <section id="buySection" >

            <div className="buySectionDiv">
                <h2 className="titleBuy">Compre God of War Ragnarök</h2>

                <div className="carousel">
                    <h3 className="titleEditions">Edições</h3>

                    <div className="carouselImgs">
                        <BuyCard></BuyCard>
                    </div>
                </div>

                <div className="buttons">
                    <button className="changeBtn">
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM3 10.5L2 10.5L2 13.5L3 13.5L3 10.5Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="changeBtn">
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-arrow'>
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM3 10.5L2 10.5L2 13.5L3 13.5L3 10.5Z" fill="white"/>
                        </svg>
                    </button>
                </div>

            </div>

            <div className="gameplaySection">
                <div className="divGameplay">
                    <div className="fatherFilter">
                        <a href="https://youtu.be/6fNUO23I_BA?list=PLH9fqbYeMD3PekQX9N7clbjR4lKyNk6_C" target="_blank" >Desbrave as terras nórdicas</a>
                        <div className="gameplayFilter"></div>
                        <img src={gameplay} alt="Imagem de gameplay do youtuber Brksedu" />
                    </div>  
                    
                </div>
            </div>

        </section>
    )
}