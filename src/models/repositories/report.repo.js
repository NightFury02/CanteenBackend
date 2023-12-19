import report from "../report.model.js";

const findReportByTime = async(Time) => {
    return report.findOne({
        time: Time
    });
};
const findReportByUser = async(userId) => {
    return report.findOne({
        user_id: userId
    });
};
export {findReportByTime, findReportByUser}