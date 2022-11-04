export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: string;
  dateFrom: Date;
  dateTo: Date;
  days: number;
  hours: number;
  standInEmployeeId: number;
}
