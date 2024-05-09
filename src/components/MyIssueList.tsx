import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { useIssue, useMyself } from "~hooks";

import IssueList from "./IssueList";

function MyIssueList() {
  // 自分自身の情報を取得
  const myself = useMyself();

  // 担当の課題一覧を取得
  const {
    data: assignedIssues, // 課題データ
    ...assignedIssuesRest
  } = useIssue({ assigneeId: myself && [myself.id] });

  // 登録した課題一覧を取得
  const {
    data: createdIssues, // 課題データ
    ...createdIssuesRest
  } = useIssue({ createdUserId: myself && [myself.id] });

  return (
    <Tabs isLazy isFitted colorScheme="brand">
      <TabList position="sticky" zIndex={1} top={12} bg="white">
        <Tab>担当</Tab>
        <Tab>登録</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={0}>
          <IssueList params={{ assigneeId: myselfIds }} />
        </TabPanel>
        <TabPanel p={0}>
          <IssueList params={{ createdUserId: myselfIds }} />
          </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MyIssueList;
