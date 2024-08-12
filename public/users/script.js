document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
          throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Armazenar o token no localStorage
      localStorage.setItem('token', data.token);

      // Mostrar toast de sucesso
      showToast('Login bem-sucedido! Redirecionando...', 'success');

      // Adicionar delay antes de redirecionar
      setTimeout(() => {
          window.location.href = 'dashboard.html'; // Exemplo de redirecionamento para uma página protegida
      }, 3000); // 5000 milissegundos = 5 segundos

  } catch (error) {
      console.error('Login failed:', error);
      // Mostrar toast de erro
      showToast('Falha no login. Verifique suas credenciais.', 'error');
  }
});

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  
  // Ajustar a cor do fundo com base no tipo
  if (type === 'error') {
      toast.classList.add('error');
  } else {
      toast.classList.remove('error');
  }

  // Mostrar o toast
  toast.classList.add('show');
  
  // Ocultar o toast após 3 segundos
  setTimeout(() => {
      toast.classList.remove('show');
  }, 3000);
}
