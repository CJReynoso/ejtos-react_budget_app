import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>
{
    const { dispatch} = useContext(AppContext);

    const changeCurrency= (currency) =>
    {
        dispatch(
            {
                type: 'CHG_CURRENCY',
                payload: currency,
            });

    }//end changeCurrency

    return(
        <div className='alert alert-secondary' style={{ backgroundColor: 'blue', color: 'white'}}>
            <span>Currency: </span>
            <select style={{backgroundColor: 'lightblue'}}name="Currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );

}//end Currency

export default Currency;
