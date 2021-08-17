import React from "react";
import { useGithub } from "../../hooks/GithubHooks";

import * as S from "./styles";

export const Profile = () => {
  const { githubState } = useGithub();
  const { user } = githubState;

  return (
    <S.WrapperProfile>
      <S.WrapperProfileImage src={user.avatarUrl} alt="Avatar of user" />

      <S.WrapperProfileUserInfo>
        <div>
          <h1>{user.name}</h1>
          <S.WrapperProfileUsername>
            <h3>Username:</h3>
            <a href={user.publicUrl} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </S.WrapperProfileUsername>

          <S.WrapperProfileCompany>
            <h3>Company:</h3>
            <span>{user.company}</span>
          </S.WrapperProfileCompany>

          <S.WrapperProfileLocation>
            <h3>Location:</h3>
            <span>{user.location}</span>
          </S.WrapperProfileLocation>

          <S.WrapperProfileBlog>
            <h3>Blog:</h3>
            <a href={user.blog} target="_blank" rel="noreferrer">
              {user.blog}
            </a>
          </S.WrapperProfileBlog>
        </div>

        <S.WrapperProfileStatusCount>
          <S.WrapperProfileStatus>
            <h4>Followers</h4>
            <span>{user.followers}</span>
          </S.WrapperProfileStatus>

          <S.WrapperProfileStatus>
            <h4>Following</h4>
            <span>{user.following}</span>
          </S.WrapperProfileStatus>

          <S.WrapperProfileStatus>
            <h4>Gists</h4>
            <span>{user.publicGists}</span>
          </S.WrapperProfileStatus>

          <S.WrapperProfileStatus>
            <h4>Repos</h4>
            <span>{user.publicRepos}</span>
          </S.WrapperProfileStatus>
        </S.WrapperProfileStatusCount>
      </S.WrapperProfileUserInfo>
    </S.WrapperProfile>
  );
};
