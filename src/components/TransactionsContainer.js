import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TransactionItem from "./TransactionItem.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const ShowTransactions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px 16px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-bottom: 16px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: #fff;
  color: #333;
  
  &:focus {
    border-color: #007bff;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 12px;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin: 12px 0 8px;
  }
`;

const NoTransactionsText = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 16px;
  margin: 24px 0;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

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
        placeholder='Search transactions...'
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
      />
      <SectionTitle>Transactions</SectionTitle>

      <ShowTransactions>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <NoTransactionsText>No Transactions</NoTransactionsText>
        )}
      </ShowTransactions>
    </Container>
  );
};

export default TransactionsContainer;