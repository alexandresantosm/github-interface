import styled from "styled-components";

export const WrapperRepositoryItem = styled.div`
  width: 21.875rem;
  height: 9.375rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  align-content: center;
  box-shadow: 0px 6px 12px 0 rgba(0, 0, 0, 0.16);

  &,
  h2,
  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const WrapperRepositoryTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const WrapperRepositoryFullName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #2d3748;
`;

export const WrapperRepositoryLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #0080ff;
`;
