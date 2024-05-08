import ListHeader from "~components/IssueList/ListHeader";
import MyIssueList from "~components/MyIssueList";
import Splash from "~components/Splash";
import { useBacklogAuth } from "~hooks";

function App() {
  // ログイン状態を取得
  const { isLoggedIn } = useBacklogAuth();

  return (
    <>
      {isLoggedIn ? (
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
