import {Subject} from "./Subjects.enum";
import {ClassroomAssignment} from "./ClassroomAssignment";
import moment from 'moment';

const MAX_ASSIGNMENTS = 3;

export class Classroom {

    classAssignments:Array<ClassroomAssignment> = [];

    getTotalAssignments() {
        console.log('this.subjects',Subject);
        // console.log( ' is taking this assignment: ', this.subject, 'and has a total of', this.assignments, 'assignments');
    }

    addAssignment(ca:ClassroomAssignment) {
        if(this.isReadyToAdd(ca) ) {
            this.classAssignments.push(ca);
        }
    }

    private isReadyToAdd(ca:ClassroomAssignment):boolean {
        // const numAssignedToday = this.classAssignments.filter(c => moment(c.startDate).isBetween(moment().startOf('day'), moment().endOf('day'))).length;
        for (const c of this.classAssignments) {
            const numAssignedToday = this.classAssignments.filter(c => moment(c.startDate).isBetween(moment().startOf('day'), moment().endOf('day'))).length;
            console.log(numAssignedToday);
            if(numAssignedToday <= MAX_ASSIGNMENTS) {
                return true;
            }
        }




    listAssignments() {

    }


}
