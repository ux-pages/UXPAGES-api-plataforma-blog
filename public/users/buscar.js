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

    const headerRow = `
        <div class="line">
            <p class="wid-5">Foto</p>
            <p class="wid-5">ID</p>
            <p class="wid-10">Usuários</p>
            <p class="wid">E-mail</p>
            <p class="wid">Ações</p>
        </div>
    `;
    resultsDiv.innerHTML += headerRow;

    users.forEach(user => {
        const userRow = `
            <div class="user-information">
                <div class="id-information-photo wid-5">
                    <img src="pictures/active-user.png" alt="Foto do Usuário">
                </div>
                <div class="id-information wid-5">
                    <p class="p-user">${user.id}</p>
                </div>
                <div class="name-information wid-10">
                    <p class="p-user">${user.username}</p>
                </div>
                <div class="email-information wid">
                    <p class="p-user">${user.email}</p>
                </div>
                <div class="action-user-information wid">
                    <button class="btn-action"><img src="pictures/editar (1).png" alt="Editar"></button>
                    <button class="btn-action"><img src="pictures/excluir.png" alt="Excluir"></button>
                </div>
            </div>
        `;
        resultsDiv.innerHTML += userRow;
    });
}


function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
