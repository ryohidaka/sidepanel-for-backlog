import type { Backlog } from "backlog-js"
import * as backlogjs from "backlog-js"
import { useEffect, useState } from "react"

import { useBacklogAuth } from "./auth"

/**
 * BacklogのAPIクライアントのインスタンスを取得するカスタムフック
 * @return {InstanceType<typeof Backlog> | null} - APIクライアントのインスタンス
 */
export const useBacklog = () => {
  const { host, apiKey } = useBacklogAuth()
  const [backlog, setBacklog] = useState<InstanceType<typeof Backlog> | null>()

  useEffect(() => {
    // Backlog APIのクライアントを作成
    const backlog = new backlogjs.Backlog({ host, apiKey })
    setBacklog(backlog)
  }, [host, apiKey])

  return backlog
}
