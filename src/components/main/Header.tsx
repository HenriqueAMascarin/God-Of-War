import { useEffect, useState } from 'react';
import { useData } from '../../context/Data';
import headerScroll from '../../utils/headerScroll';
import bladeChaos from '../../assets/images/chaosSword.webp';
import logo from '../../assets/images/logo.webp';
import { Link } from 'react-router-dom';

export default function Header() {
    // //manipulação de estado
    const [headerActive, changeActive] = useState(false); //esse boolean seria o tipo do headerActive
    const {data} = useData();

    useEffect(() =>{
        headerScroll(60);
    }, []);

    //tipos da array 
    type arr = {
        name: string,
        href: string,
    }[];

    //array de li
    const liArr: arr = [
        {
            name: "Ínicio",
            href: "#firstSection",
        },
        {
            name: "Sobre",
            href: "#infoSection",
        },
        {
            name: "Comprar",
            href: "#buySection",
        },
    ];

    //função que busca a tag A clicada atraves da ul 
    function closeWindow(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
        if (e.target instanceof Element && e.target.tagName === "A") {
            changeActive(!headerActive);
        }
    }

    return (
        <header id='header' className={headerActive ? "active headerClass" : "headerClass"} >
            <div className='fixedHeader'>
                <div className='flexHeader'>
                    <div className='marginHeader'>
                        <div className='blades' onClick={(() => changeActive(!headerActive))}>
                            <img src={bladeChaos} alt="espada do caos"></img>
                            <img src={bladeChaos} alt="espada do caos"></img>
                        </div>
                        <Link to="/market" className='marketBtn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='cartSvg'>
                                <title>Carrinho de compras</title>
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg>
                            <span className='countData'>{data.length}</span>
                        </Link>
                    
                        <nav className='mainNav'>
                            <ul onClick={(event) => closeWindow(event)}>
                                {liArr.map((li, key) =>
                                    <li key={key}><a href={li.href}>{li.name}</a></li>
                                )}
                            </ul>
                        </nav>
                        <a href={"#firstSection"} className='a-logo'>
                            <img src={logo} alt="God of War logo" className='logo' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}