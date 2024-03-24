import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import type { HTMLInputTypeAttribute } from "react"

type Props = {
  name: string // 入力フィールドの名前
  label: string // フィールドのラベル
  defaultValue: string // デフォルトの値
  type?: HTMLInputTypeAttribute // 入力フィールドのタイプ
  placeholder?: string // プレースホルダーの文字列
  onChange?: (newValue: string) => void // 値が変更されたときのハンドラ
}

/**
 * 入力フォームコンポーネント
 * @param {object} props - コンポーネントのプロパティ
 * @param {string} props.name - 入力フィールドの名前
 * @param {string} props.label - フィールドのラベル
 * @param {string} props.defaultValue - デフォルトの値
 * @param {HTMLInputTypeAttribute} props.type - 入力フィールドのタイプ
 * @param {string} props.placeholder - プレースホルダーの文字列
 * @param {(newValue: string) => void} props.onChange - 値が変更されたときのハンドラ
 * @returns {JSX.Element} 入力フォームのエレメント
 */
function InputForm({
  name,
  label,
  defaultValue = "",
  type = "text",
  placeholder = "",
  onChange
}: Props): JSX.Element {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name} // htmlForと一致させるためにidを追加
        name={name}
        type={type}
        defaultValue={defaultValue} // 制御されていないコンポーネントにするためにvalueからdefaultValueに変更
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)} // onChangeが存在する場合のみ呼び出す
      />
    </FormControl>
  )
}

export default InputForm
