import React, {useState} from 'react';
import { Typography } from '@mui/material';


function IncrementByAmount(props) {
    const [counter, setInputAmount] = useState(0);

    function handleChange(event) {
        setInputAmount(event.target.value)
    }

    function submitCount() {
        const value = counter
        console.log("value", value);
        props.dispatchFunction(value);
    }


    return (
        <div>
          <Typography>Please enter a number: </Typography>
            
            <input type="number" value={counter} onChange={handleChange} />

            <button onClick={submitCount}>Increment by Amount</button>
            <div>
              <Typography>{"Count: " + counter}</Typography>
             </div>
        </div>
    );
}

export default IncrementByAmount;