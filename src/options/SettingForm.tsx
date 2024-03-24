import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
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
  const { host, apiKey, setHost, setAPIKey, save } = useBacklogAuth()

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
        {/* 設定保存用のボタン */}
        <Button mt={4} colorScheme="teal" onClick={save}>
          保存
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SettingForm
