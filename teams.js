export function creatTeams(users, numberOfTeams) {
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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