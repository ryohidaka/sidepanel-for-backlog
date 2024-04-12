import * as backlogjs from "backlog-js"
import type { User } from "backlog-js/dist/types/entity"
import { useEffect, useState } from "react"

import { useBacklogAuth } from "./auth"

/**
 * 認証ユーザ情報を取得するカスタムフック
 * @return {User.User | null} - 認証ユーザ情報
 */
export const useMyself = () => {
  // Backlogの認証情報を取得
  const { host, apiKey } = useBacklogAuth()

  const [myself, setMyself] = useState<User.User | null>()

  useEffect(() => {
    // 認証情報がなければ何もしない
    if (!host || !apiKey) return

    // Backlog APIのクライアントを作成
    const backlog = new backlogjs.Backlog({ host, apiKey })

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
  }, [host, apiKey]) // 認証情報が変更されたときに再実行

  return myself
}
