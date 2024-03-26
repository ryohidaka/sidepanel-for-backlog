import { useEffect, useState } from "react"

import { clearCredential, fetchCredential, saveCredential } from "~utils"

/**
 * Backlogの認証情報を管理するフック
 * @param {Function} onSave 認証情報の保存成功時に呼び出される関数
 * @param {Function} onError 認証情報の保存失敗時に呼び出される関数
 * @returns {Object} 認証情報とその更新関数を含むオブジェクト
 */
export const useBacklogAuth = (onSave?: () => void, onError?: () => void) => {
  const [host, setHost] = useState<string>("")
  const [apiKey, setAPIKey] = useState<string>("")

  // TODO: 値が格納されているかではなく、認証できているかを返却するように改修
  const isLoggedIn = host && apiKey

  // コンポーネントのマウント時に認証情報を取得
  useEffect(() => {
    const initializeCredential = async () => {
      const { host, apiKey } = await fetchCredential()
      setHost(host)
      setAPIKey(apiKey)
    }
    initializeCredential()
  }, [])

  // 認証情報を保存する
  const save = async () => {
    try {
      await saveCredential(host, apiKey)
      onSave()
    } catch (e) {
      console.error(e)
      onError()
    }
  }

  // 認証情報を削除する
  const clear = () => {
    try {
      clearCredential()
      setHost("")
      setAPIKey("")
    } catch (e) {
      console.error(e)
    }
  }

  // 認証情報とその更新関数を返す
  return {
    host,
    apiKey,
    isLoggedIn,
    setHost,
    setAPIKey,
    save,
    clear
  }
}
