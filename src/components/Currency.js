import React from 'react';

const Currency = () =>
{
    return(
        <div className='alert alert-secondary' style={{ backgroundColor: 'blue', color: 'white'}}>
            <span>Currency: </span>
            <select style={{backgroundColor: 'lightblue'}}name="Currency" id="Cu">
            <option value="Pnd">£ Pound</option>
            <option value="Dlls">$ Dollar</option>
            <option value="Eur">€ Euro</option>
            <option value="Ru">₹ Ruppee</option>
            </select>
        </div>
    );

}//end Currency

export default Currency;
