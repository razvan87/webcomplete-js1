export function getUserInfo() {
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