import { Badge } from "@chakra-ui/react";
import type { Issue } from "backlog-js/dist/types/entity";

type Props = {
  status: Issue.Issue["status"];
};

/**
 * StatusBadgeコンポーネント
 * @param {Props} props - Propsのオブジェクト
 * @param {Issue.Issue["status"]} props.status - ステータスのオブジェクト
 * @returns {JSX.Element}
 */
function StatusBadge({ status }: Props): JSX.Element {
  return (
    <Badge bgColor={status.color} color="white">
      {status.name}
    </Badge>
  );
}

export default StatusBadge;
