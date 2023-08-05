// eslint-disable-next-line
import React, {useContext, userContext} from 'react';
import {AppContext} from '../context/AppContext'

const Budget = () =>
{
    const {budget, currency} = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    const maxBudget=20000;

    const onChangeBudget = event =>
    {
        const totalExpenses = expenses.reduce((total, item) =>
        {
            return (total = total + item.cost);
        }, 0);

        if(event.target.value > maxBudget) 
            {
                alert("The value cannot exceed "+ maxBudget);
                return;
            }

            if(event.target.value < totalExpenses) 
            {
                alert("The value cannot be less than the spending amount ("+ totalExpenses +")");
                return;
            }
    }

    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type='number' step='10' min='0' placeholder={budget} onChange={onChangeBudget}></input>
        </div>
    );
}//end Budget

export default Budget;
