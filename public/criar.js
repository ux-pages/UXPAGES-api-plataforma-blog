// criar.js

document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showToast('As senhas não correspondem.', 'error');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            throw new Error('Falha ao criar usuário');
        }

        const data = await response.json();
        showToast('Usuário criado com sucesso!');
        document.getElementById('createUserForm').reset();
    } catch (error) {
        showToast(`Erro: ${error.message}`, 'error');
    }
});

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    // Adiciona o toast ao corpo do documento
    document.body.appendChild(toast);
    
    // Exibe o toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); // Levemente atrasado para garantir que o toast apareça

    // Remove o toast após 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        // Remove o toast do DOM
        document.body.removeChild(toast);
    }, 3000);
}
