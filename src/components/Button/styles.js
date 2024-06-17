import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-top: -65px;

  > button:hover {
    background-color: gray;
  }
`;