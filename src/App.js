import './App.css';
import Search from './Search';
import List from './List';
import {useState} from 'react';
function App() {
  const [text,setText] = useState('')
  const [items,setItems] = useState([])
  const [inputerror,setInputError] = useState('')
  
  const addItem = () => {
    if (text === '') {
      dispError();
    }
    else if (items.includes(text)){
      setInputError('Thats already on the list Idiot!!')
    }
    else{
    setInputError('');
    setItems(items.concat(text));
    // console.log(text)s
    // console.log(items)
    }
  }

  const dispError = () =>{
    setInputError('Write something you eejit!')
  }
  
  return (
    <div className="App">
      <h1>To-not-do List!</h1>
      <Search 
      items = {items}
      setItems = {setItems}
      addItem = {addItem}
      text = {text}
      setText = {setText}
      inputerror = {inputerror}
      setInputError = {setInputError}
      />
      <List 
      items = {items}
      text = {text}
      
      setItems = {setItems}/>

    </div>
  );
}

export default App;
