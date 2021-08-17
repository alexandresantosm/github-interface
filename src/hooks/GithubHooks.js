import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

export const useGithub = () => {
  const { githubState } = useContext(GithubContext);
  return {
    githubState,
  };
};
