import React from "react";

import * as S from "./styles";

export const RepositoryItem = ({ name, fullname, linkToRepo }) => {
  return (
    <S.WrapperRepositoryItem>
      <S.WrapperRepositoryTitle>{name}</S.WrapperRepositoryTitle>
      <S.WrapperRepositoryFullName>full name:</S.WrapperRepositoryFullName>
      <S.WrapperRepositoryLink
        href={linkToRepo}
        target="_blank"
        rel="noreferrer"
      >
        {fullname}
      </S.WrapperRepositoryLink>
    </S.WrapperRepositoryItem>
  );
};
