import {LeaveRequestType} from "./leave-request-type";

export interface LeaveRequestFilter {
  employeeId: number;
  dateFrom: Date;
  dateTo: Date;
  requestType: LeaveRequestType[];
}
