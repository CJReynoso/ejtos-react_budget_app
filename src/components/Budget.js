import React, {useContext, userContext} from 'react';
import {AppContext} from '../context/AppContext'

const Budget = () =>
{
    const {budget} = useContext(AppContext);

    return(
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
}//end Budget

export default Budget;
