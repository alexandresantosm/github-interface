import React from "react";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.WrapperHeader>
      <input type="text" placeholder="Digite o username para pesquisa..." />
      <button type="submit">
        <span>Buscar</span>
      </button>
    </S.WrapperHeader>
  );
};
