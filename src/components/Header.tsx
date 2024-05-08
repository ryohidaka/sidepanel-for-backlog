import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

/**
 * Headerコンポーネント
 * ページのヘッダー部分を表示するコンポーネント
 * @returns {JSX.Element} レンダリング結果
 */
function Header({ children }: Props): JSX.Element {
  return (
    <Box
      bgColor="brand.100"
      color="white"
      h={12}
      alignContent="center"
      p={3}
      as="header"
      position="sticky"
      top={0}
      zIndex={1}
    >
      {children}
    </Box>
  );
}

export default Header;
