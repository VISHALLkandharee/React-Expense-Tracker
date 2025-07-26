import React from 'react'
import styled from 'styled-components'



const Item = styled.div`
display : flex;
justify-content: space-between;
align-items:center;
font-weight: bold;
background-color:rgba(175, 175, 175, 0.53);
border-radius: 16px;
margin: 7.8px 0;
padding: 10px;
border-right: 5px solid ${(props)=>(props.isexpense ? "red" : "green")};

span {
mix-blend-mode: difference;
color: white;
}
`

const TransactionItem = ({transaction, removeTransaction}) => {
  return (
    <Item isexpense = {transaction.transtype === "expense"} className='p-4 bg-lavender'>
      <span >{transaction.details}</span>
      <span>{transaction.amount}</span>
      
      <button className='btn btn-danger' onClick={()=> removeTransaction(transaction.id)}>Remove</button>

    </Item>
  )
}

export default TransactionItem;
