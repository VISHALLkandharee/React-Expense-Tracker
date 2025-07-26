import React from "react";
import styled from "styled-components";

const Balance = styled.div`
padding: 8.3px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Balance>
      <span className="p-3 fw-bold text-success"> Balance : {bal}</span>
      <button className="btn btn-primary" onClick={()=>{setToggle(!toggle)}}>
      {(toggle) ? "Cancel" : "Add"}
      </button>
    </Balance>
  );
};

export default OverviewComponent;
