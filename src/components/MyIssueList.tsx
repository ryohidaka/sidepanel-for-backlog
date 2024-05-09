import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import IssueList from "./IssueList";
import { useMyself } from "use-backlog";

function MyIssueList() {
  // 自分自身の情報を取得
  const { myself } = useMyself();
  const myselfIds = myself ? [myself.id] : [];

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
