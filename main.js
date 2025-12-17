const users = [];
let userAdded = 0;

do {
    let confirmation = confirm("Please add a new user.");
    if (!confirmation) {
        break;
    }
    const userInfo = getUserInfo();
    users.push(userInfo);
    userAdded++;
} while (confirm(`You have added ${userAdded} users. Do you want to enter more users? (OK for Yes, Cancel for No)`))

function getUserInfo() {
    const name = prompt("Enter user name:");
    if (!name) {
        alert("Name cannot be empty. Please try again.");
        return getUserInfo();
    }

    const age = Number(prompt("Enter user age:"));
    if (isNaN(age) || age <= 0) {
        alert("Invalid age entered. Please try again.");
        return getUserInfo();
    }
    const attendance = confirm("Is user attending? (OK for Yes, Cancel for No)");
    
    return { 
        name: name.trim(), 
        age: age, 
        attendance: attendance 
    };
}

function showAttendancePercentage() {
    const attendingUsers = users.filter(user => user.attendance);
    const percentage = (attendingUsers.length / users.length) * 100;
    alert(`Attendance Percentage: ${percentage.toFixed(2)}%`);
}

function creatTeams(numberOfTeams) {
    if (numberOfTeams <= 0 ) {
        alert("Invalid number of teams.");
        return;
    }

    if (numberOfTeams > users.length) {
        alert("Number of teams exceeds number of users.");
        return;
    }

    const shuffledUsersArray = shuffleArray(users.filter(user => user.attendance));

    const teams = []; 
    for (let i = 0; i < shuffledUsersArray.length; i++) {
        const indexTeam = i % numberOfTeams;
        if (!teams[indexTeam]) {
            teams[indexTeam] = [];
        }
        team = {
            name: shuffledUsersArray[i].name,
            index: i
        }

        teams[indexTeam].push(team);
    }

    console.log(`Teams info: ${JSON.stringify(teams, null, 2)}`);
    console.log("Teams:");

    teams.forEach((team, index) => {
        console.log(`TEAM ${index + 1}: `);
        team.forEach(user => {
            console.log(`\n ${user.name} - ${user.index}`);
        });
    });
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log("Final Student List:");
console.table(users);
showAttendancePercentage();
if (confirm("Do you want to create teams?")) {
    const numberOfTeams = Number(prompt("Enter number of teams:"));
    creatTeams(numberOfTeams)
}