import styled from "styled-components";

export const Container = styled.div`
  width: max-content;

  > label {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-3);
    height: 28px;
    width: 150px;
    border-radius: 8px;
    background-color: var(--gray-2);
    padding: 0px 5px 0px 5px;

    :hover {
      cursor: pointer;
    }
  }

  > input {
    width: 100%;
    height: 44px;
    font-size: 16px;
    color: var(--gray-3);
    border-bottom: 2px solid var(--gray-4);
    padding-top: 20px;

    ::placeholder {
      color: var(--gray-3);
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`;
