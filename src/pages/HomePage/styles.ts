import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterContainer = styled.div`
  height: 500px;
  width: 500px;

  background-color: var(--gray-1);
  border: 2px solid var(--gray-2);
`;

export const Form = styled.form`
  margin: 50px 0px 0px 0px;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 18px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: var(--gray-4);
  color: var(--white);
  margin: 20px 0px 0px 0px;
`;
