import { Stack } from "@chakra-ui/react";
import ListHeader from "~components/IssueList/ListHeader";
import MyIssueList from "~components/MyIssueList";
import Splash from "~components/Splash";
import { useBacklogAuth } from "~hooks";

function App() {
  // ログイン状態を取得
  const { isLoggedIn } = useBacklogAuth();

  return (
    <Stack w="xs">
      {isLoggedIn ? (
        <>
          <ListHeader title="課題一覧" />
          <MyIssueList />
        </>
      ) : (
        <Splash />
      )}
    </Stack>
  );
}

export default App;
