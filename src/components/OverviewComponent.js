import React from "react";
import styled from "styled-components";

const Balance = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 480px) {
    padding: 12px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const BalanceText = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.isPositive ? '#28a745' : '#dc3545'};
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

const ToggleBtn = styled.button`
  padding: 10px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }
`;

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Balance>
      <BalanceText isPositive={bal >= 0}>
        Balance: ${bal.toFixed(2)}
      </BalanceText>
      <ToggleBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add"}
      </ToggleBtn>
    </Balance>
  );
};

export default OverviewComponent;