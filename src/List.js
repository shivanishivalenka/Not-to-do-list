const List = (props) =>{
    const {items,setItems} = props
    // const removal = (e) =>{
    //     items.pop(e.target.value)


    // }
    return (
        <div>
        <ul>
            {items.map((item,index) =>(
                
               <div key = {index}> 
                   <li>{item} 
                   <button value = {item} onClick = {(e)=>{
                        setItems(items.filter(item => items.indexOf(item) !== index))
                       
                   }}
                    //    setItems(items.filter(item => items.indexOf(item) != index))
                    >Clear</button></li>
                   
                </div> 
                
                
                
                
                
                
            ) )
            }
        </ul>
        </div>
    )
}
export default List;