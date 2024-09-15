import revealTrailer from '../../assets/images/revealTrailer.webp';
import trailerFilm from '../../assets/images/trailerFilm.webp';
import gameplayTrailer from '../../assets/images/gameplayTrailer.webp';

export default function ArrayTrailer() {
    const array = [{   
            img: revealTrailer,
            link: "https://www.youtube.com/watch?v=x6oF3Jxu7X0",
            alt: "Trailer de revelação God of War: Ragnarök"
        },
        {   
            img: trailerFilm,
            link: "https://www.youtube.com/watch?v=0N4J-7gsaGc",
            alt: "Trailer cinematográfico: pai e filho"
        },
        {   
            img: gameplayTrailer,
            link: "https://www.youtube.com/watch?v=Fg_Cj7BJ1fY",
            alt: "Vídeo sobre o God of War: Ragnarök"
        }
    ]

    return (
        <>
            {array.map((element, key) => {
                return (
                    <a href={element.link} key={key} title="Clique para assistir o vídeo" target='_blank'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
                        </svg>
                        <img src={element.img} alt={element.alt}/>
                    </a>
                )
            })}
        </>
    )
}