import React from "react";

import * as S from "./styles";

export const RepositoryItem = ({ name, fullname, linkToRepo }) => {
  return (
    <S.WrapperRepositoryItem>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullname}
      </a>
    </S.WrapperRepositoryItem>
  );
};
