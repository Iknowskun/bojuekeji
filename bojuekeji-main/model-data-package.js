// 高通量模型数据包 JavaScript

// 全局变量
let uploadedFile = null;
let selectedModel = null;
let currentPackage = null;

// 模拟数据库中的模型
const databaseModels = [
    {
        id: 1,
        name: 'DFT带隙预测模型 v1.0',
        type: 'dft',
        scenario: '半导体材料带隙预测',
        accuracy: 'MAE: 0.15 eV',
        version: '1.0.0',
        inputs: ['晶格常数a', '晶格常数b', '晶格常数c', '原子种类', '原子位置'],
        outputs: ['带隙值', '费米能级', '有效质量'],
        samples: [
            { input: 'Si, a=5.43Å', output: '带隙=1.12eV' },
            { input: 'Ge, a=5.66Å', output: '带隙=0.66eV' }
        ]
    },
    {
        id: 2,
        name: 'ML弹性模量预测模型 v2.1',
        type: 'ml',
        scenario: '金属材料弹性模量预测',
        accuracy: 'R²: 0.95',
        version: '2.1.0',
        inputs: ['化学成分', '晶体结构', '温度'],
        outputs: ['杨氏模量', '剪切模量', '泊松比'],
        samples: [
            { input: 'Al, FCC, 300K', output: 'E=70GPa' },
            { input: 'Fe, BCC, 300K', output: 'E=210GPa' }
        ]
    },
    {
        id: 3,
        name: 'MD热导率预测模型 v1.5',
        type: 'md',
        scenario: '纳米材料热导率预测',
        accuracy: '误差: ±10%',
        version: '1.5.0',
        inputs: ['材料类型', '尺寸', '温度', '缺陷浓度'],
        outputs: ['热导率', '声子平均自由程'],
        samples: [
            { input: 'Si纳米线, 10nm, 300K', output: 'κ=15W/mK' },
            { input: 'Graphene, 1μm, 300K', output: 'κ=2000W/mK' }
        ]
    },
    {
        id: 4,
        name: 'MC相图预测模型 v3.0',
        type: 'mc',
        scenario: '合金相图预测',
        accuracy: '准确率: 92%',
        version: '3.0.0',
        inputs: ['元素组成', '温度', '压力'],
        outputs: ['稳定相', '相变温度', '相分数'],
        samples: [
            { input: 'Fe-C, 0.8wt%, 700°C', output: '珠光体' },
            { input: 'Al-Si, 12wt%, 580°C', output: '共晶' }
        ]
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initFileUpload();
    addLog('系统初始化完成，等待数据包上传...', 'info');
});

// 初始化文件上传
function initFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('packageFile');

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
    const validExtensions = ['.json', '.csv', '.zip', '.hdf5'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
        addLog(`错误：不支持的文件格式 ${fileExtension}`, 'error');
        return;
    }

    uploadedFile = file;
    currentPackage = generateMockPackage(file);

    // 更新UI
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileMeta').textContent = `${formatFileSize(file.size)} · ${fileExtension.replace('.', '').toUpperCase()}`;

    addLog(`数据包上传成功：${file.name}`, 'success');
    addLog(`文件大小：${formatFileSize(file.size)}`, 'info');

    // 显示预览
    showPreview(currentPackage);

    // 启用测试按钮
    document.getElementById('btnTest').disabled = false;
    document.getElementById('testEmpty').style.display = 'none';
}

// 生成模拟数据包
function generateMockPackage(file) {
    const modelTypes = {
        'dft': '第一性原理计算模型',
        'ml': '机器学习预测模型',
        'md': '分子动力学模型',
        'mc': '蒙特卡洛模型'
    };

    const selectedType = document.getElementById('modelType').value;
    const baseModel = databaseModels[Math.floor(Math.random() * databaseModels.length)];

    return {
        name: file.name.replace(/\.[^/.]+$/, ''),
        type: modelTypes[selectedType],
        scenario: baseModel.scenario,
        accuracy: baseModel.accuracy,
        version: '1.0.0',
        inputs: baseModel.inputs,
        outputs: baseModel.outputs,
        samples: baseModel.samples
    };
}

// 显示预览
function showPreview(package) {
    document.getElementById('previewContent').style.display = 'none';
    document.getElementById('modelInfo').style.display = 'flex';

    // 基本信息
    document.getElementById('modelName').textContent = package.name;
    document.getElementById('modelScenario').textContent = package.scenario;
    document.getElementById('modelAccuracy').textContent = package.accuracy;
    document.getElementById('modelVersion').textContent = package.version;

    // 数据包结构
    const inputTags = document.getElementById('inputTags');
    const outputTags = document.getElementById('outputTags');

    inputTags.innerHTML = package.inputs.map(input => `<span class="tag">${input}</span>`).join('');
    outputTags.innerHTML = package.outputs.map(output => `<span class="tag">${output}</span>`).join('');

    // 示例数据
    const sampleHeader = document.getElementById('sampleHeader');
    const sampleBody = document.getElementById('sampleBody');

    sampleHeader.innerHTML = `
        <th>输入示例</th>
        <th>输出示例</th>
    `;

    sampleBody.innerHTML = package.samples.map(sample => `
        <tr>
            <td>${sample.input}</td>
            <td>${sample.output}</td>
        </tr>
    `).join('');

    addLog('数据包解析完成，显示预览信息', 'success');
}

