import React, { useEffect, useState } from "react";
import { useGithub } from "../../hooks/GithubHooks";
import { RepositoryItem } from "../RepositoryItem";

import * as S from "./styles";

export const Repositories = () => {
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState();

  const { githubState, getUserRepos, getUserStarred } = useGithub();

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }

    setHasUserForSearchRepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  const renderRepositoriesItem = () => {
    return (
      <>
        {githubState.repositories.map((repo) => (
          <RepositoryItem
            key={repo.id}
            name={repo.name}
            fullname={repo.full_name}
            linkToRepo={repo.html_url}
          />
        ))}
      </>
    );
  };

  const renderStarredItem = () => {
    return (
      <>
        {githubState.starred.map((starred) => (
          <RepositoryItem
            key={starred.id}
            name={starred.name}
            fullname={starred.full_name}
            linkToRepo={starred.html_url}
          />
        ))}
      </>
    );
  };

  const renderContent = () => {
    return (
      <S.WrapperRepositories>
        <S.WrapperTabs>
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>{renderRepositoriesItem()}</S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>{renderStarredItem()}</S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      </S.WrapperRepositories>
    );
  };

  const renderNoContent = () => {
    return <></>;
  };

  return <>{hasUserForSearchRepos ? renderContent() : renderNoContent()}</>;
};
