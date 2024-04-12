import { useEffect, useState } from "react"

import { useBacklog } from "./backlog"

/**
 * プロジェクトIDを取得するカスタムフック
 * @return {number[]} - 取得したプロジェクトIDの配列
 */
export const useProject = () => {
  // Backlog APIのクライアントを取得
  const backlog = useBacklog()

  // プロジェクトIDを保持するためのstate
  const [projectId, setProjectId] = useState<number[]>([])

  useEffect(() => {
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
  }, [backlog]) // APIクライアントが更新されたときに再実行

  // プロジェクトIDを返す
  return projectId
}
