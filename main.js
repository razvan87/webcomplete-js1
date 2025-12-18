import { getUserInfo } from "./userInput.js";
import { creatTeams } from "./teams.js";

const users = [];

do {
    if (users.length === 0) {
        const confirmation = confirm("Please add the first user. (OK for Yes, Cancel for No)");
        if (!confirmation) {
            break;
        }
    }

    const userInfo = getUserInfo();
    users.push(userInfo);
} while (confirm(`You have added ${users.length} users. Do you want to enter more users? (OK for Yes, Cancel for No)`))

console.table(users); 
showAttendancePercentage();
if (confirm("Do you want to create teams?")) {
    const numberOfTeams = Number(prompt("Please enter teams number:"));
    creatTeams(users, numberOfTeams)
}   

function showAttendancePercentage() {
    const attendingUsers = users.filter(user => user.attendance);
    const percentage = (attendingUsers.length / users.length) * 100;
    alert(`Attendance percentage: ${percentage.toFixed(2)}%`);
}