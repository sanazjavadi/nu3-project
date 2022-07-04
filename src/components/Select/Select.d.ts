declare namespace ISelect {
  export interface IProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: [variant | { title: string; value: string; id?: number }];
  }
}

export { ISelect };
