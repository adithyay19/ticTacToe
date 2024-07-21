import { MouseEventHandler, useState } from "react";


export default function Tile(props: any) {

    const [value, setValue] = useState('-');

    function setTileValue() {

        props.value = 'x';
        if(value !== 'X' && value !== 'O')
            setValue(props.value);
    }


    return(
        <button className="tileButton" onClick={setTileValue}>{value}</button>
    );
}