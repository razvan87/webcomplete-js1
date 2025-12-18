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

function getUserInfo() {
    const name = prompt("Enter user name:");
    if (!name) {
        alert("Name cannot be empty. Please try again.");
        return getUserInfo();
    }

    const age = Number(prompt("Enter user age (1-99):"));
    if (!Number.isInteger(age) || age < 1 || age > 99) {
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
    alert(`Attendance percentage: ${percentage.toFixed(2)}%`);
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

    const shuffledPresentUsersArray = shuffleArray(users.filter(user => user.attendance));

    const teams = Array.from({ length: numberOfTeams }, () => []);
    shuffledPresentUsersArray.forEach((user, index) => {
        teams[index % numberOfTeams].push({ name: user.name, index: index });
    });
    
    displayTeams(teams);
}

function displayTeams(teams) {
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

console.table(users);
showAttendancePercentage();
if (confirm("Do you want to create teams?")) {
    const numberOfTeams = Number(prompt("Please enter teams number:"));
    creatTeams(numberOfTeams)
}