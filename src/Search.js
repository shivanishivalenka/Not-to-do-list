// import { useState } from 'react'

const Search = (props) =>{
    const {addItem,text,setText,inputerror} = props;
    return (
        <div>
            <input type = "text" 
            value = {text}
            onChange = {(e)=>setText(e.target.value)}></input>
            <button onClick = {addItem} >ADD </button>
            <p>{inputerror}</p>
        </div>
    )

}
export default Search;