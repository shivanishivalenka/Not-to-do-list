// import { useState } from 'react'

const Search = (props) =>{
    const {addItem,text,setText,inputerror} = props;
    const handelKeyPress = (e) =>{
        if (e.which === 13) {
            addItem()
            setText('')
        }
    }
    return (
        <div>
            <input type = "text"
            value = {text}
            onChange = {(e)=>setText(e.target.value)}
            onKeyPress = {handelKeyPress}></input>
            <button onClick = {addItem}>ADD </button>
            {/* onKeyPress = {handelKeyPress} */}
            <p>{inputerror}</p>
        </div>
    )

}
export default Search;