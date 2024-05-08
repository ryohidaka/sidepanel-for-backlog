import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";

import {
  APP_NAME,
  APP_VERSION_WITH_PREFIX,
  OPTIONS_PAGE_URL,
} from "~constants";

/**
 * Splashコンポーネント
 *
 * このコンポーネントは、アプリケーションのスプラッシュ画面を表示します。
 * ユーザーにホスト名とAPIキーの設定を促します。
 *
 * @returns {JSX.Element} スプラッシュ画面のコンポーネント
 */
function Splash(): JSX.Element {
  // スプラッシュ画面のコンポーネントを返す
  return (
    <VStack spacing={4} p={4}>
      {/* アプリケーション名を表示 */}
      <Heading as="h1" size="md" pt={6}>
        {APP_NAME} ({APP_VERSION_WITH_PREFIX})
      </Heading>

      {/* アイコン画像を表示 */}
      <Image src="/icon.png" alt="Backlogロゴ画像" boxSize="100px" />

      {/* 設定が必要であることをユーザーに通知 */}
      <Alert status="warning">
        <AlertIcon />
        ご利用には、ホスト名とAPIキーの設定が必要です。
      </Alert>

      {/* 設定画面へのリンクを提供 */}
      <Link href={OPTIONS_PAGE_URL} isExternal>
        <Button colorScheme="brand">設定画面へ移動</Button>
      </Link>
    </VStack>
  );
}

export default Splash;
