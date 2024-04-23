import React, {useState} from 'react';

function InputArea(props){

    const [item, setItem] = useState('');

    function handleList(event){ 
        setItem(event.target.value);
    }
    
    return (
        <div className="form">
            <input onChange={handleList} value={item} type="text" />
            <button onClick={() => {
                props.addItem(item);
                setItem('');
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;