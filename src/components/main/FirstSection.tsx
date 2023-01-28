import { useEffect } from 'react';
import carousel from '../../utils/carousel';

export default function FirstSection(){

    useEffect(()=>{

        carousel({
            father: "#firstSection",
            carouselObject: ".iframesCarousel",
            items: "iframe",
            buttonClass: ".changeBtn",
            initialItem: 1, // initial 0-max
            leftGap: 30, 
            classActive: "active",
        });

    }, []);
    

    return(
        <section id='firstSection' >
            <div aria-label="Kratos e Atreus contra Valquíria" className="principalImg"></div>

            <div className='carouselSection'>
                <div className='carousel'>
                    <div className='iframesCarousel'>
                        <iframe src="https://www.youtube.com/embed/x6oF3Jxu7X0" title="God Of War Ragnarok - Trailer de Revelação do PlayStation Showcase 2021 | PS5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        <iframe src="https://www.youtube.com/embed/0N4J-7gsaGc" title="God of War Ragnarök - Trailer Cinematográfico: Pai e Filho | PS5, PS4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        <iframe src="https://www.youtube.com/embed/Fg_Cj7BJ1fY" title="O Que É... GOD OF WAR RAGNAROK!?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
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
        </section>
    );
}