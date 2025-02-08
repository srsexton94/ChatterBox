export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password'
}

export interface InputProps {
  label: string;
  type?: InputTypes;
  isFull?: boolean;
}