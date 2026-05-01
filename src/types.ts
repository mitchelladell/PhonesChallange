// types.ts
export interface IPhone {
  id: string;
  name: string;
  data: Record<string, string | number | null> | null;
}

export interface PhoneListProps {
  phoneList: IPhone[];
}
