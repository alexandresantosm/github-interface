import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <main>
        <Layout>
          <Profile />

          <Repositories />
        </Layout>
      </main>

      <GlobalStyles />
    </>
  );
}

export default App;
