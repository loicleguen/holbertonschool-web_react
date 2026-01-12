interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: student[] = [student1, student2];

// Create table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
