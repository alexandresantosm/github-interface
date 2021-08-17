import React from "react";

import * as S from "./styles";

export const Repositories = () => {
  return (
    <S.WrapperRepositories>
      <S.WrapperTabs>
        <S.WrapperTabList>
          <S.WrapperTab>Repositories</S.WrapperTab>
          <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>

        <S.WrapperTabPanel>
          <p>Repositories</p>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <p>Starred</p>
        </S.WrapperTabPanel>
      </S.WrapperTabs>
    </S.WrapperRepositories>
  );
};
