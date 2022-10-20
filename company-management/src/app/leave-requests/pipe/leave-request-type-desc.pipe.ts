import { Pipe, PipeTransform } from '@angular/core';
import {LeaveRequestType} from "../model/leave-request-type";

@Pipe({
  name: 'leaveRequestTypeDesc',
})
export class LeaveRequestTypeDescPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return LeaveRequestType[value];
  }

}
