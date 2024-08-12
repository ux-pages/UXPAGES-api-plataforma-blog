// Função para exibir mensagens toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        document.body.removeChild(toast);
    }, 3000);
}

// Buscar conteúdo do blog por ID
document.getElementById('fetchBlogContentButton').addEventListener('click', async () => {
    const blogId = document.getElementById('blogId').value;
    
    if (!blogId) {
        showToast('Por favor, insira um ID de blog válido', 'error');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/blogs/${blogId}`); // Ajuste a URL conforme necessário
        
        if (!response.ok) {
            throw new Error('Falha ao buscar o conteúdo do blog');
        }
        
        const blog = await response.json();
        
        const blogContentDiv = document.getElementById('blogContent');
        
        blogContentDiv.innerHTML = `
            <h2>${blog.titulo}</h2>
            <h3>${blog.subtitulo}</h3>
            <p><strong>Categoria ID:</strong> ${blog.categoria_id}</p>
            <p><strong>Data de Criação:</strong> ${new Date(blog.createdAt).toLocaleDateString()}</p>
            <p><strong>Última Atualização:</strong> ${new Date(blog.updatedAt).toLocaleDateString()}</p>
            <h4>Conteúdo:</h4>
            <p><strong>Texto 1:</strong> ${blog.textone}</p>
            <p><strong>Subtexto 1:</strong> ${blog.subtextone}</p>
            <p><strong>Texto 2:</strong> ${blog.texttwo}</p>
            <p><strong>Subtexto 2:</strong> ${blog.subtextwo}</p>
            <p><strong>Texto 3:</strong> ${blog.textthree}</p>
            <p><strong>Subtexto 3:</strong> ${blog.subtextthree}</p>
            <p><strong>Texto 4:</strong> ${blog.textfour}</p>
            <p><strong>Subtexto 4:</strong> ${blog.subtextfour}</p>
            <p><strong>Texto 5:</strong> ${blog.textfive}</p>
            <p><strong>Subtexto 5:</strong> ${blog.subtextfive}</p>
            <p><strong>Texto 6:</strong> ${blog.textsix}</p>
            <p><strong>Subtexto 6:</strong> ${blog.subtextsix}</p>
            <p><strong>Texto 7:</strong> ${blog.textseven}</p>
            <p><strong>Subtexto 7:</strong> ${blog.subtextseven}</p>
            <p><strong>Texto 8:</strong> ${blog.texteight}</p>
            <p><strong>Subtexto 8:</strong> ${blog.subtexteight}</p>
            <p><strong>Texto 9:</strong> ${blog.textnine}</p>
            <p><strong>Subtexto 9:</strong> ${blog.subtextnine}</p>
            <p><strong>Texto 10:</strong> ${blog.textten}</p>
            <p><strong>Subtexto 10:</strong> ${blog.subtextten}</p>
            ${blog.photo ? `<img src="${blog.photo}" alt="Imagem do Blog">` : ''}
        `;
        
        showToast('Conteúdo do blog carregado com sucesso!');
    } catch (error) {
        console.error('Erro ao buscar conteúdo do blog:', error);
        showToast(`Erro ao buscar conteúdo do blog: ${error.message}`, 'error');
    }
});


// Função para exibir mensagens toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        document.body.removeChild(toast);
    }, 3000);
}

// Buscar todos os blogs
document.getElementById('fetchAllBlogsButton').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/blogs');
        if (!response.ok) {
            throw new Error('Falha ao buscar todos os blogs');
        }
        const result = await response.json();
        
        console.log('Resultado da API:', result); // Adicione esta linha para verificar a resposta

        const allBlogsDiv = document.getElementById('allBlogsContent');
        if (!Array.isArray(result)) {
            showToast('Erro ao processar os blogs. Resposta inesperada da API.', 'error');
            return;
        }

        if (result.length === 0) {
            allBlogsDiv.innerHTML = '<h2>Nenhum blog criado</h2>';
            showToast('Nenhum blog encontrado.', 'info');
        } else {
            allBlogsDiv.innerHTML = `
                <h2>Todos os Blogs</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Categoria</th>
                            <th>Subtítulo</th>
                            <th>Data de Criação</th>
                            <th>Última Atualização</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${result.map(blog => `
                            <tr>
                                <td>${blog.id}</td>
                                <td>${blog.titulo}</td>
                                <td>${blog.categoria_id}</td>
                                <td>${blog.subtitulo}</td>
                                <td>${new Date(blog.createdAt).toLocaleDateString()}</td>
                                <td>${new Date(blog.updatedAt).toLocaleDateString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            showToast('Blogs carregados com sucesso!');
        }
    } catch (error) {
        console.error('Erro ao buscar todos os blogs:', error);
        showToast(`Erro ao buscar blogs: ${error.message}`, 'error');
    }
});
