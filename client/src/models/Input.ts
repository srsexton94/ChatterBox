export enum InputTypes {
  TEXT = "text",
  PASSWORD = "password",
}

export interface InputProps {
  label: string;
  value?: string;
  type?: InputTypes;
  isFull?: boolean;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
