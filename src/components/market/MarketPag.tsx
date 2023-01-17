import Footer from "../main/Footer";
import MarketHeader from "./MarketHeader";
import "../../styles/market/marketImports.scss";
import MarketMain from "./MarketMain";

export default function MarketPag(){
    return(
        <>
            <MarketHeader/>
            <MarketMain/>
            <Footer/>
        </>
    )
}