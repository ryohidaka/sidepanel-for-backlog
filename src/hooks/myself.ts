import type { User } from "backlog-js/dist/types/entity"
import { useEffect, useState } from "react"

import { useBacklog } from "./backlog"

/**
 * 認証ユーザ情報を取得するカスタムフック
 * @return {User.User | null} - 認証ユーザ情報
 */
export const useMyself = () => {
  // Backlog APIのクライアントを取得
  const backlog = useBacklog()

  const [myself, setMyself] = useState<User.User | null>()

  useEffect(() => {
    /**
     * 自分自身の情報を取得し、その情報をstateに保存する非同期関数
     */
    const fetchMyself = async () => {
      // 自分自身の情報を取得
      const myself = await backlog.getMyself()

      // 自分自身の情報をstateに保存
      setMyself(myself)
    }

    // 非同期関数を実行
    fetchMyself()
  }, [backlog]) // APIクライアントが更新されたときに再実行

  return myself
}
