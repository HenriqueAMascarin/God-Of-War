import logo from '../../assets/images/logo.webp';
import headerScroll from '../../utils/headerScroll';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MarketHeader() {

    useEffect(() =>{
        headerScroll(40);
    }, []);

    return (
        <header id='header' className={"headerClass marketHeader"}>
            <div className='fixedHeader'>
                <div className='flexHeader'>
                    <div className='marginHeader'>
                        <Link to="/" className='a-logo'>
                            <img src={logo} alt="God of War logo" className='logo' aria-label="clique para voltar ao início"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
