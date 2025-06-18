import { UserRole } from "@/core/enums/user-role.enum";
import { PracticeProcessDetailPermissions } from "./practice-process-detail-page.models";

export const getPracticeProcessDetailPermissions = (role: UserRole): PracticeProcessDetailPermissions => {
    return {
        canSubmitDeliverables: role === UserRole.STUDENT,
        canEvaluateDeliverables: role === UserRole.PROFESSOR,
        canScheduleFollowUps: role === UserRole.PROFESSOR || role === UserRole.STUDENT,
        canMarkAsCompletedFollowUps: role === UserRole.PROFESSOR,
        canMarkAsMissedFollowUps: role === UserRole.PROFESSOR,
        canMarkAsCancelledFollowUps: role === UserRole.PROFESSOR,
    }
}