// 高通量第一性原理计算引擎 JavaScript

// 全局变量
let tasks = [];
let taskIdCounter = 1001;
let selectedTaskId = null;
let uploadedFile = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initFileUpload();
    updateTaskStats();
    addLog('系统初始化完成，等待任务提交...', 'info');
});

// 初始化标签页切换
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabType = this.dataset.tab;
            
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新内容显示
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabType}-input`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// 初始化文件上传
function initFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('structureFile');

    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
        }
    });
}

// 处理文件上传
function handleFileUpload(file) {
    const validExtensions = ['.cif', '.poscar', '.vasp'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
        addLog(`错误：不支持的文件格式 ${fileExtension}`, 'error');
        return;
    }

    uploadedFile = file;
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'flex';
    document.querySelector('.file-name').textContent = file.name;
    addLog(`文件上传成功：${file.name}`, 'success');
}

// 移除文件
function removeFile() {
    uploadedFile = null;
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('fileInfo').style.display = 'none';
    document.getElementById('structureFile').value = '';
    addLog('文件已移除', 'info');
}

// 提交计算任务
function submitCalculation() {
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    let materialName, structureData;

    if (activeTab === 'text') {
        materialName = document.getElementById('materialName').value.trim();
        structureData = document.getElementById('structureData').value.trim();
    } else {
        materialName = document.getElementById('materialNameFile').value.trim();
        structureData = uploadedFile ? uploadedFile.name : '';
    }

    // 验证输入
    if (!materialName) {
        addLog('错误：请输入材料名称', 'error');
        return;
    }

    if (!structureData) {
        addLog('错误：请提供晶体结构数据', 'error');
        return;
    }

    const calculationType = document.getElementById('calculationType').value;
    const parameterTemplate = document.getElementById('parameterTemplate').value;
    const encut = document.getElementById('encut').value;
    const kpoints = document.getElementById('kpoints').value;

    // 创建任务
    const task = {
        id: taskIdCounter++,
        materialName: materialName,
        calculationType: calculationType,
        parameterTemplate: parameterTemplate,
        encut: encut,
        kpoints: kpoints,
        status: 'pending',
        progress: 0,
        progressText: '等待开始',
        result: null,
        error: null,
        createdAt: new Date()
    };

    tasks.unshift(task);
    addLog(`任务提交成功，任务 ID：${task.id}`, 'success');
    addLog(`材料：${materialName}，计算类型：${getCalculationTypeName(calculationType)}`, 'info');

    // 清空输入
    if (activeTab === 'text') {
        document.getElementById('materialName').value = '';
        document.getElementById('structureData').value = '';
    } else {
        document.getElementById('materialNameFile').value = '';
        removeFile();
    }

    // 更新UI
    updateTaskList();
    updateTaskStats();

    // 开始模拟计算
    setTimeout(() => startCalculation(task.id), 1000);
}

// 开始计算
function startCalculation(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    task.status = 'running';
    task.progress = 0;
    task.progressText = '初始化计算环境...';
    addLog(`任务 ${taskId} 开始计算`, 'info');
    updateTaskList();
    updateTaskStats();

    simulateCalculation(task);
}

// 模拟计算过程
function simulateCalculation(task) {
    const steps = [
        { progress: 10, text: '读取结构文件...' },
        { progress: 20, text: '生成K点网格...' },
        { progress: 30, text: '初始化波函数...' },
        { progress: 40, text: '自洽计算中...' },
        { progress: 50, text: '电子步迭代：10/50' },
        { progress: 60, text: '电子步迭代：25/50' },
        { progress: 70, text: '电子步迭代：40/50' },
        { progress: 80, text: '离子步优化中...' },
        { progress: 90, text: '收敛检查...' },
        { progress: 100, text: '计算完成' }
    ];

    let stepIndex = 0;

    const interval = setInterval(() => {
        if (stepIndex >= steps.length) {
            clearInterval(interval);
            completeCalculation(task);
            return;
        }

        const step = steps[stepIndex];
        task.progress = step.progress;
        task.progressText = step.text;
        updateTaskList();
        stepIndex++;
    }, 800);
}

// 完成计算
function completeCalculation(task) {
    task.status = 'completed';
    task.progress = 100;
    task.progressText = '计算完成';
    task.result = generateResult(task);
    addLog(`任务 ${task.id} 计算完成`, 'success');
    updateTaskList();
    updateTaskStats();

    // 如果当前选中了这个任务，显示结果
    if (selectedTaskId === task.id) {
        showResult(task.id);
    }
}

// 生成模拟结果
function generateResult(task) {
    const baseEnergy = -1000 + Math.random() * 500;
    const latticeA = 3 + Math.random() * 2;
    const latticeB = 3 + Math.random() * 2;
    const latticeC = 3 + Math.random() * 2;
    const bandGap = Math.random() * 3;
    const fermiLevel = -5 + Math.random() * 2;

    return {
        finalEnergy: baseEnergy.toFixed(4),
        latticeConstants: {
            a: latticeA.toFixed(4),
            b: latticeB.toFixed(4),
            c: latticeC.toFixed(4)
        },
        formationEnergy: (baseEnergy * 0.1).toFixed(4),
        bandGap: bandGap.toFixed(3),
        fermiLevel: fermiLevel.toFixed(3)
    };
}

// 获取计算类型名称
function getCalculationTypeName(type) {
    const types = {
        'relax': '结构弛豫',
        'static': '静态自洽计算',
        'band': '能带结构计算'
    };
    return types[type] || type;
}

// 更新任务列表
function updateTaskList() {
    const taskList = document.getElementById('taskList');

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>暂无计算任务</p>
            </div>
        `;
        return;
    }

    taskList.innerHTML = tasks.map(task => `
        <div class="task-item ${selectedTaskId === task.id ? 'selected' : ''}" onclick="selectTask(${task.id})">
            <div class="task-header">
                <span class="task-id">#${task.id} - ${task.materialName}</span>
                <span class="task-status ${task.status}">${getStatusText(task.status)}</span>
            </div>
            <div class="task-info">
                <div class="task-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${getCalculationTypeName(task.calculationType)}
                </div>
                <div class="task-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    </svg>
                    ${task.parameterTemplate === 'quick' ? '快速计算' : '精准计算'}
                </div>
            </div>
            ${task.status === 'running' || task.status === 'completed' ? `
                <div class="task-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${task.progress}%"></div>
                    </div>
                    <div class="progress-text">${task.progressText}</div>
                </div>
            ` : ''}
            ${task.status === 'failed' ? `
                <div class="progress-text" style="color: var(--danger-color);">${task.error || '计算失败'}</div>
            ` : ''}
            <div class="task-actions">
                ${task.status === 'running' ? `
                    <button class="task-action-btn" onclick="event.stopPropagation(); pauseTask(${task.id})">暂停</button>
                ` : ''}
                ${task.status === 'completed' ? `
                    <button class="task-action-btn primary" onclick="event.stopPropagation(); showResult(${task.id})">查看结果</button>
                ` : ''}
                <button class="task-action-btn danger" onclick="event.stopPropagation(); deleteTask(${task.id})">删除</button>
            </div>
        </div>
    `).join('');
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'pending': '待计算',
        'running': '计算中',
        'completed': '已完成',
        'failed': '失败'
    };
    return statusMap[status] || status;
}

