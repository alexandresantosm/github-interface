import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { GithubProvider } from "./providers/GithubProvider";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <main>
        <GithubProvider>
          <Layout>
            <Profile />

            <Repositories />
          </Layout>
        </GithubProvider>
      </main>

      <GlobalStyles />
    </>
  );
}

export default App;
