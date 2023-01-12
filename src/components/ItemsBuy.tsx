type data = {
    info?: any,
}

export default function ItemsBuy({info}: data){

    return(
        <div>
            <p>{info?.length || 0}</p>
        </div>
    )

}