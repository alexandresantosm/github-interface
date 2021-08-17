import React from "react";

import { GithubProvider } from "./providers/GithubProvider";
import App from "./App";

import { GlobalStyles } from "./styles/global";

export const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <App />
        <GlobalStyles />
      </GithubProvider>
    </main>
  );
};
