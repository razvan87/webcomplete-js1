const users = [];

do {
    let confirmation = confirm("Entering user information.");
    if (!confirmation) {
        break;
    }
    const userInfo = getUserInfo();
    users.push(userInfo);
} while (confirm("Do you want to enter more users? (OK for Yes, Cancel for No)"))

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
    const attendance = confirm("Are you attending? (OK for Yes, Cancel for No)");
    
    return { 
        name: name.trim(), 
        age: age, 
        attendance: attendance 
    };
}

console.table(users);
