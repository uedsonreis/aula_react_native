import { TextInputProps } from "react-native";

export interface PropsType {
    label: string;
    onChange: (text: string) => void;
    inputProps?: TextInputProps
}