import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { useGithub } from "./hooks/GithubHooks";

function App() {
  const { githubState } = useGithub();

  function renderLoading() {
    return <p>Loading...</p>;
  }

  function renderContent() {
    return (
      <>
        <Profile />
        <Repositories />
      </>
    );
  }

  return (
    <Layout>{githubState.isLoading ? renderLoading() : renderContent()}</Layout>
  );
}

export default App;
