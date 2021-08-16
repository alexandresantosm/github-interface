import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";

import { ResetCSS } from "./styles/resetCSS";

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

      <ResetCSS />
    </>
  );
}

export default App;
