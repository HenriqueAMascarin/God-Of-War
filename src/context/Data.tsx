import { createContext, useContext, useState } from "react";

const DataContext = createContext<{data: {}[], change: React.Dispatch<React.SetStateAction<{}[]>>}>({data: [], change: useState});

export default function DataProvider({children}:any){
    const [dataArray, changeData] = useState<{}[]>([]);
    
    return(
        <DataContext.Provider 
        value={{
            data: dataArray,
            change: changeData,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    const context = useContext(DataContext);
    const {data, change} = context;
    return {data, change};
}

export function dataSave(data:{}[]){
    let length = data.length.toString();
    localStorage.setItem("itemsLength", length);

    let arrayData = JSON.stringify(data)
    localStorage.setItem("arrayData", arrayData);
}