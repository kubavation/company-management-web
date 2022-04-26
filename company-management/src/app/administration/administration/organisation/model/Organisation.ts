export interface Organisation {
  id: number;
  name: string;
  level: number;
  parentId: number;
  shortcut: string;
  description: number;
  dateFrom: Date;
  dateTo: Date;
  children: Organisation[];
}
