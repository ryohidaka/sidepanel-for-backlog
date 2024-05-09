import { useEffect, useState } from "react";
import { useBacklog } from "use-backlog";

import {
  clearCredential,
  fetchCredential,
  getSpace,
  saveCredential,
} from "~utils";

/**
 * Backlogの認証情報を管理するフック
 * @param {Function} onSave 認証情報の保存成功時に呼び出される関数
 * @param {Function} onError 認証情報の保存失敗時に呼び出される関数
 * @returns {Object} 認証情報とその更新関数を含むオブジェクト
 */
export const useBacklogAuth = (onSave?: () => void, onError?: () => void) => {
  const [host, setHost] = useState<string>("");
  const [apiKey, setAPIKey] = useState<string>("");
  const { setConfig } = useBacklog();

  // コンポーネントのマウント時に認証情報を取得
  useEffect(() => {
    const initializeCredential = async () => {
      try {
        const { host, apiKey } = await fetchCredential();

        if (!host || !apiKey) return;

        // 認証可能かどうかを判定
        await getSpace(host, apiKey);

        setConfig?.({ host, apiKey });
      } catch (e) {
        console.error(e);
        onError?.();
      }
    };
    initializeCredential();
  }, []);

  // 認証情報を保存する
  const save = async () => {
    try {
      await saveCredential(host, apiKey);
      onSave?.();
    } catch (e) {
      console.error(e);
      onError?.();
    }
  };

  // 認証情報を削除する
  const clear = () => {
    try {
      clearCredential();
      setConfig?.({ host: "", apiKey: "" });
    } catch (e) {
      console.error(e);
    }
  };

  // 認証情報とその更新関数を返す
  return {
    host,
    apiKey,
    setHost,
    setAPIKey,
    save,
    clear,
  };
};
