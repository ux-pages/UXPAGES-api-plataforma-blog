// Função para mostrar toasts
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

// Criar nova categoria
document.getElementById('createCategoryForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const categoryName = document.getElementById('categoryName').value;

    try {
        const response = await fetch('http://localhost:3000/categories/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: categoryName })
        });

        if (!response.ok) {
            throw new Error('Falha ao criar categoria');
        }

        const data = await response.json();
        showToast('Categoria criada com sucesso!');
        document.getElementById('createCategoryForm').reset();
    } catch (error) {
        showToast(`Erro: ${error.message}`, 'error');
    }
});

// Buscar todas as categorias
// Buscar todas as categorias
// Buscar todas as categorias
document.getElementById('fetchAllCategoriesButton').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/categories'); // Ajuste a URL para o servidor da API
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        const result = await response.json();

        // Exibindo todas as categorias ou mensagem se não houver categorias
        const resultsDiv = document.getElementById('resultss');
        if (result.length === 0) {
            resultsDiv.innerHTML = '<h2>Nenhuma categoria criada</h2>';
        } else {
            resultsDiv.innerHTML = `
                <h2>Todas as Categorias</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${result.map(category => `
                            <tr>
                                <td>${category.id}</td>
                                <td>${category.nome}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        showToast('Erro ao buscar categorias. Veja o console para mais detalhes.', 'error');
    }
});




// Atualizar categoria
document.getElementById('updateCategoryForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const categoryId = document.getElementById('updateCategoryId').value;
    const categoryName = document.getElementById('updateCategoryName').value;

    try {
        const response = await fetch(`http://localhost:3000/categories/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: categoryName }) // Enviando 'name' no body
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Falha ao atualizar categoria: ${errorText}`);
        }

        const data = await response.json();
        showToast('Categoria atualizada com sucesso!');
        document.getElementById('updateCategoryForm').reset();
    } catch (error) {
        showToast(`Erro: ${error.message}`, 'error');
    }
});

