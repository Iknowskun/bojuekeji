// 材料数据
const materialsData = [
    {
        id: 101,
        name: 'Haynes 230 高温合金',
        grade: 'UNS N06230',
        category: 'creep',
        categoryName: '蠕变性质',
        icon: '🔥',
        description: 'Haynes 230 是一种固溶强化的镍铬钨钼合金，具有极其优异的高温蠕变强度、抗氧化性和热稳定性，长期暴露于高温下仍能保持良好的延展性。',
        properties: {
            creepRuptureLife: '> 10,000 h (@ 870℃/40 MPa)',
            minimumCreepRate: '1.2e-5 %/h (@ 870℃/40 MPa)',
            creepActivationEnergy: '285 kJ/mol',
            stressExponent: '4.8',
            tensileStrength: 860,
            yieldStrength: 380,
            density: 8.97,
            modulus: 211
        },
        applications: ['航空发动机燃烧室', '燃气轮机部件', '工业加热炉', '化工反应器'],
        updateTime: '2024-03-25'
    },
    {
        id: 102,
        name: '单晶硅 (Silicon)',
        grade: 'High-Purity Si',
        category: 'electronic',
        categoryName: '电子结构',
        icon: '⚡',
        description: '单晶硅是现代微电子工业的基石，是一种间接带隙半导体。其电子结构决定了它的导电性受温度和掺杂的显著影响。',
        properties: {
            bandGap: '1.12 eV (@ 300K)',
            electronMobility: '1400 cm²/(V·s)',
            holeMobility: '450 cm²/(V·s)',
            intrinsicCarrierDensity: '1.5e10 cm⁻³',
            workFunction: '4.8 eV',
            effectiveMassElectron: '1.08 m₀',
            effectiveMassHole: '0.56 m₀'
        },
        applications: ['集成电路', '太阳能电池', '分立器件', '微机电系统(MEMS)'],
        updateTime: '2024-03-24'
    },
    {
        id: 103,
        name: '储氢合金 LaNi5',
        grade: 'AB5-Type',
        category: 'elastic-h',
        categoryName: '弹性性质(含H元素)',
        icon: '⚛️',
        description: 'LaNi5 是一种典型的 AB5 型金属氢化物储氢材料。在吸氢/放氢过程中，H原子的间隙固溶会引起晶格膨胀，从而显著改变其弹性性质，可能导致氢致开裂(氢脆)。',
        properties: {
            hydrogenCapacity: '1.4 wt.% (LaNi5H6.7)',
            bulkModulus: '135 GPa (未吸氢)',
            shearModulus: '55 GPa (未吸氢)',
            poissonRatio: '0.31',
            bulkModulusHydrogenated: '110 GPa (饱和吸氢)',
            shearModulusHydrogenated: '42 GPa (饱和吸氢)',
            volumeExpansion: '25% (吸氢后)'
        },
        applications: ['镍氢电池负极', '固态氢储运', '氢气提纯', '热泵材料'],
        updateTime: '2024-03-23'
    },
    {
        id: 1,
        name: 'Ti-6Al-4V钛合金',
        grade: 'TC4',
        category: 'special-alloy',
        categoryName: '特种合金',
        icon: '🔩',
        description: 'Ti-6Al-4V是最常用的α-β型两相钛合金，具有优异的综合力学性能、较低的密度和极佳的生物相容性。',
        properties: {
            tensileStrength: 950,
            yieldStrength: 880,
            elongation: 14,
            hardness: 320,
            density: 4.43,
            modulus: 110,
            thermalExpansion: '8.6 µm/(m·K)',
            poissonRatio: '0.34'
        },
        applications: ['航空航天结构件', '化工压力容器', '人工关节植入物', '赛车连杆'],
        updateTime: '2024-01-15'
    },
    {
        id: 2,
        name: '碳纤维复合材料',
        grade: 'CFRP',
        category: 'composite',
        categoryName: '复合材料',
        icon: '⚡',
        description: '碳纤维增强复合材料具有高强度、高模量、低密度等优异特性，是航空航天领域的理想材料。',
        properties: {
            tensileStrength: 3500,
            yieldStrength: 3200,
            elongation: 1.5,
            hardness: 280,
            density: 1.6,
            modulus: 230
        },
        applications: ['航空航天', '体育用品', '汽车工业', '风力发电'],
        updateTime: '2024-01-14'
    },
    {
        id: 3,
        name: 'YBCO高温超导体',
        grade: 'YBa2Cu3O7',
        category: 'superconducting',
        categoryName: '超导材料',
        icon: '⚡',
        description: '钇钡铜氧(YBCO)是一种重要的高温超导材料，临界温度可达92K，在电力传输和磁悬浮等领域有重要应用。',
        properties: {
            criticalTemp: '92 K',
            criticalField: '150 T',
            criticalCurrent: '300 A/mm²',
            density: 6.38,
            resistivity: 0,
            thermalConductivity: 10
        },
        applications: ['电力传输', '磁悬浮列车', '核磁共振', '粒子加速器'],
        updateTime: '2024-01-13'
    },
    {
        id: 4,
        name: '304不锈钢',
        grade: 'SUS304',
        category: 'steel',
        categoryName: '钢铁材料',
        icon: '🔩',
        description: '304不锈钢是最常用的奥氏体不锈钢，具有良好的耐腐蚀性、耐热性和机械性能，应用极为广泛。',
        properties: {
            tensileStrength: 520,
            yieldStrength: 205,
            elongation: 40,
            hardness: 180,
            density: 7.93,
            modulus: 193,
            thermalExpansion: '17.2 µm/(m·K)',
            specificHeat: '500 J/(kg·K)'
        },
        applications: ['食品加工管道', '核电站冷却管', '建筑幕墙外壳', '手术器械'],
        updateTime: '2024-01-12'
    },
    {
        id: 5,
        name: '锂离子电池正极材料',
        grade: 'NCM811',
        category: 'energy',
        categoryName: '能源材料',
        icon: '🔋',
        description: 'NCM811是高镍三元正极材料，具有高能量密度和良好的循环性能，是电动汽车电池的核心材料。',
        properties: {
            energyDensity: 280,
            powerDensity: 1500,
            cycleLife: 2000,
            capacity: 200,
            voltage: 3.7,
            thermalStability: 85
        },
        applications: ['电动汽车', '储能系统', '消费电子', '电动工具'],
        updateTime: '2024-01-11'
    },
    {
        id: 6,
        name: 'Inconel 718镍基合金',
        grade: 'GH4169',
        category: 'special-alloy',
        categoryName: '特种合金',
        icon: '🔩',
        description: 'Inconel 718是一种沉淀硬化镍基高温合金，在700℃以下具有优异的高温强度和抗氧化性能。',
        properties: {
            tensileStrength: 1340,
            yieldStrength: 1100,
            elongation: 12,
            hardness: 400,
            density: 8.19,
            modulus: 200
        },
        applications: ['航空发动机', '燃气轮机', '核反应堆', '石油化工'],
        updateTime: '2024-01-10'
    },
    {
        id: 7,
        name: '玻璃纤维复合材料',
        grade: 'GFRP',
        category: 'composite',
        categoryName: '复合材料',
        icon: '⚡',
        description: '玻璃纤维增强复合材料具有良好的绝缘性、耐腐蚀性和机械性能，成本相对较低，应用广泛。',
        properties: {
            tensileStrength: 1200,
            yieldStrength: 1000,
            elongation: 2.5,
            hardness: 200,
            density: 2.0,
            modulus: 40
        },
        applications: ['建筑结构', '船舶制造', '管道工程', '电子绝缘'],
        updateTime: '2024-01-09'
    },
    {
        id: 8,
        name: 'MgB2超导体',
        grade: 'MgB2',
        category: 'superconducting',
        categoryName: '超导材料',
        icon: '⚡',
        description: '二硼化镁是一种金属间化合物超导体，临界温度39K，具有简单的晶体结构和良好的加工性能。',
        properties: {
            criticalTemp: 39,
            criticalField: 40,
            criticalCurrent: 1000,
            density: 2.57,
            resistivity: 0,
            thermalConductivity: 15
        },
        applications: ['磁共振成像', '超导电缆', '超导磁体', '电子器件'],
        updateTime: '2024-01-08'
    },
    {
        id: 9,
        name: '440C不锈钢',
        grade: 'SUS440C',
        category: 'steel',
        categoryName: '钢铁材料',
        icon: '🔩',
        description: '440C是一种高碳高铬马氏体不锈钢，具有优异的硬度和耐磨性，常用于制造刀具和轴承。',
        properties: {
            tensileStrength: 760,
            yieldStrength: 450,
            elongation: 14,
            hardness: 580,
            density: 7.8,
            modulus: 200
        },
        applications: ['刀具制造', '轴承', '阀门', '医疗器械'],
        updateTime: '2024-01-07'
    },
    {
        id: 10,
        name: '磷酸铁锂电池材料',
        grade: 'LFP',
        category: 'energy',
        categoryName: '能源材料',
        icon: '🔋',
        description: '磷酸铁锂正极材料具有优异的安全性和循环寿命，成本较低，广泛应用于储能和电动汽车领域。',
        properties: {
            energyDensity: 160,
            powerDensity: 2000,
            cycleLife: 5000,
            capacity: 155,
            voltage: 3.2,
            thermalStability: 95
        },
        applications: ['储能系统', '电动汽车', '电动大巴', '备用电源'],
        updateTime: '2024-01-06'
    },
    {
        id: 11,
        name: '碳化硅陶瓷基复合材料',
        grade: 'SiC/SiC CMC',
        category: 'composite',
        categoryName: '复合材料',
        icon: '⚡',
        description: '连续碳化硅纤维增强碳化硅陶瓷基复合材料(CMC)，能耐1300℃以上的高温且无需冷却，重量仅为镍基高温合金的三分之一。',
        properties: {
            tensileStrength: 350,
            fractureToughness: '20 MPa·m^1/2',
            maxUseTemp: '1350 ℃',
            density: 2.4,
            modulus: 250,
            thermalConductivity: 15
        },
        applications: ['航空发动机高压涡轮', '航天器防热瓦', '核聚变包层材料', '高温制动盘'],
        updateTime: '2024-02-15'
    },
    {
        id: 12,
        name: '有机无机杂化钙钛矿',
        grade: 'MAPbI3',
        category: 'energy',
        categoryName: '能源材料',
        icon: '🔋',
        description: 'MAPbI3 是一种典型的金属卤化物钙钛矿，拥有出色的光吸收系数和载流子扩散长度，是第三代太阳能电池的明星材料。',
        properties: {
            bandGap: '1.55 eV',
            electronMobility: '60 cm²/(V·s)',
            holeMobility: '45 cm²/(V·s)',
            excitonBindingEnergy: '16 meV',
            absorptionCoefficient: '> 10^4 cm⁻¹',
            powerConversionEfficiency: '25.7%'
        },
        applications: ['柔性太阳能电池', '叠层光伏组件', '发光二极管(LED)', '光电探测器'],
        updateTime: '2024-02-20'
    }
];

