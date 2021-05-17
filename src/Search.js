// import { useState } from 'react'

const Search = (props) =>{
    const {addItem,text,setText,inputerror} = props;
    const handelKeyPress = (e) =>{
        if (e.keyCode === 13) {
            e.target.click();
        }
    }
    return (
        <div>
            <input type = "text" 
            value = {text}
            onChange = {(e)=>setText(e.target.value)}
            onKeyPress = {handelKeyPress}></input>
            <button onClick = {addItem} >ADD </button>
            <p>{inputerror}</p>
        </div>
    )

}
export default Search;