import { PracticeProcessFollowUpStatus } from "./practice-process.enums"

export const PRACTICE_PROCESS_CONSTRAINTS = {
    DELIVERABLE: {
        GRADE: {
            MIN: 0,
            MAX: 5
        }
    }
}

export const PRACTICE_PROCESS_FOLLOW_UP_SORT_PRIORITY: Record<PracticeProcessFollowUpStatus, number> = {
    [PracticeProcessFollowUpStatus.SCHEDULED]: 0,
    [PracticeProcessFollowUpStatus.COMPLETED]: 1,
    [PracticeProcessFollowUpStatus.MISSED]: 2,
    [PracticeProcessFollowUpStatus.CANCELLED]: 3,
};
