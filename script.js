function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Random size between 10px and 20px
    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random start position
    const startX = Math.random() * window.innerWidth;
    // Random end position within ±100px of start
    const endX = startX + (Math.random() * 200 - 100);
    
    petal.style.setProperty('--start-x', `${startX}px`);
    petal.style.setProperty('--end-x', `${endX}px`);
    
    // Random animation duration between 4 and 8 seconds
    const duration = Math.random() * 4 + 4;
    petal.style.animation = `falling ${duration}s linear forwards`;
    
    return petal;
}

function startPetalAnimation() {
    const container = document.getElementById('petals-container');
    container.classList.remove('hidden');
    
    // Create new petals periodically
    setInterval(() => {
        const petal = createPetal();
        container.appendChild(petal);
        
        // Remove petal after animation completes
        setTimeout(() => {
            petal.remove();
        }, parseFloat(petal.style.animation) * 1000);
    }, 200); // Create new petal every 200ms
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const validPasswords = ['12112024', 'December 11, 2024'];
    
    if (validPasswords.includes(input)) {
        document.getElementById('password-section').classList.add('hidden');
        document.getElementById('letter-section').classList.remove('hidden');
        startPetalAnimation(); // Start the petal animation when password is correct
    } else {
        // Shake animation for wrong password
        const passwordInput = document.getElementById('password-input');
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Wrap initialization in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Add keypress event listener for Enter key
    document.getElementById('password-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }`;
    document.head.appendChild(style);
}); 
