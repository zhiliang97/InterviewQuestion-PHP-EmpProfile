function fetchEmployees() {
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#employeeTable tbody');
            tableBody.innerHTML = '';
            data.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.name}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.maritalStatus}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.email}</td>
                    <td>${employee.address}</td>
                    <td>${employee.dob}</td>
                    <td>${employee.nationality}</td>
                    <td>${employee.hireDate}</td>
                    <td>${employee.department}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching employee data:', error));
}

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const employee = Object.fromEntries(formData.entries());

    fetch('api/add_employee.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            fetchEmployees();
            alert('Employee added successfully!');
        }
    })
    .catch(error => console.error('Error adding employee:', error));
});

window.onload = fetchEmployees;
