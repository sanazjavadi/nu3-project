declare namespace IInput {
  export interface IProps {
    type: string;
    placeholder: string;
    error: string;
    className: string;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export { IInput };
