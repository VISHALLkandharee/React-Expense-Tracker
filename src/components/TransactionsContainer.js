import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TransactionItem from "./TransactionItem.js"

const Container = styled.div`
display: flex;
flex-direction : column;
`

const ShowTransactions = styled.div`
`



const Input = styled.input`
  padding: 7px;
  outline: none;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 7px;
`;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
    const [search, setSearch] = useState("");
    const [filteredTransactions, setFilteredTransactions] = useState([]);
  
    // Sync filtered transactions when search or transactions change
    useEffect(() => {
      if (!search || !search.trim().length) {
        setFilteredTransactions(transactions);
        return;
      }
  
      const filtered = transactions.filter((item) =>
        item.details.toLowerCase().includes(search.trim().toLowerCase())
      );
  
      setFilteredTransactions(filtered);
    }, [transactions, search]);
  

  return (
    <Container>
      <Input
      type='search'
      placeholder='Search Here..'
      onChange={(e)=>{setSearch(e.target.value)}}
      />
      <p >Transactions</p>

<ShowTransactions>
    {filteredTransactions.length > 0 ? (
        filteredTransactions.map((transaction) => (
            <TransactionItem
                key={transaction.id} // Assuming each transaction has a unique id
                transaction={transaction}
                removeTransaction={removeTransaction}
            />
        ))
    ) : (
        <p className="mx-3 text-secondary">No Transactions : </p>
    )}
</ShowTransactions>
    </Container>
  )
}

export default TransactionsContainer
