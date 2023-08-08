fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => {
			let tableBody = document.querySelector('table tbody');
			data.forEach(user => {
				let row = document.createElement('tr');
				row.innerHTML = `<td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${user.address.city}</td>
                                <td>${user.phone}</td>
                                <td>${user.website}</td>
                                <td>${user.company.name}</td>`;
				tableBody.append(row);
			});
		})
		.catch(error => console.error(error));
        