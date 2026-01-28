// Espera o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const registerLink = document.getElementById('registerLink');
    
    // Alternar visibilidade da senha
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alternar ícone
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Validação básica do formulário (simulação)
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores dos campos
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validação simples
            if (!email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Simulação de login (apenas para demonstração)
            showMessage('Login realizado com sucesso! Redirecionando...', 'success');
            
            // Aqui normalmente faria uma requisição para o backend
            // Por enquanto, apenas simulamos o login
            setTimeout(() => {
                // Limpar formulário após "login"
                loginForm.reset();
                
                // Em um sistema real, redirecionaria para a página principal
                console.log('Login simulado com:', { email, password });
            }, 1500);
        });
    }
    
    // Link para registro (simulação)
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('Página de registro será criada em breve!', 'info');
        });
    }
    
    // Link "Esqueceu a senha" (simulação)
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('Funcionalidade de recuperação de senha será implementada em breve!', 'info');
        });
    }
    
    // Função para validar formato de e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Função para exibir mensagens temporárias
    function showMessage(message, type) {
        // Remover mensagem anterior se existir
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Criar nova mensagem
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        // Estilos da mensagem
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translateX(-50%)';
        messageDiv.style.padding = '15px 25px';
        messageDiv.style.borderRadius = '50px';
        messageDiv.style.zIndex = '1000';
        messageDiv.style.fontWeight = '500';
        messageDiv.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        messageDiv.style.animation = 'fadeIn 0.3s ease';
        
        // Cores baseadas no tipo
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#e8f5e9';
            messageDiv.style.color = '#2e7d32';
            messageDiv.style.border = '1px solid #c8e6c9';
        } else {
            messageDiv.style.backgroundColor = '#e3f2fd';
            messageDiv.style.color = '#1565c0';
            messageDiv.style.border = '1px solid #bbdefb';
        }
        
        // Adicionar ao documento
        document.body.appendChild(messageDiv);
        
        // Remover após 3 segundos
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 3000);
        
        // Adicionar animações CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -20px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translate(-50%, 0); }
                to { opacity: 0; transform: translate(-50%, -20px); }
            }
        `;
        document.head.appendChild(style);
    }
});