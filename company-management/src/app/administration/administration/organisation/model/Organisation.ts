export interface Organisation {
  id: number;
  name: string;
  level: number;
  parentId: number;
  children: Organisation[];
}
