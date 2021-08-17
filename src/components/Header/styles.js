import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem;

  input {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;
    padding: 0.5rem;
    font-weight: 500;
  }

  button {
    background-color: #0080ff;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    border: none;

    transition: filter 0.5s;

    :hover {
      filter: brightness(0.9);
    }
  }

  span {
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
  }
`;
