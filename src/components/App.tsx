import "../styles/App.scss"
import Main from "./main/Main"
import {Routes, Route} from 'react-router-dom';
import MarketPag from "./market/MarketPag";

export default function App() {

  return(
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/market" element={<MarketPag/>} />
      </Routes>
    </>
  )
}
