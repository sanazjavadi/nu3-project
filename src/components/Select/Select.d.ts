declare namespace ISelect {
  export interface IProps {
    label: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: [variant | { title: string; value: string; id?: number }];
  }
}

export { ISelect };
