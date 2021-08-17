import React, { createContext, useState } from "react";

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

  const contextValue = { githubState };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
