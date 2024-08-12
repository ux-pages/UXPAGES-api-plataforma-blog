document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Esconder todas as seções
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Remover a classe 'active' de todos os links
        document.querySelectorAll('.nav-link').forEach(nav => {
            nav.classList.remove('active');
        });

        // Mostrar a seção correspondente
        const targetSection = document.getElementById(this.dataset.target);
        targetSection.style.display = 'block';

        // Adicionar a classe 'active' ao link clicado
        this.classList.add('active');
    });
});

// Seleciona o botão e a div do formulário
const createNewUserButton = document.querySelector('.create-new-user');
const userCreateNewDiv = document.querySelector('.user-create-new');

// Garante que o formulário esteja oculto inicialmente
userCreateNewDiv.style.display = 'none';

// Adiciona um event listener ao botão
createNewUserButton.addEventListener('click', () => {
    // Exibe o formulário de criação de usuário
    userCreateNewDiv.style.display = 'block';
});


function updatePreview() {
    document.querySelector('.preview-title').textContent = document.getElementById('titulo').value || 'Título';
    document.querySelector('.preview-subtitle').textContent = document.getElementById('subtitulo').value || 'Subtítulo';
    document.getElementById('previewTextOne').textContent = document.getElementById('textone').value || 'Texto 1';
    document.getElementById('previewSubTextOne').textContent = document.getElementById('subtextone').value || 'Subtexto 1';
    document.getElementById('previewTextTwo').textContent = document.getElementById('texttwo').value || 'Texto 2';
    document.getElementById('previewSubTextTwo').textContent = document.getElementById('subtextwo').value || 'Subtexto 2';
    document.getElementById('previewTextThree').textContent = document.getElementById('textthree').value || 'Texto 3';
    document.getElementById('previewSubTextThree').textContent = document.getElementById('subtextthree').value || 'Subtexto 3';
    document.getElementById('previewTextFour').textContent = document.getElementById('textfour').value || 'Texto 4';
    document.getElementById('previewSubTextFour').textContent = document.getElementById('subtextfour').value || 'Subtexto 4';
    document.getElementById('previewTextFive').textContent = document.getElementById('textfive').value || 'Texto 5';
    document.getElementById('previewSubTextFive').textContent = document.getElementById('subtextfive').value || 'Subtexto 5';
    document.getElementById('previewTextSix').textContent = document.getElementById('textsix').value || 'Texto 6';
    document.getElementById('previewSubTextSix').textContent = document.getElementById('subtextsix').value || 'Subtexto 6';
    document.getElementById('previewTextSeven').textContent = document.getElementById('textseven').value || 'Texto 7';
    document.getElementById('previewSubTextSeven').textContent = document.getElementById('subtextseven').value || 'Subtexto 7';
    document.getElementById('previewTextEight').textContent = document.getElementById('texteight').value || 'Texto 8';
    document.getElementById('previewSubTextEight').textContent = document.getElementById('subtexteight').value || 'Subtexto 8';
    document.getElementById('previewTextNine').textContent = document.getElementById('textnine').value || 'Texto 9';
    document.getElementById('previewSubTextNine').textContent = document.getElementById('subtextnine').value || 'Subtexto 9';
    document.getElementById('previewTextTen').textContent = document.getElementById('textten').value || 'Texto 10';
    document.getElementById('previewSubTextTen').textContent = document.getElementById('subtextten').value || 'Subtexto 10';
}

document.getElementById('createBlogForm').addEventListener('input', updatePreview);