// 当前状态
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 6;
let filteredMaterials = [...materialsData];

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderMaterials();
    bindEvents();
});

// 绑定事件
function bindEvents() {
    // 分类标签点击
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // 搜索输入
    document.getElementById('searchInput').addEventListener('input', function(e) {
        filterMaterials();
    });

    // 性能筛选
    document.getElementById('propertyFilter').addEventListener('change', function() {
        filterMaterials();
    });

    // 排序筛选
    document.getElementById('sortFilter').addEventListener('change', function() {
        sortMaterials();
    });

    // 加载更多
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        currentPage++;
        renderMaterials();
    });
}

// 切换分类
function switchCategory(category) {
    currentCategory = category;
    currentPage = 1;

    // 更新标签激活状态
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });

    // 筛选材料
    filterMaterials();
}

// 筛选材料
function filterMaterials() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const propertyFilter = document.getElementById('propertyFilter').value;

    filteredMaterials = materialsData.filter(material => {
        // 分类筛选
        if (currentCategory !== 'all' && material.category !== currentCategory) {
            return false;
        }

        // 搜索筛选
        if (searchTerm) {
            const searchFields = [
                material.name,
                material.grade,
                material.categoryName,
                ...material.applications
            ].join(' ').toLowerCase();

            if (!searchFields.includes(searchTerm)) {
                return false;
            }
        }

        return true;
    });

    // 排序
    sortMaterials();
}