// 选择任务
function selectTask(taskId) {
    selectedTaskId = taskId;
    updateTaskList();

    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'completed') {
        showResult(taskId);
    }
}

// 显示结果
function showResult(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task || !task.result) return;

    selectedTaskId = taskId;
    updateTaskList();

    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <div class="result-header">
            <h3>任务 #${task.id} - ${task.materialName}</h3>
            <p>计算类型：${getCalculationTypeName(task.calculationType)}</p>
        </div>
        
        <table class="result-table">
            <thead>
                <tr>
                    <th>属性</th>
                    <th>数值</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>最终能量 (eV)</td>
                    <td class="result-value">${task.result.finalEnergy}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.finalEnergy}')">复制</button></td>
                </tr>
                <tr>
                    <td>晶格常数 a (Å)</td>
                    <td class="result-value">${task.result.latticeConstants.a}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.latticeConstants.a}')">复制</button></td>
                </tr>
                <tr>
                    <td>晶格常数 b (Å)</td>
                    <td class="result-value">${task.result.latticeConstants.b}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.latticeConstants.b}')">复制</button></td>
                </tr>
                <tr>
                    <td>晶格常数 c (Å)</td>
                    <td class="result-value">${task.result.latticeConstants.c}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.latticeConstants.c}')">复制</button></td>
                </tr>
                <tr>
                    <td>形成能 (eV)</td>
                    <td class="result-value">${task.result.formationEnergy}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.formationEnergy}')">复制</button></td>
                </tr>
                <tr>
                    <td>带隙值 (eV)</td>
                    <td class="result-value">${task.result.bandGap}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.bandGap}')">复制</button></td>
                </tr>
                <tr>
                    <td>费米能级 (eV)</td>
                    <td class="result-value">${task.result.fermiLevel}</td>
                    <td><button class="btn-copy" onclick="copyToClipboard('${task.result.fermiLevel}')">复制</button></td>
                </tr>
            </tbody>
        </table>

        <div class="visualization-area">
            <div class="visualization-title">能带结构图</div>
            <div class="chart-placeholder">
                <div style="text-align: center;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 60px; height: 60px; margin-bottom: 12px; opacity: 0.5;">
                        <path d="M3 3v18h18"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                    </svg>
                    <p>能带结构图</p>
                    <p style="font-size: 0.875rem; margin-top: 8px;">带隙值：${task.result.bandGap} eV</p>
                </div>
            </div>
        </div>
    `;

    addLog(`查看任务 ${taskId} 的计算结果`, 'info');
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        addLog(`已复制到剪贴板：${text}`, 'success');
    }).catch(() => {
        addLog('复制失败', 'error');
    });
}

// 暂停任务
function pauseTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    task.status = 'pending';
    task.progress = 0;
    task.progressText = '已暂停';
    addLog(`任务 ${taskId} 已暂停`, 'warning');
    updateTaskList();
    updateTaskStats();
}

// 删除任务
function deleteTask(taskId) {
    const index = tasks.findIndex(t => t.id === taskId);
    if (index === -1) return;

    tasks.splice(index, 1);
    
    if (selectedTaskId === taskId) {
        selectedTaskId = null;
        document.getElementById('resultContent').innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <p>选择一个完成的任务查看结果</p>
            </div>
        `;
    }

    addLog(`任务 ${taskId} 已删除`, 'info');
    updateTaskList();
    updateTaskStats();
}

// 更新任务统计
function updateTaskStats() {
    const total = tasks.length;
    const running = tasks.filter(t => t.status === 'running').length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const failed = tasks.filter(t => t.status === 'failed').length;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('runningTasks').textContent = running;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('failedTasks').textContent = failed;
}

// 添加日志
function addLog(message, type = 'info') {
    const logContent = document.getElementById('logContent');
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];

    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.innerHTML = `
        <span class="log-time">${time}</span>
        <span class="log-message">${message}</span>
    `;

    logContent.appendChild(logEntry);
    logContent.scrollTop = logContent.scrollHeight;
}

// 清空日志
function clearLog() {
    const logContent = document.getElementById('logContent');
    logContent.innerHTML = `
        <div class="log-entry info">
            <span class="log-time">--:--:--</span>
            <span class="log-message">日志已清空</span>
        </div>
    `;
}
