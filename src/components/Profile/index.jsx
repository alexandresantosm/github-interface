import React from "react";

import * as S from "./styles";

export const Profile = () => {
  return (
    <S.WrapperProfile>
      <S.WrapperProfileImage
        src="https://avatars.githubusercontent.com/u/43150037?v=4"
        alt="Avatar of user"
      />

      <S.WrapperProfileUserInfo>
        <h1>Alexandre Santos</h1>

        <S.WrapperProfileUsername>
          <h3>Username:</h3>
          <a
            href="https://github.com/alexandresantosm"
            target="_blank"
            rel="noreferrer"
          >
            alexandresantosm
          </a>
        </S.WrapperProfileUsername>

        <S.WrapperProfileStatusCount>
          <S.WrapperProfileStatus>
            <h4>Followers</h4>
            <span>5</span>
          </S.WrapperProfileStatus>

          <S.WrapperProfileStatus>
            <h4>Following</h4>
            <span>7</span>
          </S.WrapperProfileStatus>

          <S.WrapperProfileStatus>
            <h4>Starred</h4>
            <span>4</span>
          </S.WrapperProfileStatus>
        </S.WrapperProfileStatusCount>
      </S.WrapperProfileUserInfo>
    </S.WrapperProfile>
  );
};
