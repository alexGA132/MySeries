import React, { useState } from "react";


export default function SearchBox(props) {
    
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(event){
        setInputValue(event.target.value)
        props.onChangeFilterValue(event.target.value)
    }


    return (
        <div className="row justify-content-center m-5">
            <div className="col-6 col-md-6">
                <input value={inputValue} onChange={(handleInputChange)} type="text"className="form-control" placeholder="Digite o nome da série..." />
            </div>
        </div>
    )
}
