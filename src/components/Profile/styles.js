import styled from "styled-components";

export const WrapperProfile = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperProfileImage = styled.img`
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  margin: 0.5rem;
`;

export const WrapperProfileUserInfo = styled(WrapperProfile)`
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
`;

export const WrapperProfileUsername = styled(WrapperProfile)`
  align-items: center;

  a {
    color: #0080ff;
    text-decoration: none;
    margin-left: 0.5rem;
  }
`;

export const WrapperProfileStatusCount = styled(WrapperProfile)``;

export const WrapperProfileStatus = styled(WrapperProfile)`
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;
