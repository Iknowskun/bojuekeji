// 材料设计工具 JavaScript

// 全局变量
let scene, camera, renderer, currentModel = null;
let isAutoRotate = true;
let isFullscreen = false;
let currentTemperature = 590;

// 显示首页
function showHome() {
    document.getElementById('homeView').style.display = 'block';
    document.getElementById('toolView').style.display = 'none';
    window.scrollTo(0, 0);
}

// 显示工具
function showTool(toolType) {
    // 根据工具类型跳转到不同页面
    if (toolType === 'temperature') {
        // 模型温度可视化工具
        document.getElementById('homeView').style.display = 'none';
        document.getElementById('toolView').style.display = 'block';
        window.scrollTo(0, 0);
        addLog('进入模型温度可视化工具', 'info');
    } else if (toolType === 'adaptive') {
        // 面向性能要求的自适应迭代快速材料设计策略
        window.location.href = 'adaptive-design.html';
    } else if (toolType === 'genetic') {
        // 基于遗传算法的对材料描述符和机器学习模型组合筛选框架
        window.location.href = 'genetic-algorithm-framework.html';
    } else if (toolType === 'dimensional') {
        // 量纲同步计算的符号学习模型
        window.location.href = 'dimensional-symbolic-learning.html';
    } else if (toolType === 'ttt') {
        // 基于机器学习的钢过冷奥氏体动态转变TTT曲线预测模型
        window.location.href = 'ttt-curve-prediction.html';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化');
    
    // 等待一小段时间确保所有资源加载完成
    setTimeout(() => {
        try {
            initThreeJS();
            console.log('Three.js初始化完成');
            
            initFileUpload();
            console.log('文件上传初始化完成');
            
            initTemperatureScale();
            console.log('温度刻度初始化完成');
            
            initControls();
            console.log('控制选项初始化完成');
            
            addLog('系统初始化完成，等待模型上传...', 'info');
            console.log('所有初始化完成');
        } catch (error) {
            console.error('初始化失败:', error);
            addLog(`系统初始化失败：${error.message}`, 'error');
        }
    }, 100);
});

// 初始化Three.js场景
function initThreeJS() {
    const container = document.getElementById('modelContainer');
    
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);

    // 创建相机
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 1;

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // 添加网格辅助线
    const gridHelper = new THREE.GridHelper(10, 10, 0xcccccc, 0xe5e5e5);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // 开始渲染循环
    animate();

    // 窗口大小自适应
    window.addEventListener('resize', onWindowResize);
}

// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    if (currentModel && isAutoRotate) {
        currentModel.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}

// 窗口大小自适应
function onWindowResize() {
    const container = document.getElementById('modelContainer');
    if (!container) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// 初始化文件上传
function initFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const modelFile = document.getElementById('modelFile');

    console.log('初始化文件上传功能...');
    console.log('uploadArea:', uploadArea);
    console.log('modelFile:', modelFile);

    if (!uploadArea || !modelFile) {
        console.error('上传区域或文件输入框未找到');
        addLog('错误：上传功能初始化失败', 'error');
        return;
    }

    // 点击上传
    uploadArea.addEventListener('click', (e) => {
        console.log('点击上传区域');
        e.preventDefault();
        e.stopPropagation();
        modelFile.click();
    });

    // 拖拽进入
    uploadArea.addEventListener('dragenter', (e) => {
        console.log('拖拽进入');
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('dragover');
    });

    // 拖拽悬停
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('dragover');
    });

    // 拖拽离开
    uploadArea.addEventListener('dragleave', (e) => {
        console.log('拖拽离开');
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
    });

    // 拖拽放下
    uploadArea.addEventListener('drop', (e) => {
        console.log('拖拽放下');
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        console.log('拖拽的文件:', files);
        
        if (files && files.length > 0) {
            console.log('开始加载文件:', files[0].name);
            loadModel(files[0]);
        } else {
            addLog('未检测到文件', 'warning');
        }
    });

    // 文件选择变化
    modelFile.addEventListener('change', (e) => {
        console.log('文件选择变化');
        const files = e.target.files;
        console.log('选择的文件:', files);
        
        if (files && files.length > 0) {
            console.log('开始加载文件:', files[0].name);
            loadModel(files[0]);
        }
    });

    console.log('文件上传功能已初始化');
    addLog('文件上传功能已就绪', 'success');
}

