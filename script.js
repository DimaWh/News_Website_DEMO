// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.querySelector('#signin-form form');
    const registerForm = document.querySelector('#register-form form');
    const paymentForm = document.querySelector('.payment-form');
    
    // Highlight active navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Highlight active breaking news in ticker
    const tickerLinks = document.querySelectorAll('.ticker-items a');
    tickerLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Successfully signed in! Welcome back to MoldovaNews.');
            window.location.href = 'index.html';
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully! Welcome to MoldovaNews.');
            window.location.href = 'index.html';
        });
    }
    
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your subscription! Your membership is now active.');
            window.location.href = 'index.html';
        });
    }
});

function showSubscriptionForm(planType) {
    const planName = document.getElementById('plan-name');
    const planPrice = document.getElementById('plan-price');
    
    switch(planType) {
        case 'basic':
            planName.textContent = 'Basic Membership';
            planPrice.innerHTML = '$5.99<span>/month</span>';
            break;
        case 'premium':
            planName.textContent = 'Premium Membership';
            planPrice.innerHTML = '$10.99<span>/month</span>';
            break;
        case 'executive':
            planName.textContent = 'Executive Membership';
            planPrice.innerHTML = '$20.99<span>/month</span>';
            break;
    }
}

function switchAuthTab(tabName) {
    // Update tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide forms
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById(tabName + '-form').style.display = 'block';
}