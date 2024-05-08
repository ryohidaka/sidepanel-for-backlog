import { AbsoluteCenter, Spinner, Stack } from "@chakra-ui/react";

/**
 * Loaderコンポーネント
 * ローディング中に表示するスピナーを中央に配置するコンポーネント
 * @returns {JSX.Element} レンダリング結果
 */
function Loader(): JSX.Element {
  return (
    <Stack position="fixed" w="100%" h="100%" top={0}>
      <AbsoluteCenter>
        <Spinner size="xl" />
      </AbsoluteCenter>
    </Stack>
  );
}

export default Loader;
