export interface CreateLeaveRequest {
  employeeId: number;
  type: string;
  dateFrom: Date;
  dateTo: Date;
  standInEmployeeId: number;
}