// 加载3D模型
function loadModel(file) {
    console.log('开始加载模型:', file.name);
    
    const validExtensions = ['.glb', '.gltf'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
        addLog(`错误：不支持的文件格式 ${fileExtension}，请上传 .glb 或 .gltf 文件`, 'error');
        console.error('不支持的文件格式:', fileExtension);
        return;
    }

    addLog(`开始加载模型：${file.name}`, 'info');

    const reader = new FileReader();
    
    reader.onload = (e) => {
        console.log('文件读取完成，开始解析模型');
        
        try {
            const loader = new THREE.GLTFLoader();
            
            loader.load(e.target.result, 
                (gltf) => {
                    console.log('模型解析成功');
                    
                    // 移除旧模型
                    if (currentModel) {
                        scene.remove(currentModel);
                    }

                    // 添加新模型
                    currentModel = gltf.scene;
                    
                    // 自动缩放模型
                    const box = new THREE.Box3().setFromObject(currentModel);
                    const size = box.getSize(new THREE.Vector3());
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scale = 3 / maxDim;
                    currentModel.scale.set(scale, scale, scale);
                    
                    // 居中模型
                    const center = box.getCenter(new THREE.Vector3());
                    currentModel.position.sub(center.multiplyScalar(scale));
                    currentModel.position.y = 0;

                    // 启用阴影
                    currentModel.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });

                    scene.add(currentModel);

                    // 更新UI
                    const uploadArea = document.getElementById('uploadArea');
                    const fileInfo = document.getElementById('fileInfo');
                    const fileName = document.getElementById('fileName');
                    const fileMeta = document.getElementById('fileMeta');
                    
                    if (uploadArea) uploadArea.style.display = 'none';
                    if (fileInfo) fileInfo.style.display = 'flex';
                    if (fileName) fileName.textContent = file.name;
                    if (fileMeta) fileMeta.textContent = `${formatFileSize(file.size)} · ${fileExtension.replace('.', '').toUpperCase()}`;
                    
                    // 隐藏空状态
                    const emptyState = document.querySelector('.empty-state');
                    if (emptyState) {
                        emptyState.style.display = 'none';
                    }

                    // 设置初始颜色
                    updateModelColor(currentTemperature);

                    addLog(`模型加载成功：${file.name}`, 'success');
                    addLog(`模型尺寸：${size.x.toFixed(2)} × ${size.y.toFixed(2)} × ${size.z.toFixed(2)}`, 'info');
                },
                (progress) => {
                    if (progress.total > 0) {
                        const percent = (progress.loaded / progress.total * 100).toFixed(0);
                        addLog(`加载进度：${percent}%`, 'info');
                    }
                },
                (error) => {
                    console.error('模型加载失败:', error);
                    addLog(`模型加载失败：${error.message || '未知错误'}`, 'error');
                }
            );
        } catch (err) {
            console.error('模型解析异常:', err);
            addLog(`模型解析失败：${err.message}`, 'error');
        }
    };

    reader.onerror = (e) => {
        console.error('文件读取失败:', e);
        addLog('文件读取失败，请重试', 'error');
    };

    reader.readAsDataURL(file);
}

// 移除模型
function removeModel() {
    if (currentModel) {
        scene.remove(currentModel);
        currentModel = null;
    }

    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('fileInfo').style.display = 'none';
    document.getElementById('modelFile').value = '';

    // 显示空状态
    const emptyState = document.querySelector('.empty-state');
    if (emptyState) {
        emptyState.style.display = 'block';
    }

    addLog('模型已移除', 'info');
}

