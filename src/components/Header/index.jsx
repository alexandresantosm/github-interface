import React, { useState } from "react";

import { useGithub } from "../../hooks/GithubHooks";
import * as S from "./styles";

export const Header = () => {
  const [usernameForSearch, setUsernameForSearch] = useState("");
  const { getUser } = useGithub();

  const handleChangeUsernameForSearch = (usename) => {
    if (!usename) {
      return;
    }

    return setUsernameForSearch(usename);
  };

  const handleSubmitGetUser = (event) => {
    event.preventDefault();

    if (!usernameForSearch) {
      return;
    }

    return getUser(usernameForSearch);
  };

  return (
    <S.WrapperHeader>
      <input
        type="text"
        placeholder="Digite o username para pesquisa..."
        onChange={(event) => handleChangeUsernameForSearch(event.target.value)}
      />
      <button type="submit" onClick={(event) => handleSubmitGetUser(event)}>
        <span>Buscar</span>
      </button>
    </S.WrapperHeader>
  );
};
