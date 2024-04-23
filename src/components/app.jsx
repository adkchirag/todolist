import React, { useState } from 'react'
import InputArea from './inputarea'
import TodoItem from './todoitem';

function App(){

    const [list, setList] = useState([]);

    function newItem(item){
        setList((prevItems) => {
            return [...prevItems, item,]
        }); 
    }

    function checkItem(itemID){
        setList((prevItems) => {
            return prevItems.filter((items, index) => index !== itemID );
        })
    }

    return(
        <div className='container'>
            <div className='heading'>
                <h1>To do list</h1>
            </div>
            <InputArea addItem={newItem} />
            <div className='note'>
                <span>Note: To remove an item from the list, Click on it!</span>
            </div>
            {list.map((newItem, index) => {
                return <TodoItem key={index} id={index} onChecked={checkItem} text={newItem}/>
            })}
        </div>
    )
}

export default App;