// 加载测试模型
function loadTestModel(type) {
    console.log('加载测试模型:', type);
    addLog(`开始加载测试模型：${type}`, 'info');

    // 移除旧模型
    if (currentModel) {
        scene.remove(currentModel);
    }

    // 创建测试模型
    let geometry;
    const material = new THREE.MeshStandardMaterial({
        color: 0xffff00,
        metalness: 0.8,
        roughness: 0.2
    });

    switch (type) {
        case 'cube':
            geometry = new THREE.BoxGeometry(2, 2, 2);
            break;
        case 'sphere':
            geometry = new THREE.SphereGeometry(1.5, 32, 32);
            break;
        case 'cylinder':
            geometry = new THREE.CylinderGeometry(1, 1, 2.5, 32);
            break;
        case 'torus':
            geometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
            break;
        default:
            geometry = new THREE.BoxGeometry(2, 2, 2);
    }

    currentModel = new THREE.Mesh(geometry, material);
    currentModel.castShadow = true;
    currentModel.receiveShadow = true;

    scene.add(currentModel);

    // 更新UI
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileName').textContent = `测试模型 - ${type}`;
    document.getElementById('fileMeta').textContent = '内置几何体 · Three.js';
    
    // 隐藏空状态
    const emptyState = document.querySelector('.empty-state');
    if (emptyState) {
        emptyState.style.display = 'none';
    }

    // 设置初始颜色
    updateModelColor(currentTemperature);

    addLog(`测试模型加载成功：${type}`, 'success');
}

// 初始化温度刻度
function initTemperatureScale() {
    const tempSlider = document.getElementById('tempSlider');
    const tempSliderThumb = document.getElementById('tempSliderThumb');

    if (!tempSlider || !tempSliderThumb) {
        console.error('温度滑块未找到');
        return;
    }

    // 滑块拖动事件
    tempSlider.addEventListener('input', (e) => {
        const temp = parseInt(e.target.value);
        updateModelColor(temp);
        updateSliderThumb(temp);
    });

    // 初始化滑块位置
    updateSliderThumb(590);
}

// 更新滑块滑块位置
function updateSliderThumb(temp) {
    const tempSlider = document.getElementById('tempSlider');
    const tempSliderThumb = document.getElementById('tempSliderThumb');
    
    if (!tempSlider || !tempSliderThumb) return;

    const min = parseInt(tempSlider.min);
    const max = parseInt(tempSlider.max);
    const percent = ((temp - min) / (max - min)) * 100;
    
    tempSliderThumb.style.left = `${percent}%`;
}

// 更新模型颜色
function updateModelColor(temp) {
    currentTemperature = temp;

    // 更新温度显示
    document.getElementById('currentTemp').textContent = temp;

    if (!currentModel) return;

    // 获取温度对应的颜色
    const color = getTemperatureColor(temp);

    // 更新模型颜色
    currentModel.traverse((child) => {
        if (child.isMesh) {
            child.material.color.setHex(color);
            child.material.needsUpdate = true;
        }
    });

    addLog(`模型颜色已更新：${temp}℃`, 'info');
}

// 获取温度对应的颜色
function getTemperatureColor(temp) {
    if (temp <= 515) return 0x0000ff;      // 蓝色
    else if (temp <= 550) return 0x007fff;  // 浅蓝色
    else if (temp <= 590) return 0xffff00;  // 黄色
    else if (temp <= 630) return 0xff7f00;  // 橙色
    else return 0xff0000;                   // 红色
}

// 初始化控制选项
function initControls() {
    const autoRotateCheckbox = document.getElementById('autoRotate');
    const showWireframeCheckbox = document.getElementById('showWireframe');

    autoRotateCheckbox.addEventListener('change', (e) => {
        isAutoRotate = e.target.checked;
        addLog(isAutoRotate ? '自动旋转已开启' : '自动旋转已关闭', 'info');
    });

    showWireframeCheckbox.addEventListener('change', (e) => {
        if (!currentModel) return;

        const showWireframe = e.target.checked;
        currentModel.traverse((child) => {
            if (child.isMesh) {
                child.material.wireframe = showWireframe;
                child.material.needsUpdate = true;
            }
        });

        addLog(showWireframe ? '线框模式已开启' : '线框模式已关闭', 'info');
    });
}

// 重置视图
function resetView() {
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);

    if (currentModel) {
        currentModel.rotation.set(0, 0, 0);
    }

    addLog('视图已重置', 'info');
}

// 切换全屏
function toggleFullscreen() {
    const container = document.getElementById('modelContainer');

    if (!isFullscreen) {
        container.classList.add('fullscreen');
        isFullscreen = true;
        addLog('已进入全屏模式', 'info');
    } else {
        container.classList.remove('fullscreen');
        isFullscreen = false;
        addLog('已退出全屏模式', 'info');
    }

    // 重新调整渲染器大小
    setTimeout(() => {
        onWindowResize();
    }, 100);
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

// ESC键退出全屏
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
    }
});
