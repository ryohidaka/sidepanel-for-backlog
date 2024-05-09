import { useEffect } from "react";
import { useBacklog } from "use-backlog";
import ListHeader from "~components/IssueList/ListHeader";
import MyIssueList from "~components/MyIssueList";
import Splash from "~components/Splash";
import { fetchCredential } from "~utils";

function App() {
  // ログイン状態を取得
  const { backlog, setConfig } = useBacklog();

  useEffect(() => {
    const initializeCredential = async () => {
      const { host, apiKey } = await fetchCredential();
      if (!host || !apiKey) return;
      setConfig?.({ host, apiKey });
    };
    initializeCredential();
  }, []);

  return (
    <>
      {backlog ? (
        <>
          <ListHeader title="課題一覧" />
          <MyIssueList />
        </>
      ) : (
        <Splash />
      )}
    </>
  );
}

export default App;
