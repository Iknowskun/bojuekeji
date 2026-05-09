// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// 数字动画
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/([\d,]+)/);
        if (match) {
            const target = parseInt(match[1].replace(/,/g, ''));
            const suffix = text.replace(match[1], '');
            let current = 0;
            const increment = target / 50;
            const duration = 2000;
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current).toLocaleString() + suffix;
            }, stepTime);
        }
    });
}

// 使用 Intersection Observer 触发数字动画
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}

// 卡片悬停效果增强
document.querySelectorAll('.feature-card, .category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 按钮点击效果
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// 添加涟漪动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 搜索框交互（如果添加搜索功能）
function createSearchBox() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" placeholder="搜索材料..." class="search-input">
        <button class="search-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        </button>
    `;
    return searchContainer;
}

// 移动端菜单切换
function createMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    `;

    menuButton.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });

    return menuButton;
}

// 在小屏幕上添加移动端菜单按钮
if (window.innerWidth <= 768) {
    const navbar = document.querySelector('.navbar .container');
    const mobileMenuButton = createMobileMenu();
    navbar.insertBefore(mobileMenuButton, navbar.querySelector('.nav-menu'));

    // 添加移动端菜单样式
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        .mobile-menu-button {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }

        .mobile-menu-button svg {
            width: 24px;
            height: 24px;
            stroke: var(--text-primary);
        }

        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: var(--shadow-lg);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            z-index: 999;
        }

        .nav-menu.active {
            transform: translateY(0);
        }

        .nav-menu li {
            margin: 10px 0;
        }

        @media (min-width: 769px) {
            .mobile-menu-button {
                display: none;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
}

console.log('材料基础工程数据库 - 首页已加载');

// ==================== 登录注册（全站 localStorage，内置演示账号） ====================

const BUILTIN_USERNAME = 'bojuekeji';
const BUILTIN_PASSWORD = 'bojuekeji';
const BUILTIN_USER = {
    id: 'builtin-bojuekeji',
    username: BUILTIN_USERNAME,
    email: 'bojuekeji@system.local',
    password: BUILTIN_PASSWORD,
    phone: '',
    createdAt: new Date().toISOString(),
    isBuiltin: true
};

function getProtectedPages() {
    return [
        'categories.html', 'statistics.html', 'calculation-engine.html',
        'model-data-package.html', 'material-design-tool.html', 'model-framework.html',
        'adaptive-design.html', 'genetic-algorithm-framework.html',
        'dimensional-symbolic-learning.html', 'ttt-curve-prediction.html'
    ];
}

function ensureDefaultUser() {
    let users = [];
    try {
        users = JSON.parse(localStorage.getItem('users') || '[]');
        if (!Array.isArray(users)) users = [];
    } catch (e) {
        users = [];
    }
    const idx = users.findIndex(u => u && u.username === BUILTIN_USERNAME);
    if (idx === -1) {
        users.push({ ...BUILTIN_USER });
    } else {
        users[idx] = {
            ...users[idx],
            username: BUILTIN_USERNAME,
            password: BUILTIN_PASSWORD,
            email: BUILTIN_USER.email,
            isBuiltin: true
        };
    }
    localStorage.setItem('users', JSON.stringify(users));
}

function ensureToast() {
    if (!document.getElementById('toast')) {
        const el = document.createElement('div');
        el.id = 'toast';
        el.className = 'toast';
        document.body.appendChild(el);
    }
}

function getInjectedAuthModalsHtml() {
    return `
    <div class="modal-overlay" id="loginModal">
        <div class="modal-container">
            <div class="modal-header">
                <h2>登录</h2>
                <button type="button" class="modal-close" onclick="closeModal('loginModal')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="loginId">用户名或邮箱</label>
                        <input type="text" id="loginId" name="loginId" required autocomplete="username" placeholder="用户名或邮箱">
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">密码</label>
                        <div class="password-input">
                            <input type="password" id="loginPassword" name="password" required autocomplete="current-password" placeholder="请输入密码">
                            <button type="button" class="toggle-password" onclick="togglePassword('loginPassword')">
                                <svg class="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                </svg>
                                <svg class="eye-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="form-options">
                        <label class="checkbox-label"><input type="checkbox" name="remember"><span>记住我</span></label>
                        <a href="#" class="forgot-password" onclick="event.preventDefault()">忘记密码？</a>
                    </div>
                    <button type="submit" class="btn-submit">登录</button>
                </form>
            </div>
            <div class="modal-footer">
                <p>还没有账号？<a href="#" onclick="event.preventDefault(); switchModal('loginModal', 'registerModal')">立即注册</a></p>
            </div>
        </div>
    </div>
    <div class="modal-overlay" id="registerModal">
        <div class="modal-container">
            <div class="modal-header">
                <h2>注册</h2>
                <button type="button" class="modal-close" onclick="closeModal('registerModal')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <form id="registerForm" onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label for="registerUsername">用户名</label>
                        <input type="text" id="registerUsername" name="username" required placeholder="请输入用户名" minlength="3" autocomplete="username">
                    </div>
                    <div class="form-group">
                        <label for="registerEmail">邮箱</label>
                        <input type="email" id="registerEmail" name="email" required placeholder="请输入邮箱" autocomplete="email">
                    </div>
                    <div class="form-group">
                        <label for="registerPassword">密码</label>
                        <div class="password-input">
                            <input type="password" id="registerPassword" name="password" required placeholder="请输入密码（至少6位）" minlength="6" autocomplete="new-password">
                            <button type="button" class="toggle-password" onclick="togglePassword('registerPassword')">
                                <svg class="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                </svg>
                                <svg class="eye-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                        <div class="password-strength">
                            <div class="strength-bar"><div class="strength-fill" id="passwordStrength"></div></div>
                            <span class="strength-text" id="strengthText">密码强度</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="registerConfirmPassword">确认密码</label>
                        <input type="password" id="registerConfirmPassword" name="confirmPassword" required placeholder="请再次输入密码" autocomplete="new-password">
                    </div>
                    <div class="form-group">
                        <label for="registerPhone">手机号（选填）</label>
                        <input type="tel" id="registerPhone" name="phone" placeholder="请输入手机号" autocomplete="tel">
                    </div>
                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" name="agree" required>
                            <span>我已阅读并同意 <a href="#" class="link" onclick="event.preventDefault()">用户协议</a> 和 <a href="#" class="link" onclick="event.preventDefault()">隐私政策</a></span>
                        </label>
                    </div>
                    <button type="submit" class="btn-submit">注册</button>
                </form>
            </div>
            <div class="modal-footer">
                <p>已有账号？<a href="#" onclick="event.preventDefault(); switchModal('registerModal', 'loginModal')">立即登录</a></p>
            </div>
        </div>
    </div>`;
}

function ensureAuthModals() {
    if (document.getElementById('loginModal')) return;
    document.body.insertAdjacentHTML('beforeend', getInjectedAuthModalsHtml());
    bindAuthModalOverlays();
}

function bindAuthModalOverlays() {
    document.querySelectorAll('#loginModal.modal-overlay, #registerModal.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
}

// 全局用户状态变量
let currentUser = null;

// 打开模态框
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// 关闭模态框
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // 清空表单
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

// 切换模态框
function switchModal(closeId, openId) {
    closeModal(closeId);
    setTimeout(() => {
        openModal(openId);
    }, 300);
}

// 登录/注册弹窗外点击关闭（页面已有静态弹窗时绑定）
bindAuthModalOverlays();

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// 切换密码可见性
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const eyeOpen = button.querySelector('.eye-open');
    const eyeClosed = button.querySelector('.eye-closed');

    if (input.type === 'password') {
        input.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        input.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

// 密码强度检测
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
}

function setupRegisterPasswordStrength() {
    const input = document.getElementById('registerPassword');
    if (!input || input.dataset.strengthBound === '1') return;
    input.dataset.strengthBound = '1';
    input.addEventListener('input', function() {
        const password = this.value;
        const strengthFill = document.getElementById('passwordStrength');
        const strengthText = document.getElementById('strengthText');
        if (!strengthFill || !strengthText) return;

        if (password.length === 0) {
            strengthFill.className = 'strength-fill';
            strengthText.textContent = '密码强度';
            return;
        }

        const strength = checkPasswordStrength(password);
        strengthFill.className = `strength-fill ${strength}`;

        const strengthLabels = { weak: '弱', medium: '中', strong: '强' };
        strengthText.textContent = `密码强度: ${strengthLabels[strength]}`;
    });
}

// 显示Toast提示
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getLoginIdentifier(form) {
    const v = form.loginId?.value ?? form.email?.value ?? form.username?.value ?? '';
    return String(v).trim();
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();

    const form = event.target;
    const loginId = getLoginIdentifier(form);
    const password = form.password.value;

    ensureDefaultUser();

    let users = [];
    try {
        users = JSON.parse(localStorage.getItem('users') || '[]');
        if (!Array.isArray(users)) users = [];
    } catch (e) {
        users = [];
    }

    const user = users.find(u =>
        u && u.password === password &&
        (u.username === loginId || u.email === loginId)
    );

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showToast('登录成功！', 'success');
        closeModal('loginModal');
        updateNavAfterLogin();
    } else {
        showToast('用户名/邮箱或密码错误', 'error');
    }
    return false;
}

// 处理注册
function handleRegister(event) {
    event.preventDefault();

    const form = event.target;
    const username = (form.username.value || '').trim();
    const email = (form.email.value || '').trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const phone = (form.phone?.value || '').trim();

    ensureDefaultUser();

    let users = [];
    try {
        users = JSON.parse(localStorage.getItem('users') || '[]');
        if (!Array.isArray(users)) users = [];
    } catch (e) {
        users = [];
    }

    if (username.toLowerCase() === BUILTIN_USERNAME) {
        showToast('该用户名为系统预留账号，请更换用户名', 'error');
        return false;
    }
    if (email.toLowerCase() === BUILTIN_USER.email.toLowerCase()) {
        showToast('该邮箱为系统预留，请更换邮箱', 'error');
        return false;
    }

    // 验证密码
    if (password !== confirmPassword) {
        showToast('两次输入的密码不一致', 'error');
        return false;
    }

    // 检查邮箱是否已存在
    if (users.find(u => u.email === email)) {
        showToast('该邮箱已被注册', 'error');
        return false;
    }

    // 检查用户名是否已存在
    if (users.find(u => u.username === username)) {
        showToast('该用户名已被使用', 'error');
        return false;
    }

    // 创建新用户
    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        phone,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    showToast('注册成功！请登录', 'success');
    closeModal('registerModal');
    openModal('loginModal');
    return false;
}

// 登录后更新导航栏
function updateNavAfterLogin() {
    const navActions = document.querySelector('.nav-actions');
    
    if (currentUser) {
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

        // 添加用户菜单样式
        if (!document.getElementById('userMenuStyles')) {
            const userMenuStyle = document.createElement('style');
            userMenuStyle.id = 'userMenuStyles';
            userMenuStyle.textContent = `
                .user-menu {
                    position: relative;
                }

                .btn-user {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .btn-user:hover {
                    background: var(--bg-tertiary);
                }

                .user-avatar {
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 0.875rem;
                }

                .user-name {
                    font-weight: 500;
                    color: var(--text-primary);
                }

                .dropdown-arrow {
                    width: 16px;
                    height: 16px;
                    color: var(--text-secondary);
                    transition: transform 0.3s;
                }

                .btn-user.active .dropdown-arrow {
                    transform: rotate(180deg);
                }

                .user-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    min-width: 200px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: all 0.3s;
                    z-index: 100;
                    border: 1px solid var(--border-color);
                }

                .user-dropdown.show {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    color: var(--text-primary);
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .dropdown-item:hover {
                    background: var(--bg-secondary);
                }

                .dropdown-item svg {
                    width: 18px;
                    height: 18px;
                    color: var(--text-secondary);
                }

                .dropdown-item.logout {
                    color: #ef4444;
                }

                .dropdown-item.logout svg {
                    color: #ef4444;
                }

                .dropdown-divider {
                    height: 1px;
                    background: var(--border-color);
                    margin: 4px 0;
                }
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

// 处理退出登录
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('已退出登录', 'info');
    
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    navActions.innerHTML = `
        <button class="btn-login">登录</button>
        <button class="btn-register">注册</button>
    `;
    
    // 重新绑定事件
    bindAuthButtons();
}

// 绑定登录注册按钮事件
function bindAuthButtons() {
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    const ctaBtn = document.querySelector('.btn-cta');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => openModal('loginModal'));
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', () => openModal('registerModal'));
    }
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => openModal('registerModal'));
    }
}

// 检查登录状态
function checkLoginStatus() {
    if (!currentUser) {
        showToast('请先登录', 'warning');
        openModal('loginModal');
        return false;
    }
    return true;
}

// 处理需要登录的链接点击
function handleProtectedLink(event, url) {
    event.preventDefault();
    if (checkLoginStatus()) {
        window.location.href = url;
    }
}

// 处理开始查询按钮点击
function handleStartQuery() {
    if (checkLoginStatus()) {
        window.location.href = 'statistics.html';
    }
}

// 为需要登录的链接添加权限验证
function setupProtectedLinks() {
    // 导航栏中的受保护链接
    const protectedNavLinks = [
        { selector: 'a[href="categories.html"]', url: 'categories.html' },
        { selector: 'a[href="statistics.html"]', url: 'statistics.html' },
        { selector: 'a[href="calculation-engine.html"]', url: 'calculation-engine.html' },
        { selector: 'a[href="model-data-package.html"]', url: 'model-data-package.html' },
        { selector: 'a[href="material-design-tool.html"]', url: 'material-design-tool.html' },
        { selector: 'a[href="model-framework.html"]', url: 'model-framework.html' }
    ];

    protectedNavLinks.forEach(link => {
        document.querySelectorAll(link.selector).forEach(el => {
            // 排除首页链接
            if (!el.href.includes('index.html')) {
                el.addEventListener('click', (e) => handleProtectedLink(e, link.url));
            }
        });
    });

    // 首页功能卡片
    const featureCards = document.querySelectorAll('.feature-card, .category-card');
    featureCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const href = card.getAttribute('href');
            if (href && !href.includes('index.html')) {
                handleProtectedLink(e, href);
            }
        });
    });

    // 开始查询按钮
    const startQueryBtn = document.querySelector('.btn-primary');
    if (startQueryBtn && startQueryBtn.textContent.includes('开始查询')) {
        startQueryBtn.addEventListener('click', (e) => {
            if (!checkLoginStatus()) {
                e.preventDefault();
            }
        });
    }
}

// 页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', () => {
    ensureDefaultUser();
    ensureToast();
    ensureAuthModals();
    setupRegisterPasswordStrength();

    currentUser = null;
    try {
        currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    } catch (e) {
        currentUser = null;
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (getProtectedPages().includes(currentPage) && !currentUser) {
        showToast('请先登录', 'warning');
        openModal('loginModal');
    }

    if (currentUser) {
        updateNavAfterLogin();
    }
    bindAuthButtons();
    setupProtectedLinks();
});
