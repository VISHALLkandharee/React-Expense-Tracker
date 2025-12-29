import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  background-color: rgba(175, 175, 175, 0.2);
  border-radius: 12px;
  margin: 8px 0;
  padding: 16px;
  border-right: 5px solid ${props => props.isexpense ? "#dc3545" : "#28a745"};
  gap: 12px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 8px;
  }
`;

const TransactionDetails = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex: 1;
  min-width: 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 4px;
  }
`;

const DetailText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    white-space: normal;
    word-break: break-word;
  }
`;

const AmountText = styled.span`
  font-weight: bold;
  color: ${props => props.isexpense ? "#dc3545" : "#28a745"};
  min-width: fit-content;
`;

const RemoveBtn = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  font-size: 14px;
  
  &:hover {
    background-color: #c82333;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Item isexpense={transaction.transtype === "expense"}>
      <TransactionDetails>
        <DetailText>{transaction.details}</DetailText>
        <AmountText isexpense={transaction.transtype === "expense"}>
          ${transaction.amount.toFixed(2)}
        </AmountText>
      </TransactionDetails>
      <RemoveBtn onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveBtn>
    </Item>
  );
};

export default TransactionItem;