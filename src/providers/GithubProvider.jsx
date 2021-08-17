import React, { createContext, useState, useCallback } from "react";

import { api } from "../services/api";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

export const GithubProvider = ({ children }) => {
  const initialGithubState = {
    user: {
      login: "",
      name: "",
      avatarUrl: "",
      blog: "",
      company: "",
      location: "",
      publicUrl: "",
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  };

  const [githubState, setGithubState] = useState(initialGithubState);

  const getUser = (username) => {
    api.get(`users/${username}`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        user: {
          login: data.login,
          name: data.name,
          avatarUrl: data.avatar_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          publicUrl: data.html_url,
          followers: data.followers,
          following: data.following,
          publicGists: data.public_gists,
          publicRepos: data.public_repos,
        },
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
