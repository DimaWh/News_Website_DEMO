function showPage(pageName) {
    const pages = [
        'home-page', 
        'live-page', 
        'video-page', 
        'donate-page', 
        'subscriptions-page',
        'profile-page',
        'parliament-page',
        'economic-page',
        'cultural-page',
        'international-page'
    ];
    
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });
    
    document.getElementById(pageName + '-page').style.display = 'block';
    
    window.scrollTo(0, 0);
}

function showBreakingNews(newsType) {
    showPage(newsType);
}

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

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.querySelector('#signin-form form');
    const registerForm = document.querySelector('#register-form form');
    const paymentForm = document.querySelector('.payment-form');
    
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Successfully signed in! Welcome back to MoldovaNews.');
            showPage('home');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully! Welcome to MoldovaNews.');
            showPage('home');
        });
    }
    
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your subscription! Your membership is now active.');
            showPage('home');
        });
    }
});