// 排序材料
function sortMaterials() {
    const sortFilter = document.getElementById('sortFilter').value;

    switch (sortFilter) {
        case 'name':
            filteredMaterials.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'tensile-desc':
            filteredMaterials.sort((a, b) => b.properties.tensileStrength - a.properties.tensileStrength);
            break;
        case 'tensile-asc':
            filteredMaterials.sort((a, b) => a.properties.tensileStrength - b.properties.tensileStrength);
            break;
        case 'update-time':
            filteredMaterials.sort((a, b) => new Date(b.updateTime) - new Date(a.updateTime));
            break;
        default:
            // 默认按ID排序
            filteredMaterials.sort((a, b) => a.id - b.id);
    }

    currentPage = 1;
    renderMaterials();
}

// 渲染材料列表
function renderMaterials() {
    const grid = document.getElementById('materialsGrid');
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const materialsToShow = filteredMaterials.slice(startIndex, endIndex);

    let html = '';

    materialsToShow.forEach(material => {
        html += `
            <div class="material-card" onclick="showMaterialDetail(${material.id})">
                <div class="material-header">
                    <div class="material-icon">${material.icon}</div>
                    <div class="material-info">
                        <h3 class="material-name">${material.name}</h3>
                        <p class="material-grade">牌号: ${material.grade}</p>
                        <span class="material-category">${material.categoryName}</span>
                    </div>
                </div>
                <div class="material-properties">
                    <div class="property-item">
                        <div class="property-label">抗拉强度</div>
                        <div class="property-value">${material.properties.tensileStrength} MPa</div>
                    </div>
                    <div class="property-item">
                        <div class="property-label">屈服强度</div>
                        <div class="property-value">${material.properties.yieldStrength} MPa</div>
                    </div>
                    <div class="property-item">
                        <div class="property-label">延伸率</div>
                        <div class="property-value">${material.properties.elongation}%</div>
                    </div>
                    <div class="property-item">
                        <div class="property-label">硬度</div>
                        <div class="property-value">${material.properties.hardness}</div>
                    </div>
                </div>
                <div class="material-footer">
                    <span class="update-time">更新: ${material.updateTime}</span>
                    <button class="btn-view-detail">查看详情</button>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    // 更新加载更多按钮状态
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (endIndex >= filteredMaterials.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// 显示材料详情
function showMaterialDetail(materialId) {
    const material = materialsData.find(m => m.id === materialId);
    if (!material) return;

    // 更新详情内容
    document.getElementById('detailTitle').textContent = material.name;
    document.getElementById('detailIcon').textContent = material.icon;
    document.getElementById('detailName').textContent = material.name;
    document.getElementById('detailDescription').textContent = material.description;
    document.getElementById('detailCategory').textContent = material.categoryName;
    document.getElementById('detailGrade').textContent = `牌号: ${material.grade}`;

    // 更新性能参数
    const propertiesGrid = document.getElementById('propertiesGrid');
    let propertiesHtml = '';

    const propertyLabels = {
        // 常规力学
        tensileStrength: '抗拉强度 (MPa)',
        yieldStrength: '屈服强度 (MPa)',
        elongation: '延伸率 (%)',
        hardness: '硬度',
        density: '密度 (g/cm³)',
        modulus: '弹性模量 (GPa)',
        poissonRatio: '泊松比',
        thermalExpansion: '热膨胀系数',
        specificHeat: '比热容',
        // 蠕变性质
        creepRuptureLife: '蠕变断裂寿命',
        minimumCreepRate: '最小蠕变速率',
        creepActivationEnergy: '蠕变激活能',
        stressExponent: '应力指数',
        // 电子结构
        bandGap: '禁带宽度',
        electronMobility: '电子迁移率',
        holeMobility: '空穴迁移率',
        intrinsicCarrierDensity: '本征载流子浓度',
        workFunction: '功函数',
        effectiveMassElectron: '电子有效质量',
        effectiveMassHole: '空穴有效质量',
        // 弹性性质(含H元素)
        hydrogenCapacity: '储氢容量',
        bulkModulus: '体积模量',
        shearModulus: '剪切模量',
        bulkModulusHydrogenated: '吸氢后体积模量',
        shearModulusHydrogenated: '吸氢后剪切模量',
        volumeExpansion: '体积膨胀率',
        // 复合材料 & 能源附加
        fractureToughness: '断裂韧性',
        maxUseTemp: '最高使用温度',
        excitonBindingEnergy: '激子结合能',
        absorptionCoefficient: '光吸收系数',
        powerConversionEfficiency: '光电转换效率',
        criticalTemp: '临界温度',
        criticalField: '临界磁场',
        criticalCurrent: '临界电流',
        energyDensity: '能量密度 (Wh/kg)',
        powerDensity: '功率密度 (W/kg)',
        cycleLife: '循环寿命 (次)',
        capacity: '容量 (mAh/g)',
        voltage: '电压 (V)',
        thermalStability: '热稳定性 (%)',
        resistivity: '电阻率 (Ω·m)',
        thermalConductivity: '热导率 (W/m·K)'
    };

    Object.entries(material.properties).forEach(([key, value]) => {
        const label = propertyLabels[key] || key;
        propertiesHtml += `
            <div class="property-card">
                <div class="property-label">${label}</div>
                <div class="property-value">${value}</div>
            </div>
        `;
    });

    propertiesGrid.innerHTML = propertiesHtml;

    // 更新应用领域
    const applicationsList = document.getElementById('applicationsList');
    let applicationsHtml = '';

    material.applications.forEach(app => {
        applicationsHtml += `<span class="application-item">${app}</span>`;
    });

    applicationsList.innerHTML = applicationsHtml;

    // 显示模态框
    openModal('materialDetailModal');
}

// 关闭详情模态框
function closeDetailModal() {
    closeModal('materialDetailModal');
}

console.log('材料分类页面已加载');
