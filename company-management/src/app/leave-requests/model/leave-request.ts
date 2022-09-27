export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: string;
  date: Date;
  days: number;
  hours: number;
}
