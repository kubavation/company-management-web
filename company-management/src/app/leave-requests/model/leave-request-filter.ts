import {LeaveRequestType} from "./leave-request-type";
import {KeyValue} from "../../shared/model/key-value";

export interface LeaveRequestFilter {
  dateFrom: Date;
  dateTo: Date;
  requestType: KeyValue<string>[];
}
