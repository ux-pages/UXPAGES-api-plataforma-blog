// Função para mostrar toasts
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.getElementById('toast-container').appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        document.getElementById('toast-container').removeChild(toast);
    }, 3000);
}

document.getElementById('createBlogForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const blogData = {
        titulo: document.getElementById('titulo').value,
        categoria_id: document.getElementById('categoria_id').value,
        subtitulo: document.getElementById('subtitulo').value,
        textone: document.getElementById('textone').value,
        subtextone: document.getElementById('subtextone').value,
        texttwo: document.getElementById('texttwo').value,
        subtextwo: document.getElementById('subtextwo').value,
        textthree: document.getElementById('textthree').value,
        subtextthree: document.getElementById('subtextthree').value,
        textfour: document.getElementById('textfour').value,
        subtextfour: document.getElementById('subtextfour').value,
        textfive: document.getElementById('textfive').value,
        subtextfive: document.getElementById('subtextfive').value,
        textsix: document.getElementById('textsix').value,
        subtextsix: document.getElementById('subtextsix').value,
        textseven: document.getElementById('textseven').value,
        subtextseven: document.getElementById('subtextseven').value,
        texteight: document.getElementById('texteight').value,
        subtexteight: document.getElementById('subtexteight').value,
        textnine: document.getElementById('textnine').value,
        subtextnine: document.getElementById('subtextnine').value,
        textten: document.getElementById('textten').value,
        subtextten: document.getElementById('subtextten').value,
        photo: document.getElementById('photo').value,
    };

    try {
        const response = await fetch('http://localhost:3000/blogs/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });

        if (response.ok) {
            const result = await response.json();
            showToast('Blog criado com sucesso!');
            document.getElementById('createBlogForm').reset();
        } else {
            const error = await response.json();
            showToast(`Erro ao criar blog: ${error.message}`, 'error');
        }
    } catch (error) {
        console.error('Erro ao criar blog:', error);
        showToast('Erro ao criar blog. Veja o console para mais detalhes.', 'error');
    }
});
