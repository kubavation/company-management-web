export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: string;
  days: number;
  hours: number;
}
