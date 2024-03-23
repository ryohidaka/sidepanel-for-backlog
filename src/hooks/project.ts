import * as backlogjs from "backlog-js"
import { useEffect, useState } from "react"

import { useBacklogAuth } from "./auth"

/**
 * プロジェクトIDを取得するカスタムフック
 * @return {number[]} - 取得したプロジェクトIDの配列
 */
export const useProject = () => {
  // Backlogの認証情報を取得
  const { host, apiKey } = useBacklogAuth()

  // プロジェクトIDを保持するためのstate
  const [projectId, setProjectId] = useState<number[]>([])

  useEffect(() => {
    // 認証情報がなければ何もしない
    if (!host || !apiKey) return

    // Backlog APIのクライアントを作成
    const backlog = new backlogjs.Backlog({ host, apiKey })

    /**
     * プロジェクトを取得し、そのIDをstateに保存する非同期関数
     */
    const fetchProject = async () => {
      // プロジェクトを取得
      const projects = await backlog.getProjects()

      // プロジェクトIDを取得
      const projectId = projects.map((project) => project.id)

      // プロジェクトIDをstateに保存
      setProjectId(projectId)
    }

    // 非同期関数を実行
    fetchProject()
  }, [host, apiKey]) // 認証情報が変更されたときに再実行

  // プロジェクトIDを返す
  return projectId
}
