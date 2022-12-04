import principalImg from '../images_Fonts/images/principalGame.jpg';

export default function FirstSection(){
    return(
        <section>
            <img src={principalImg} alt="Kratos e Atreus contra uma inimiga"/>
            <div>
                <span className="changeBtn"></span>
                <div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/x6oF3Jxu7X0" title="God Of War Ragnarok - Trailer de Revelação do PlayStation Showcase 2021 | PS5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/0N4J-7gsaGc" title="God of War Ragnarök - Trailer Cinematográfico: Pai e Filho | PS5, PS4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/Fg_Cj7BJ1fY" title="O Que É... GOD OF WAR RAGNAROK!?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <span className="changeBtn"></span>
            </div>
        </section>
    );
}