// 移除文件
function removeFile() {
    uploadedFile = null;
    selectedModel = null;
    currentPackage = null;

    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('fileInfo').style.display = 'none';
    document.getElementById('packageFile').value = '';

    // 重置预览
    document.getElementById('previewContent').style.display = 'flex';
    document.getElementById('modelInfo').style.display = 'none';

    // 重置测试
    document.getElementById('btnTest').disabled = true;
    document.getElementById('testResult').style.display = 'none';
    document.getElementById('testEmpty').style.display = 'flex';
    document.getElementById('testInput').value = '';

    addLog('数据包已移除', 'info');
}

// 打开数据库选择器
function openDatabaseSelector() {
    const modal = document.getElementById('dbModal');
    const modelList = document.getElementById('dbModelList');

    modelList.innerHTML = databaseModels.map(model => `
        <div class="db-model-item" onclick="selectDatabaseModel(${model.id})">
            <div class="db-model-name">${model.name}</div>
            <div class="db-model-meta">
                <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    </svg>
                    ${model.type.toUpperCase()}
                </span>
                <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${model.version}
                </span>
                <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    ${model.accuracy}
                </span>
            </div>
        </div>
    `).join('');

    modal.classList.add('active');
}

// 选择数据库模型
function selectDatabaseModel(modelId) {
    const model = databaseModels.find(m => m.id === modelId);
    if (!model) return;

    selectedModel = model;
    currentPackage = {
        name: model.name,
        type: model.type.toUpperCase(),
        scenario: model.scenario,
        accuracy: model.accuracy,
        version: model.version,
        inputs: model.inputs,
        outputs: model.outputs,
        samples: model.samples
    };

    // 更新UI
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileName').textContent = model.name;
    document.getElementById('fileMeta').textContent = `数据库模型 · ${model.type.toUpperCase()}`;

    // 显示预览
    showPreview(currentPackage);

    // 启用测试按钮
    document.getElementById('btnTest').disabled = false;
    document.getElementById('testEmpty').style.display = 'none';

    // 关闭模态框
    closeDbModal();

    addLog(`从数据库选择模型：${model.name}`, 'success');
}

// 关闭数据库选择器
function closeDbModal() {
    document.getElementById('dbModal').classList.remove('active');
}

// 运行测试
function runTest() {
    const testInput = document.getElementById('testInput').value.trim();

    if (!testInput) {
        addLog('错误：请输入测试数据', 'error');
        return;
    }

    if (!currentPackage) {
        addLog('错误：请先上传或选择数据包', 'error');
        return;
    }

    addLog('开始模型测试...', 'info');

    // 模拟测试过程
    const btnTest = document.getElementById('btnTest');
    btnTest.disabled = true;
    btnTest.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        测试中...
    `;

    setTimeout(() => {
        // 生成模拟结果
        const results = generateTestResults(currentPackage);

        // 显示结果
        displayTestResults(results);

        // 恢复按钮
        btnTest.disabled = false;
        btnTest.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            一键测试
        `;

        addLog(`模型测试完成，预测结果已生成`, 'success');
    }, 1500);
}

// 生成测试结果
function generateTestResults(package) {
    const results = [];

    package.outputs.forEach(output => {
        let value, unit;

        if (output.includes('带隙')) {
            value = (Math.random() * 3).toFixed(3);
            unit = 'eV';
        } else if (output.includes('模量')) {
            value = (50 + Math.random() * 200).toFixed(1);
            unit = 'GPa';
        } else if (output.includes('热导率')) {
            value = (10 + Math.random() * 100).toFixed(1);
            unit = 'W/mK';
        } else if (output.includes('费米能级')) {
            value = (-5 + Math.random() * 2).toFixed(3);
            unit = 'eV';
        } else if (output.includes('泊松比')) {
            value = (0.2 + Math.random() * 0.3).toFixed(3);
            unit = '-';
        } else {
            value = (Math.random() * 100).toFixed(2);
            unit = 'a.u.';
        }

        results.push({
            name: output,
            value: value,
            unit: unit
        });
    });

    return results;
}

// 显示测试结果
function displayTestResults(results) {
    const resultBody = document.getElementById('resultBody');

    resultBody.innerHTML = results.map(result => `
        <tr>
            <td>${result.name}</td>
            <td class="result-value">${result.value}</td>
            <td>${result.unit}</td>
        </tr>
    `).join('');

    document.getElementById('testResult').style.display = 'block';
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
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

// 添加旋转动画
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
