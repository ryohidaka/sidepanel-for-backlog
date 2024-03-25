import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Stack
} from "@chakra-ui/react"

import InputForm from "../components/InputForm"
import { HOST_PLACEHOLDER } from "../constants/auth"
import { useBacklogAuth } from "../hooks/auth"

/**
 * Backlogの設定フォームを表示するコンポーネント
 * @returns {JSX.Element} 設定フォームのコンポーネント
 */
function SettingForm() {
  // Backlog認証用のカスタムフックから必要な値と関数を取得
  const { host, apiKey, setHost, setAPIKey, save, clear } = useBacklogAuth()

  return (
    <Card>
      <CardHeader>
        <Heading size="md">設定</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing={4}>
          {/* ホスト名設定用のフォーム */}
          <InputForm
            name="host"
            label="ホスト名"
            defaultValue={host}
            placeholder={HOST_PLACEHOLDER}
            onChange={setHost}
          />

          {/* APIキー設定用のフォーム */}
          <InputForm
            name="api-key"
            label="APIキー"
            defaultValue={apiKey}
            type="password"
            onChange={setAPIKey}
          />
        </Stack>
      </CardBody>

      <CardFooter>
        <HStack w="100%" justifyContent="space-between">
          {/* 設定保存用のボタン */}
          <Button mt={4} colorScheme="brand" onClick={save}>
            保存
          </Button>

          {/* 設定削除用のボタン */}
          <Button mt={4} onClick={clear}>
            削除
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  )
}

export default SettingForm
