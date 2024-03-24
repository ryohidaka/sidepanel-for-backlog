import { SecureStorage } from "@plasmohq/storage/secure"

import {
  STORAGE_KEY_API_KEY,
  STORAGE_KEY_HOST,
  STORAGE_PASSWORD
} from "~constants"

// SecureStorageのインスタンスを作成
const storage = new SecureStorage()

/**
 * 認証情報を取得する非同期関数
 * @returns {Object} ホスト情報とAPIキー
 */
export const fetchCredential = async () => {
  await storage.setPassword(STORAGE_PASSWORD)
  const host = await storage.get(STORAGE_KEY_HOST)
  const apiKey = await storage.get(STORAGE_KEY_API_KEY)
  return { host, apiKey }
}

/**
 * 認証情報を保存する非同期関数
 * @param {string} host ホスト情報
 * @param {string} apiKey APIキー
 */
export const saveCredential = async (host: string, apiKey: string) => {
  try {
    await storage.setPassword(STORAGE_PASSWORD)
    await storage.set(STORAGE_KEY_HOST, host)
    await storage.set(STORAGE_KEY_API_KEY, apiKey)
    alert("保存が完了しました。")
  } catch (e) {
    console.error(e)
  }
}

/**
 * 認証情報を削除する非同期関数
 */
export const clearCredential = async () => {
  if (!window.confirm("本当に削除してもよろしいですか？")) return

  try {
    await storage.setPassword(STORAGE_PASSWORD)
    await storage.removeAll()
    alert("削除が完了しました。")
  } catch (e) {
    console.error(e)
  }
}
