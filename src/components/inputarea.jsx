import React, {useState} from 'react';

function InputArea(props){

    const [item, setItem] = useState('');
    const [emptyItem, setEmptyItem] = useState(false);

    function handleList(event){ 
        setItem(event.target.value);
    }

    function setItems(){
        setEmptyItem(false);
        props.addItem(item);
    }
    
    return (
        <div className="form">
            <div className='errorNote' style={emptyItem ? {display:'block'} : {display:'none'}}>
                <span>You cannot add an empty item to the list!</span>
            </div>
            <input onChange={handleList} value={item} type="text" />
            <button onClick={() => {
                item === '' ? setEmptyItem(true) : setItems();
                setItem('');
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;
