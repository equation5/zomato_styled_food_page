// Minimal client-side auth state handling for nav
(function(){
    function setNav(){
        const token = localStorage.getItem('auth_token');
        const userStr = localStorage.getItem('auth_user');
        const isGuest = localStorage.getItem('guest_mode') === 'true';
        const login = document.getElementById('navLogin');
        const logout = document.getElementById('navLogout');
        const navUser = document.getElementById('navUser');
        if(!login || !logout || !navUser) return;
        if((token && userStr) || isGuest){
            const user = userStr ? JSON.parse(userStr) : { name: 'Guest' };
            login.style.display = 'none';
            logout.style.display = 'inline-block';
            navUser.textContent = 'Hello, ' + (user.name || user.email);
        } else {
            login.style.display = 'inline-block';
            logout.style.display = 'none';
            navUser.textContent = '';
        }
        logout.onclick = function(){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            localStorage.removeItem('guest_mode');
            window.location.replace('./signin.html');
        };
    }
    document.addEventListener('DOMContentLoaded', setNav);
})();




