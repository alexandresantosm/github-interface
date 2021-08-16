import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <main>
        <Layout>
          <Profile />

          <div>Repositories</div>

          <div>Starred</div>
        </Layout>
      </main>

      <GlobalStyles />
    </>
  );
}

export default App;
