import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

import { useIssue } from "~hooks/issue"
import { useMyself } from "~hooks/myself"

import IssueList from "./IssueList"

function MyIssueList() {
  // 自分自身の情報を取得
  const myself = useMyself()

  // 担当の課題一覧を取得
  const {
    data: assignedIssues, // 課題データ
    ...assignedIssuesRest
  } = useIssue({ assigneeId: myself && [myself.id] })

  // 登録した課題一覧を取得
  const {
    data: createdIssues, // 課題データ
    ...createdIssuesRest
  } = useIssue({ createdUserId: myself && [myself.id] })

  // タブの情報を定義
  const tabs = [
    {
      label: "担当",
      issues: assignedIssues,
      rest: assignedIssuesRest
    },
    {
      label: "登録",
      issues: createdIssues,
      rest: createdIssuesRest
    }
  ]

  return (
    <Tabs isLazy isFitted colorScheme="brand">
      <TabList position="sticky" zIndex={1} top={12} bg="white">
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} p={0}>
            <IssueList issues={tab.issues} {...tab.rest} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default MyIssueList
