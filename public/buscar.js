// buscar.js

document.getElementById('searchUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('searchQuery').value;
    const resultsDiv = document.getElementById('results');

    if (query.trim() === '') {
        showToast('Por favor, insira um email.', 'error');
        return;
    }

    try {
        const url = `http://localhost:3000/users/email?email=${encodeURIComponent(query)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        displayResults([data]);
    } catch (error) {
        showToast(`Erro: ${error.message}`, 'error');
    }
});

document.getElementById('fetchAllButton').addEventListener('click', async () => {
    const resultsDiv = document.getElementById('results');
    try {
        const url = `http://localhost:3000/users`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        showToast(`Erro: ${error.message}`, 'error');
    }
});

function displayResults(users) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (users.length === 0) {
        resultsDiv.innerHTML = '<p>Nenhum usuário encontrado.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome de Usuário</th>
                <th>Email</th>
                <th>Criado em</th>
                <th>Atualizado em</th>
            </tr>
        </thead>
        <tbody>
            ${users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.createdAt}</td>
                    <td>${user.updatedAt}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    resultsDiv.appendChild(table);
}
