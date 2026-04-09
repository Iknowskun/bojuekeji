// ==================== 认证管理 ====================

// 模拟用户数据库
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// 检查登录状态
function checkLoginStatus() {
    if (!currentUser) {
        showToast('请先登录', 'warning');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
        return false;
    }
    return true;
}

// 显示Toast提示
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 400px;
    `;

    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#2563eb'
    };
    toast.style.background = colors[type] || colors.info;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 处理退出登录
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('已退出登录', 'info');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// 更新导航栏用户信息
function updateNavAfterLogin() {
    const navActions = document.querySelector('.nav-actions');
    
    if (currentUser && navActions) {
        navActions.innerHTML = `
            <div class="user-menu">
                <button class="btn-user" onclick="toggleUserMenu()">
                    <span class="user-avatar">${currentUser.username.charAt(0).toUpperCase()}</span>
                    <span class="user-name">${currentUser.username}</span>
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </button>
                <div class="user-dropdown" id="userDropdown">
                    <a href="#" class="dropdown-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        个人中心
                    </a>
                    <a href="#" class="dropdown-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        我的收藏
                    </a>
                    <a href="#" class="dropdown-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                        设置
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item logout" onclick="handleLogout()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                        </svg>
                        退出登录
                    </a>
                </div>
            </div>
        `;

        if (!document.getElementById('userMenuStyles')) {
            const userMenuStyle = document.createElement('style');
            userMenuStyle.id = 'userMenuStyles';
            userMenuStyle.textContent = `
                .user-menu { position: relative; }
                .btn-user { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; transition: all 0.3s; }
                .btn-user:hover { background: var(--bg-tertiary); }
                .user-avatar { width: 32px; height: 32px; background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem; }
                .user-name { font-weight: 500; color: var(--text-primary); }
                .dropdown-arrow { width: 16px; height: 16px; color: var(--text-secondary); transition: transform 0.3s; }
                .btn-user.active .dropdown-arrow { transform: rotate(180deg); }
                .user-dropdown { position: absolute; top: calc(100% + 8px); right: 0; background: white; border-radius: 8px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15); min-width: 200px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s; z-index: 100; border: 1px solid var(--border-color); }
                .user-dropdown.show { opacity: 1; visibility: visible; transform: translateY(0); }
                .dropdown-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: var(--text-primary); text-decoration: none; transition: all 0.2s; }
                .dropdown-item:hover { background: var(--bg-secondary); }
                .dropdown-item svg { width: 18px; height: 18px; color: var(--text-secondary); }
                .dropdown-item.logout { color: #ef4444; }
                .dropdown-item.logout svg { color: #ef4444; }
                .dropdown-divider { height: 1px; background: var(--border-color); margin: 4px 0; }
            `;
            document.head.appendChild(userMenuStyle);
        }
    }
}

// 切换用户菜单
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    const btn = document.querySelector('.btn-user');
    
    if (dropdown) {
        dropdown.classList.toggle('show');
        btn.classList.toggle('active');
    }
}

// 点击外部关闭用户菜单
document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
        const dropdown = document.getElementById('userDropdown');
        const btn = document.querySelector('.btn-user');
        if (dropdown) {
            dropdown.classList.remove('show');
            btn.classList.remove('active');
        }
    }
});

// 页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', () => {
    const protectedPages = [
        'categories.html', 'statistics.html', 'calculation-engine.html',
        'model-data-package.html', 'material-design-tool.html', 'model-framework.html',
        'adaptive-design.html', 'genetic-algorithm-framework.html',
        'dimensional-symbolic-learning.html', 'ttt-curve-prediction.html'
    ];

    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        checkLoginStatus();
    }

    if (currentUser) {
        updateNavAfterLogin();
    }
});
