import React from "react";
import { RepositoryItem } from "../RepositoryItem";

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
          <RepositoryItem
            name="01-github-explorer"
            fullname="alexandresantosm/01-github-explorer"
            linkToRepo="https://github.com/alexandresantosm/01-github-explorer"
          />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <RepositoryItem
            name="alura-imersao-react-alurakut"
            fullname="alexandresantosm/alura-imersao-react-alurakut"
            linkToRepo="https://github.com/alexandresantosm/alura-imersao-react-alurakut"
          />
        </S.WrapperTabPanel>
      </S.WrapperTabs>
    </S.WrapperRepositories>
  );
};
