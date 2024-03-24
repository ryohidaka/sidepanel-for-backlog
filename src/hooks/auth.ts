import { useEffect, useState } from "react"

import { clearCredential, fetchCredential, saveCredential } from "~utils"

/**
 * Backlogの認証情報を管理するフック
 * @returns {Object} 認証情報とその更新関数
 */
export const useBacklogAuth = () => {
  const [host, setHost] = useState<string>("")
  const [apiKey, setAPIKey] = useState<string>("")

  // コンポーネントのマウント時に認証情報を取得
  useEffect(() => {
    const initializeCredential = async () => {
      const { host, apiKey } = await fetchCredential()
      setHost(host)
      setAPIKey(apiKey)
    }
    initializeCredential()
  }, [])

  // 認証情報を削除する
  const clear = () => {
    clearCredential()
    setHost("")
    setAPIKey("")
  }

  // 認証情報とその更新関数を返す
  return {
    host,
    apiKey,
    setHost,
    setAPIKey,
    save: () => saveCredential(host, apiKey),
    clear
  }
}
