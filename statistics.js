// 统计页面数据
const statisticsData = {
    all: {
        title: '全站统计',
        totalMaterials: 10000,
        totalParameters: 50000,
        totalTypes: 500,
        recentUpdates: 128,
        pieData: [
            { name: '金属材料', percent: 25, color: '#2563eb' },
            { name: '无机非金属材料', percent: 18, color: '#06b6d4' },
            { name: '高分子材料', percent: 22, color: '#8b5cf6' },
            { name: '复合材料', percent: 15, color: '#f59e0b' },
            { name: '纳米材料', percent: 12, color: '#10b981' },
            { name: '功能材料', percent: 8, color: '#ef4444' }
        ],
        barData: [
            { label: '1月', value: 600, height: 60, color: '#2563eb' },
            { label: '2月', value: 750, height: 75, color: '#06b6d4' },
            { label: '3月', value: 850, height: 85, color: '#8b5cf6' },
            { label: '4月', value: 700, height: 70, color: '#f59e0b' },
            { label: '5月', value: 900, height: 90, color: '#10b981' },
            { label: '6月', value: 950, height: 95, color: '#ef4444' }
        ],
        parameters: [
            { name: '抗拉强度', value: 85 },
            { name: '屈服强度', value: 72 },
            { name: '延伸率', value: 65 },
            { name: '硬度', value: 78 },
            { name: '导热系数', value: 55 },
            { name: '导电率', value: 68 }
        ]
    },
    metal: {
        title: '金属材料统计',
        totalMaterials: 2500,
        totalParameters: 12500,
        totalTypes: 120,
        recentUpdates: 35,
        pieData: [
            { name: '钢铁', percent: 40, color: '#2563eb' },
            { name: '铝合金', percent: 25, color: '#06b6d4' },
            { name: '钛合金', percent: 20, color: '#8b5cf6' },
            { name: '铜合金', percent: 10, color: '#f59e0b' },
            { name: '其他', percent: 5, color: '#10b981' }
        ],
        barData: [
            { label: '1月', value: 150, height: 50, color: '#2563eb' },
            { label: '2月', value: 180, height: 60, color: '#06b6d4' },
            { label: '3月', value: 220, height: 73, color: '#8b5cf6' },
            { label: '4月', value: 200, height: 67, color: '#f59e0b' },
            { label: '5月', value: 250, height: 83, color: '#10b981' },
            { label: '6月', value: 280, height: 93, color: '#ef4444' }
        ],
        parameters: [
            { name: '抗拉强度', value: 88 },
            { name: '屈服强度', value: 82 },
            { name: '延伸率', value: 75 },
            { name: '硬度', value: 85 },
            { name: '导热系数', value: 70 },
            { name: '导电率', value: 80 }
        ],
        materials: [
            { name: '6061铝合金', tensile: 310, yield: 276, elongation: 12, date: '2024-01-15' },
            { name: '304不锈钢', tensile: 520, yield: 205, elongation: 40, date: '2024-01-14' },
            { name: 'Ti-6Al-4V钛合金', tensile: 950, yield: 880, elongation: 14, date: '2024-01-13' },
            { name: 'Q235碳钢', tensile: 375, yield: 235, elongation: 26, date: '2024-01-12' },
            { name: '7075铝合金', tensile: 572, yield: 503, elongation: 11, date: '2024-01-11' },
            { name: 'H62黄铜', tensile: 370, yield: 200, elongation: 49, date: '2024-01-10' },
            { name: 'TC4钛合金', tensile: 900, yield: 825, elongation: 10, date: '2024-01-09' },
            { name: '316L不锈钢', tensile: 485, yield: 170, elongation: 40, date: '2024-01-08' },
            { name: '2024铝合金', tensile: 470, yield: 325, elongation: 10, date: '2024-01-07' },
            { name: '45号钢', tensile: 600, yield: 355, elongation: 16, date: '2024-01-06' },
            { name: 'AZ31镁合金', tensile: 250, yield: 150, elongation: 12, date: '2024-01-05' },
            { name: 'C17200铍铜', tensile: 1100, yield: 1000, elongation: 5, date: '2024-01-04' },
            { name: 'Inconel 718', tensile: 1275, yield: 1034, elongation: 12, date: '2024-01-03' },
            { name: 'GH4169高温合金', tensile: 1280, yield: 1030, elongation: 12, date: '2024-01-02' },
            { name: 'ZL102铸造铝合金', tensile: 150, yield: 80, elongation: 4, date: '2024-01-01' },
            { name: 'T10碳素工具钢', tensile: 980, yield: 800, elongation: 10, date: '2023-12-31' },
            { name: 'Cr12MoV模具钢', tensile: 1600, yield: 1400, elongation: 8, date: '2023-12-30' },
            { name: 'W18Cr4V高速钢', tensile: 2000, yield: 1800, elongation: 5, date: '2023-12-29' },
            { name: 'QT500-7球墨铸铁', tensile: 500, yield: 320, elongation: 7, date: '2023-12-28' },
            { name: 'HT200灰铸铁', tensile: 200, yield: 150, elongation: 0.5, date: '2023-12-27' },
            { name: 'ZG230-450铸钢', tensile: 450, yield: 230, elongation: 22, date: '2023-12-26' },
            { name: 'TA2工业纯钛', tensile: 450, yield: 320, elongation: 20, date: '2023-12-25' },
            { name: 'TA9钛钯合金', tensile: 480, yield: 340, elongation: 18, date: '2023-12-24' },
            { name: 'TB6钛合金', tensile: 1100, yield: 1000, elongation: 8, date: '2023-12-23' },
            { name: 'TC11钛合金', tensile: 1030, yield: 900, elongation: 10, date: '2023-12-22' }
        ]
    },
    inorganic: {
        title: '无机非金属材料统计',
        totalMaterials: 1800,
        totalParameters: 9000,
        totalTypes: 90,
        recentUpdates: 28,
        pieData: [
            { name: '陶瓷', percent: 35, color: '#2563eb' },
            { name: '玻璃', percent: 25, color: '#06b6d4' },
            { name: '水泥', percent: 20, color: '#8b5cf6' },
            { name: '耐火材料', percent: 15, color: '#f59e0b' },
            { name: '其他', percent: 5, color: '#10b981' }
        ],
        barData: [
            { label: '1月', value: 100, height: 50, color: '#2563eb' },
            { label: '2月', value: 130, height: 65, color: '#06b6d4' },
            { label: '3月', value: 160, height: 80, color: '#8b5cf6' },
            { label: '4月', value: 140, height: 70, color: '#f59e0b' },
            { label: '5月', value: 180, height: 90, color: '#10b981' },
            { label: '6月', value: 200, height: 100, color: '#ef4444' }
        ],
        parameters: [
            { name: '抗压强度', value: 90 },
            { name: '抗折强度', value: 75 },
            { name: '耐热性', value: 95 },
            { name: '耐腐蚀性', value: 85 },
            { name: '绝缘性', value: 92 },
            { name: '耐磨性', value: 78 }
        ],
        materials: [
            { name: '氧化铝陶瓷', tensile: 380, yield: 300, elongation: 0.3, date: '2024-01-15' },
            { name: '氮化硅陶瓷', tensile: 850, yield: 750, elongation: 0.2, date: '2024-01-14' },
            { name: '碳化硅陶瓷', tensile: 450, yield: 400, elongation: 0.15, date: '2024-01-13' },
            { name: '氧化锆陶瓷', tensile: 900, yield: 800, elongation: 0.25, date: '2024-01-12' },
            { name: '石英玻璃', tensile: 50, yield: 40, elongation: 0.1, date: '2024-01-11' },
            { name: '硼硅酸盐玻璃', tensile: 70, yield: 55, elongation: 0.1, date: '2024-01-10' },
            { name: '钠钙玻璃', tensile: 45, yield: 35, elongation: 0.1, date: '2024-01-09' },
            { name: '钢化玻璃', tensile: 150, yield: 120, elongation: 0.1, date: '2024-01-08' },
            { name: '普通硅酸盐水泥', tensile: 42.5, yield: 32.5, elongation: 0.1, date: '2024-01-07' },
            { name: '矿渣硅酸盐水泥', tensile: 52.5, yield: 42.5, elongation: 0.1, date: '2024-01-06' },
            { name: '粉煤灰水泥', tensile: 42.5, yield: 32.5, elongation: 0.1, date: '2024-01-05' },
            { name: '高铝水泥', tensile: 62.5, yield: 52.5, elongation: 0.1, date: '2024-01-04' },
            { name: '耐火粘土砖', tensile: 25, yield: 20, elongation: 0.5, date: '2024-01-03' },
            { name: '高铝砖', tensile: 50, yield: 40, elongation: 0.3, date: '2024-01-02' },
            { name: '镁砖', tensile: 40, yield: 30, elongation: 0.4, date: '2024-01-01' },
            { name: '硅砖', tensile: 30, yield: 25, elongation: 0.5, date: '2023-12-31' },
            { name: '莫来石陶瓷', tensile: 250, yield: 200, elongation: 0.2, date: '2023-12-30' },
            { name: '堇青石陶瓷', tensile: 120, yield: 100, elongation: 0.3, date: '2023-12-29' },
            { name: '钛酸钡陶瓷', tensile: 80, yield: 60, elongation: 0.1, date: '2023-12-28' },
            { name: '压电陶瓷PZT', tensile: 70, yield: 50, elongation: 0.1, date: '2023-12-27' },
            { name: '铁氧体陶瓷', tensile: 60, yield: 45, elongation: 0.1, date: '2023-12-26' },
            { name: '光学玻璃K9', tensile: 65, yield: 50, elongation: 0.1, date: '2023-12-25' },
            { name: '低膨胀玻璃', tensile: 55, yield: 40, elongation: 0.1, date: '2023-12-24' },
            { name: '微晶玻璃', tensile: 200, yield: 150, elongation: 0.1, date: '2023-12-23' },
            { name: '泡沫玻璃', tensile: 8, yield: 6, elongation: 0.5, date: '2023-12-22' }
        ]
    },
    polymer: {
        title: '高分子材料统计',
        totalMaterials: 2200,
        totalParameters: 11000,
        totalTypes: 110,
        recentUpdates: 32,
        pieData: [
            { name: '塑料', percent: 40, color: '#2563eb' },
            { name: '橡胶', percent: 25, color: '#06b6d4' },
            { name: '纤维', percent: 20, color: '#8b5cf6' },
            { name: '胶粘剂', percent: 10, color: '#f59e0b' },
            { name: '其他', percent: 5, color: '#10b981' }
        ],
        barData: [
            { label: '1月', value: 120, height: 50, color: '#2563eb' },
            { label: '2月', value: 150, height: 62, color: '#06b6d4' },
            { label: '3月', value: 180, height: 75, color: '#8b5cf6' },
            { label: '4月', value: 160, height: 67, color: '#f59e0b' },
            { label: '5月', value: 200, height: 83, color: '#10b981' },
            { label: '6月', value: 220, height: 92, color: '#ef4444' }
        ],
        parameters: [
            { name: '拉伸强度', value: 70 },
            { name: '弹性模量', value: 65 },
            { name: '断裂伸长率', value: 85 },
            { name: '耐热性', value: 60 },
            { name: '耐老化性', value: 72 },
            { name: '加工性能', value: 88 }
        ],
        materials: [
            { name: '聚碳酸酯(PC)', tensile: 70, yield: 65, elongation: 110, date: '2024-01-15' },
            { name: '聚酰胺(PA6)', tensile: 80, yield: 75, elongation: 200, date: '2024-01-14' },
            { name: '聚丙烯(PP)', tensile: 35, yield: 30, elongation: 500, date: '2024-01-13' },
            { name: '聚乙烯(PE)', tensile: 25, yield: 20, elongation: 600, date: '2024-01-12' },
            { name: '聚苯乙烯(PS)', tensile: 50, yield: 45, elongation: 2, date: '2024-01-11' },
            { name: 'ABS树脂', tensile: 50, yield: 45, elongation: 20, date: '2024-01-10' },
            { name: '聚甲醛(POM)', tensile: 70, yield: 65, elongation: 40, date: '2024-01-09' },
            { name: '聚对苯二甲酸乙二醇酯(PET)', tensile: 55, yield: 50, elongation: 300, date: '2024-01-08' },
            { name: '聚氯乙烯(PVC)', tensile: 55, yield: 45, elongation: 50, date: '2024-01-07' },
            { name: '聚甲基丙烯酸甲酯(PMMA)', tensile: 70, yield: 65, elongation: 5, date: '2024-01-06' },
            { name: '聚四氟乙烯(PTFE)', tensile: 25, yield: 20, elongation: 300, date: '2024-01-05' },
            { name: '聚苯硫醚(PPS)', tensile: 80, yield: 75, elongation: 3, date: '2024-01-04' },
            { name: '聚醚醚酮(PEEK)', tensile: 100, yield: 95, elongation: 30, date: '2024-01-03' },
            { name: '天然橡胶', tensile: 25, yield: 20, elongation: 600, date: '2024-01-02' },
            { name: '丁苯橡胶', tensile: 20, yield: 15, elongation: 500, date: '2024-01-01' },
            { name: '丁腈橡胶', tensile: 25, yield: 20, elongation: 450, date: '2023-12-31' },
            { name: '氯丁橡胶', tensile: 25, yield: 20, elongation: 400, date: '2023-12-30' },
            { name: '三元乙丙橡胶', tensile: 20, yield: 15, elongation: 500, date: '2023-12-29' },
            { name: '硅橡胶', tensile: 10, yield: 8, elongation: 400, date: '2023-12-28' },
            { name: '氟橡胶', tensile: 15, yield: 12, elongation: 200, date: '2023-12-27' },
            { name: '涤纶纤维', tensile: 600, yield: 550, elongation: 30, date: '2023-12-26' },
            { name: '锦纶纤维', tensile: 800, yield: 700, elongation: 25, date: '2023-12-25' },
            { name: '腈纶纤维', tensile: 400, yield: 350, elongation: 20, date: '2023-12-24' },
            { name: '丙纶纤维', tensile: 500, yield: 450, elongation: 30, date: '2023-12-23' },
            { name: '维纶纤维', tensile: 450, yield: 400, elongation: 25, date: '2023-12-22' }
        ]
    },
    composite: {
        title: '复合材料统计',
        totalMaterials: 1500,
        totalParameters: 7500,
        totalTypes: 75,
        recentUpdates: 22,
        pieData: [
            { name: '碳纤维复合材料', percent: 45, color: '#2563eb' },
            { name: '玻璃纤维复合材料', percent: 30, color: '#06b6d4' },
            { name: '芳纶复合材料', percent: 15, color: '#8b5cf6' },
            { name: '其他', percent: 10, color: '#f59e0b' }
        ],
        barData: [
            { label: '1月', value: 80, height: 50, color: '#2563eb' },
            { label: '2月', value: 100, height: 62, color: '#06b6d4' },
            { label: '3月', value: 120, height: 75, color: '#8b5cf6' },
            { label: '4月', value: 110, height: 69, color: '#f59e0b' },
            { label: '5月', value: 140, height: 87, color: '#10b981' },
            { label: '6月', value: 160, height: 100, color: '#ef4444' }
        ],
        parameters: [
            { name: '抗拉强度', value: 95 },
            { name: '抗压强度', value: 85 },
            { name: '弯曲强度', value: 90 },
            { name: '层间剪切强度', value: 78 },
            { name: '疲劳强度', value: 82 },
            { name: '冲击强度', value: 75 }
        ],
        materials: [
            { name: '碳纤维/环氧树脂复合材料', tensile: 3500, yield: 3200, elongation: 1.5, date: '2024-01-15' },
            { name: '玻璃纤维/聚酯复合材料', tensile: 300, yield: 250, elongation: 2.5, date: '2024-01-14' },
            { name: '芳纶纤维/环氧树脂复合材料', tensile: 2800, yield: 2500, elongation: 2.0, date: '2024-01-13' },
            { name: '碳纤维/双马来酰亚胺复合材料', tensile: 2800, yield: 2500, elongation: 1.8, date: '2024-01-12' },
            { name: '玻璃纤维/环氧树脂复合材料', tensile: 500, yield: 450, elongation: 2.0, date: '2024-01-11' },
            { name: '碳纤维/酚醛树脂复合材料', tensile: 2000, yield: 1800, elongation: 1.2, date: '2024-01-10' },
            { name: '芳纶纤维/聚酰亚胺复合材料', tensile: 2500, yield: 2200, elongation: 1.5, date: '2024-01-09' },
            { name: '碳纤维/氰酸酯复合材料', tensile: 2600, yield: 2300, elongation: 1.6, date: '2024-01-08' },
            { name: '玻璃纤维/乙烯基酯复合材料', tensile: 400, yield: 350, elongation: 3.0, date: '2024-01-07' },
            { name: '碳纤维/聚醚醚酮复合材料', tensile: 3000, yield: 2700, elongation: 1.4, date: '2024-01-06' },
            { name: '芳纶纤维/环氧树脂复合材料', tensile: 2700, yield: 2400, elongation: 1.8, date: '2024-01-05' },
            { name: '碳纤维/聚苯硫醚复合材料', tensile: 2200, yield: 2000, elongation: 1.3, date: '2024-01-04' },
            { name: '玻璃纤维/环氧树脂复合材料', tensile: 450, yield: 400, elongation: 2.2, date: '2024-01-03' },
            { name: '碳纤维/聚砜复合材料', tensile: 2400, yield: 2100, elongation: 1.5, date: '2024-01-02' },
            { name: '芳纶纤维/酚醛树脂复合材料', tensile: 2300, yield: 2000, elongation: 1.6, date: '2024-01-01' },
            { name: '碳纤维/聚酰胺复合材料', tensile: 2100, yield: 1900, elongation: 1.7, date: '2023-12-31' },
            { name: '玻璃纤维/聚丙烯复合材料', tensile: 200, yield: 180, elongation: 3.5, date: '2023-12-30' },
            { name: '碳纤维/聚乙烯复合材料', tensile: 1800, yield: 1600, elongation: 2.0, date: '2023-12-29' },
            { name: '芳纶纤维/聚酯复合材料', tensile: 2200, yield: 1900, elongation: 1.9, date: '2023-12-28' },
            { name: '碳纤维/聚丙烯复合材料', tensile: 1500, yield: 1300, elongation: 2.5, date: '2023-12-27' },
            { name: '玻璃纤维/尼龙复合材料', tensile: 250, yield: 220, elongation: 3.0, date: '2023-12-26' },
            { name: '碳纤维/ABS复合材料', tensile: 1200, yield: 1000, elongation: 2.8, date: '2023-12-25' },
            { name: '芳纶纤维/聚碳酸酯复合材料', tensile: 2000, yield: 1700, elongation: 2.0, date: '2023-12-24' },
            { name: '碳纤维/聚氯乙烯复合材料', tensile: 1000, yield: 850, elongation: 3.0, date: '2023-12-23' },
            { name: '玻璃纤维/聚碳酸酯复合材料', tensile: 180, yield: 150, elongation: 4.0, date: '2023-12-22' }
        ]
    },
    nano: {
        title: '纳米材料统计',
        totalMaterials: 1200,
        totalParameters: 6000,
        totalTypes: 60,
        recentUpdates: 18,
        pieData: [
            { name: '纳米颗粒', percent: 35, color: '#2563eb' },
            { name: '纳米管', percent: 30, color: '#06b6d4' },
            { name: '纳米线', percent: 20, color: '#8b5cf6' },
            { name: '纳米薄膜', percent: 15, color: '#f59e0b' }
        ],
        barData: [
            { label: '1月', value: 60, height: 50, color: '#2563eb' },
            { label: '2月', value: 80, height: 67, color: '#06b6d4' },
            { label: '3月', value: 100, height: 83, color: '#8b5cf6' },
            { label: '4月', value: 90, height: 75, color: '#f59e0b' },
            { label: '5月', value: 110, height: 92, color: '#10b981' },
            { label: '6月', value: 120, height: 100, color: '#ef4444' }
        ],
        parameters: [
            { name: '比表面积', value: 95 },
            { name: '量子效应', value: 88 },
            { name: '表面活性', value: 92 },
            { name: '催化性能', value: 85 },
            { name: '光学性能', value: 80 },
            { name: '电学性能', value: 78 }
        ],
        materials: [
            { name: '单壁碳纳米管', tensile: 50000, yield: 45000, elongation: 15, date: '2024-01-15' },
            { name: '多壁碳纳米管', tensile: 30000, yield: 27000, elongation: 12, date: '2024-01-14' },
            { name: '石墨烯', tensile: 130000, yield: 120000, elongation: 25, date: '2024-01-13' },
            { name: '纳米氧化锌', tensile: 100, yield: 80, elongation: 5, date: '2024-01-12' },
            { name: '纳米二氧化钛', tensile: 80, yield: 60, elongation: 3, date: '2024-01-11' },
            { name: '纳米氧化铝', tensile: 150, yield: 120, elongation: 4, date: '2024-01-10' },
            { name: '纳米氧化硅', tensile: 120, yield: 100, elongation: 3, date: '2024-01-09' },
            { name: '纳米银颗粒', tensile: 200, yield: 180, elongation: 5, date: '2024-01-08' },
            { name: '纳米金颗粒', tensile: 180, yield: 160, elongation: 4, date: '2024-01-07' },
            { name: '纳米铜颗粒', tensile: 220, yield: 200, elongation: 6, date: '2024-01-06' },
            { name: '纳米氧化铁', tensile: 90, yield: 70, elongation: 3, date: '2024-01-05' },
            { name: '纳米氧化锆', tensile: 160, yield: 140, elongation: 4, date: '2024-01-04' },
            { name: '纳米碳化硅', tensile: 250, yield: 220, elongation: 5, date: '2024-01-03' },
            { name: '纳米氮化硅', tensile: 200, yield: 180, elongation: 4, date: '2024-01-02' },
            { name: '纳米氮化硼', tensile: 180, yield: 160, elongation: 4, date: '2024-01-01' },
            { name: '纳米氧化镁', tensile: 110, yield: 90, elongation: 3, date: '2023-12-31' },
            { name: '纳米氧化钙', tensile: 100, yield: 80, elongation: 3, date: '2023-12-30' },
            { name: '纳米氧化钇', tensile: 140, yield: 120, elongation: 4, date: '2023-12-29' },
            { name: '纳米氧化铈', tensile: 130, yield: 110, elongation: 4, date: '2023-12-28' },
            { name: '纳米氧化镧', tensile: 120, yield: 100, elongation: 3, date: '2023-12-27' },
            { name: '纳米氧化钕', tensile: 125, yield: 105, elongation: 4, date: '2023-12-26' },
            { name: '纳米氧化钐', tensile: 115, yield: 95, elongation: 3, date: '2023-12-25' },
            { name: '纳米氧化铕', tensile: 110, yield: 90, elongation: 3, date: '2023-12-24' },
            { name: '纳米氧化钆', tensile: 118, yield: 98, elongation: 4, date: '2023-12-23' },
            { name: '纳米氧化铽', tensile: 112, yield: 92, elongation: 3, date: '2023-12-22' }
        ]
    },
    functional: {
        title: '功能材料统计',
        totalMaterials: 800,
        totalParameters: 4000,
        totalTypes: 45,
        recentUpdates: 12,
        pieData: [
            { name: '磁性材料', percent: 30, color: '#2563eb' },
            { name: '超导材料', percent: 25, color: '#06b6d4' },
            { name: '智能材料', percent: 20, color: '#8b5cf6' },
            { name: '能源材料', percent: 15, color: '#f59e0b' },
            { name: '其他', percent: 10, color: '#10b981' }
        ],
        barData: [
            { label: '1月', value: 40, height: 50, color: '#2563eb' },
            { label: '2月', value: 50, height: 62, color: '#06b6d4' },
            { label: '3月', value: 60, height: 75, color: '#8b5cf6' },
            { label: '4月', value: 55, height: 69, color: '#f59e0b' },
            { label: '5月', value: 70, height: 87, color: '#10b981' },
            { label: '6月', value: 80, height: 100, color: '#ef4444' }
        ],
        parameters: [
            { name: '功能特性', value: 90 },
            { name: '响应速度', value: 85 },
            { name: '稳定性', value: 80 },
            { name: '可逆性', value: 75 },
            { name: '耐久性', value: 70 },
            { name: '效率', value: 88 }
        ],
        materials: [
            { name: '钕铁硼磁体', tensile: 800, yield: 750, elongation: 2, date: '2024-01-15' },
            { name: '钐钴磁体', tensile: 600, yield: 550, elongation: 1.5, date: '2024-01-14' },
            { name: '铝镍钴磁体', tensile: 400, yield: 350, elongation: 3, date: '2024-01-13' },
            { name: '铁氧体磁体', tensile: 300, yield: 250, elongation: 2, date: '2024-01-12' },
            { name: 'YBCO高温超导体', tensile: 120, yield: 100, elongation: 0.5, date: '2024-01-11' },
            { name: 'BSCCO高温超导体', tensile: 100, yield: 80, elongation: 0.4, date: '2024-01-10' },
            { name: 'NbTi低温超导体', tensile: 800, yield: 700, elongation: 5, date: '2024-01-09' },
            { name: 'Nb3Sn低温超导体', tensile: 600, yield: 500, elongation: 3, date: '2024-01-08' },
            { name: '形状记忆合金NiTi', tensile: 800, yield: 700, elongation: 8, date: '2024-01-07' },
            { name: '压电陶瓷PZT-5', tensile: 70, yield: 50, elongation: 0.1, date: '2024-01-06' },
            { name: '压电陶瓷PZT-4', tensile: 65, yield: 45, elongation: 0.1, date: '2024-01-05' },
            { name: '锂离子电池正极材料NCM', tensile: 180, yield: 150, elongation: 2, date: '2024-01-04' },
            { name: '锂离子电池正极材料LFP', tensile: 150, yield: 120, elongation: 1.5, date: '2024-01-03' },
            { name: '锂离子电池负极材料石墨', tensile: 30, yield: 25, elongation: 10, date: '2024-01-02' },
            { name: '锂离子电池负极材料硅', tensile: 50, yield: 40, elongation: 5, date: '2024-01-01' },
            { name: '燃料电池催化剂Pt/C', tensile: 200, yield: 180, elongation: 3, date: '2023-12-31' },
            { name: '太阳能电池材料硅', tensile: 7, yield: 5, elongation: 10, date: '2023-12-30' },
            { name: '太阳能电池材料钙钛矿', tensile: 50, yield: 40, elongation: 2, date: '2023-12-29' },
            { name: '热电材料Bi2Te3', tensile: 40, yield: 30, elongation: 2, date: '2023-12-28' },
            { name: '热电材料PbTe', tensile: 35, yield: 25, elongation: 2, date: '2023-12-27' },
            { name: '磁致伸缩材料Terfenol-D', tensile: 500, yield: 450, elongation: 0.5, date: '2023-12-26' },
            { name: '电致变色材料WO3', tensile: 80, yield: 60, elongation: 0.5, date: '2023-12-25' },
            { name: '光致变色材料Spiropyran', tensile: 60, yield: 45, elongation: 5, date: '2023-12-24' },
            { name: '自修复材料微胶囊', tensile: 40, yield: 30, elongation: 10, date: '2023-12-23' },
            { name: '智能水凝胶', tensile: 10, yield: 8, elongation: 500, date: '2023-12-22' }
        ]
    },
    creep: {
        title: '蠕变性质统计',
        totalMaterials: 13,
        totalParameters: 156,
        totalTypes: 8,
        recentUpdates: 5,
        pieData: [
            { name: 'Ti-Nb合金', percent: 35, color: '#2563eb' },
            { name: 'Ti-Zr合金', percent: 30, color: '#06b6d4' },
            { name: 'Ti-Mo合金', percent: 25, color: '#8b5cf6' },
            { name: '其他', percent: 10, color: '#f59e0b' }
        ],
        barData: [
            { label: '1月', value: 3, height: 60, color: '#2563eb' },
            { label: '2月', value: 4, height: 80, color: '#06b6d4' },
            { label: '3月', value: 3, height: 60, color: '#8b5cf6' },
            { label: '4月', value: 2, height: 40, color: '#f59e0b' },
            { label: '5月', value: 1, height: 20, color: '#10b981' },
            { label: '6月', value: 0, height: 0, color: '#ef4444' }
        ],
        parameters: [
            { name: '杨氏模量', value: 142 },
            { name: '堆垛层错能', value: 659 },
            { name: '扩散系数', value: 3.39 },
            { name: '剪切模量', value: 55.9 },
            { name: '相对蠕变速率', value: 1.11 },
            { name: '体模量', value: 106 },
            { name: '基面滑移层错能', value: 666 },
            { name: '柱面滑移层错能', value: 540 },
            { name: '锥面滑移层错能', value: 1192 }
        ],
        materials: [
            {
                id: 1,
                alloy: 'Ti-Nb',
                content: '0.5',
                youngsModulus: 142.17,
                stackingFaultEnergy: 661.08,
                diffusionCoefficient: 3.44,
                shearModulus: 53.35,
                relativeCreepRate: 1.13,
                binaryAlloy: 'Ti-Nb',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.24,
                prismaticSFE: 540.25,
                pyramidalSFE: 1192.29,
                diffusionCoefficient2: 8.40,
                date: '2024-01-15'
            },
            {
                id: 3,
                alloy: 'Ti-Nb',
                content: '11',
                youngsModulus: 142.205,
                stackingFaultEnergy: 659.2281548269791,
                diffusionCoefficient: 3.3915632621909,
                shearModulus: 55.93707619647803,
                relativeCreepRate: 1.1077205818402,
                binaryAlloy: 'Ti-Nb',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-14'
            },
            {
                id: 4,
                alloy: 'Ti-Zr',
                content: '12',
                youngsModulus: 142.135,
                stackingFaultEnergy: 659.03157893071,
                diffusionCoefficient: 2.7722009005521,
                shearModulus: 55.93107619647803,
                relativeCreepRate: 9.0555403465510,
                binaryAlloy: 'Ti-Zr',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-13'
            },
            {
                id: 5,
                alloy: 'Ti-Mo',
                content: '13',
                youngsModulus: 142.065,
                stackingFaultEnergy: 658.8350030344409,
                diffusionCoefficient: 2.2659455946746,
                shearModulus: 55.92507619647803,
                relativeCreepRate: 7.4028445578879,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-12'
            },
            {
                id: 6,
                alloy: 'Ti-Mo',
                content: '14',
                youngsModulus: 141.995,
                stackingFaultEnergy: 658.6384271381718,
                diffusionCoefficient: 1.8521418981585,
                shearModulus: 55.91907619647803,
                relativeCreepRate: 6.0517782560781,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-11'
            },
            {
                id: 7,
                alloy: 'Ti-Mo',
                content: '15',
                youngsModulus: 141.925,
                stackingFaultEnergy: 658.4418512419027,
                diffusionCoefficient: 1.5139064322534,
                shearModulus: 55.91307619647803,
                relativeCreepRate: 4.9472914847756,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-10'
            },
            {
                id: 8,
                alloy: 'Ti-Mo',
                content: '16',
                youngsModulus: 141.855,
                stackingFaultEnergy: 658.2452753456336,
                diffusionCoefficient: 1.2374390363379,
                shearModulus: 55.90707619647803,
                relativeCreepRate: 4.0443814276855,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-09'
            },
            {
                id: 9,
                alloy: 'Ti-Mo',
                content: '17',
                youngsModulus: 141.785,
                stackingFaultEnergy: 658.0486994493644,
                diffusionCoefficient: 1.01145971509853,
                shearModulus: 55.90107619647803,
                relativeCreepRate: 3.3062587004294,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-08'
            },
            {
                id: 10,
                alloy: 'Ti-Mo',
                content: '18',
                youngsModulus: 141.715,
                stackingFaultEnergy: 657.8521235530955,
                diffusionCoefficient: 8.2674840959827,
                shearModulus: 55.89507619647803,
                relativeCreepRate: 2.70284831506611,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-07'
            },
            {
                id: 11,
                alloy: 'Ti-Mo',
                content: '19',
                youngsModulus: 141.645,
                stackingFaultEnergy: 657.6555476568263,
                diffusionCoefficient: 6.7576881468453,
                shearModulus: 55.88907619647803,
                relativeCreepRate: 2.2095642353749,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-06'
            },
            {
                id: 12,
                alloy: 'Ti-Mo',
                content: '20',
                youngsModulus: 141.575,
                stackingFaultEnergy: 657.4589717605572,
                diffusionCoefficient: 5.5236089431612,
                shearModulus: 55.88307619647803,
                relativeCreepRate: 1.8063075892635,
                binaryAlloy: 'Ti-Mo',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-05'
            },
            {
                id: 13,
                alloy: 'Ti-Nb',
                content: '0.5',
                youngsModulus: 142.17,
                stackingFaultEnergy: 661.079539384165,
                diffusionCoefficient: 3.4429865929669,
                shearModulus: 53.3460509442375,
                relativeCreepRate: 1.1346018243228,
                binaryAlloy: 'Ti-Nb',
                bulkModulus: 106,
                shearModulus2: 56,
                youngsModulus2: 143,
                basalSFE: 666.2351172141073,
                prismaticSFE: 540.2544797910341,
                pyramidalSFE: 1192.28552672846,
                diffusionCoefficient2: 8.40118184162671,
                date: '2024-01-04'
            }
        ]
    },
    electronic: {
        title: '电子结构统计',
        totalMaterials: 11,
        totalParameters: 77,
        totalTypes: 2,
        recentUpdates: 3,
        pieData: [
            { name: 'Ti36H', percent: 50, color: '#2563eb' },
            { name: 'Ti35AlH', percent: 50, color: '#06b6d4' }
        ],
        barData: [
            { label: '1月', value: 2, height: 50, color: '#2563eb' },
            { label: '2月', value: 3, height: 75, color: '#06b6d4' },
            { label: '3月', value: 2, height: 50, color: '#8b5cf6' },
            { label: '4月', value: 2, height: 50, color: '#f59e0b' },
            { label: '5月', value: 1, height: 25, color: '#10b981' },
            { label: '6月', value: 1, height: 25, color: '#ef4444' }
        ],
        parameters: [
            { name: '扩散能垒', value: 85 },
            { name: '扩散系数', value: 78 },
            { name: '温度范围', value: 92 },
            { name: '合金类型', value: 100 },
            { name: '数据完整性', value: 88 },
            { name: '计算精度', value: 95 }
        ],
        materials: [
            {
                id: 0,
                alloy: '',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: '',
                diffusionCoefficient1: '',
                diffusionCoefficient2: '',
                diffusionCoefficient3: '',
                diffusionType: '',
                date: '2024-01-15'
            },
            {
                id: 1,
                alloy: '',
                diffusionBarrier1: '扩散能垒 (eV)',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: '',
                diffusionCoefficient1: '',
                diffusionCoefficient2: '',
                diffusionCoefficient3: '',
                diffusionType: '',
                date: '2024-01-14'
            },
            {
                id: 3,
                alloy: 'Ti36H',
                diffusionBarrier1: 0.685,
                diffusionBarrier2: 0.539,
                diffusionBarrier3: 0.096,
                temperature: 1000,
                diffusionCoefficient1: '1.93×10⁻¹¹',
                diffusionCoefficient2: '6.26×10⁻¹¹',
                diffusionCoefficient3: '4.49×10⁻⁹',
                diffusionType: '',
                date: '2024-01-13'
            },
            {
                id: 4,
                alloy: 'Ti36H',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 900,
                diffusionCoefficient1: '7.97×10⁻¹²',
                diffusionCoefficient2: '3.13×10⁻¹¹',
                diffusionCoefficient3: '3.96×10⁻⁹',
                diffusionType: '',
                date: '2024-01-12'
            },
            {
                id: 5,
                alloy: 'Ti36H',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 800,
                diffusionCoefficient1: '2.64×10⁻¹²',
                diffusionCoefficient2: '1.31×10⁻¹¹',
                diffusionCoefficient3: '3.39×10⁻⁹',
                diffusionType: '',
                date: '2024-01-11'
            },
            {
                id: 6,
                alloy: 'Ti36H',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 700,
                diffusionCoefficient1: '6.39×10⁻¹³',
                diffusionCoefficient2: '4.29×10⁻¹²',
                diffusionCoefficient3: '2.78×10⁻⁹',
                diffusionType: '',
                date: '2024-01-10'
            },
            {
                id: 7,
                alloy: 'Ti36H',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 600,
                diffusionCoefficient1: '9.62×10⁻¹⁴',
                diffusionCoefficient2: '9.68×10⁻¹³',
                diffusionCoefficient3: '2.13×10⁻⁹',
                diffusionType: '',
                date: '2024-01-09'
            },
            {
                id: 8,
                alloy: 'Ti36H',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 500,
                diffusionCoefficient1: '6.8×10⁻¹⁵',
                diffusionCoefficient2: '1.2×10⁻¹³',
                diffusionCoefficient3: '1.47×10⁻⁹',
                diffusionType: '',
                date: '2024-01-08'
            },
            {
                id: 9,
                alloy: 'Ti35AlH',
                diffusionBarrier1: 0.991,
                diffusionBarrier2: 0.831,
                diffusionBarrier3: 0.109,
                temperature: 1000,
                diffusionCoefficient1: '5.51×10⁻¹³',
                diffusionCoefficient2: '2.1×10⁻¹²',
                diffusionCoefficient3: '3.84×10⁻⁹',
                diffusionType: '',
                date: '2024-01-07'
            },
            {
                id: 10,
                alloy: 'Ti35AlH',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 900,
                diffusionCoefficient1: '1.54×10⁻¹³',
                diffusionCoefficient2: '7.21×10⁻¹³',
                diffusionCoefficient3: '3.33×10⁻⁹',
                diffusionType: '',
                date: '2024-01-06'
            },
            {
                id: 11,
                alloy: 'Ti35AlH',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 800,
                diffusionCoefficient1: '3.11×10⁻¹⁴',
                diffusionCoefficient2: '1.89×10⁻¹³',
                diffusionCoefficient3: '2.8×10⁻⁹',
                diffusionType: '',
                date: '2024-01-05'
            },
            {
                id: 12,
                alloy: 'Ti35AlH',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 700,
                diffusionCoefficient1: '3.99×10⁻¹⁵',
                diffusionCoefficient2: '3.37×10⁻¹⁴',
                diffusionCoefficient3: '2.23×10⁻⁹',
                diffusionType: '',
                date: '2024-01-04'
            },
            {
                id: 13,
                alloy: 'Ti35AlH',
                diffusionBarrier1: '',
                diffusionBarrier2: '',
                diffusionBarrier3: '',
                temperature: 600,
                diffusionCoefficient1: '2.58×10⁻¹⁶',
                diffusionCoefficient2: '3.4×10⁻¹⁵',
                diffusionCoefficient3: '1.65×10⁻⁹',
                diffusionType: '',
                date: '2024-01-03'
            }
        ]
    },
    elastic: {
        title: '弹性性质(含H元素)统计',
        totalMaterials: 12,
        totalParameters: 168,
        totalTypes: 12,
        recentUpdates: 5,
        pieData: [
            { name: 'Ti35AlH', percent: 8, color: '#2563eb' },
            { name: 'Ti35SH', percent: 8, color: '#06b6d4' },
            { name: 'Ti35SeH', percent: 8, color: '#8b5cf6' },
            { name: 'Ti36H', percent: 8, color: '#f59e0b' },
            { name: 'Ti35VH', percent: 8, color: '#10b981' },
            { name: 'Ti35CrH', percent: 8, color: '#ef4444' },
            { name: 'Ti35MnH', percent: 8, color: '#2563eb' },
            { name: 'Ti35FeH', percent: 8, color: '#06b6d4' },
            { name: 'Ti35CoH', percent: 8, color: '#8b5cf6' },
            { name: 'Ti35NH', percent: 8, color: '#f59e0b' },
            { name: 'Ti35CuH', percent: 8, color: '#10b981' }
        ],
        barData: [
            { label: '1月', value: 2, height: 50, color: '#2563eb' },
            { label: '2月', value: 3, height: 75, color: '#06b6d4' },
            { label: '3月', value: 2, height: 50, color: '#8b5cf6' },
            { label: '4月', value: 2, height: 50, color: '#f59e0b' },
            { label: '5月', value: 2, height: 50, color: '#10b981' },
            { label: '6月', value: 1, height: 25, color: '#ef4444' }
        ],
        parameters: [
            { name: 'C11', value: 88 },
            { name: 'C33', value: 85 },
            { name: 'C44', value: 82 },
            { name: '体模量', value: 90 },
            { name: '剪切模量', value: 87 },
            { name: '杨氏模量', value: 92 }
        ],
        materials: [
            {
                id: 1,
                alloy: 'Ti35AlH',
                c11: 170.4558,
                c33: 166.15925,
                c44: 43.53455,
                c12: 46.5,
                c13: 59.1,
                c66: 61.9779,
                bv: 92.94120555555554,
                br: 92.8822350324777,
                bi: 92.916729290165,
                gv: 52.63412333333334,
                gr: 48.47619009147,
                gh: 51.0254161212402,
                e: 129.39112857666,
                v: 0.2979084516972,
                bg: 1.82089874638973,
                cauchy: 0.022918482995,
                gb: 0.5491521442074,
                date: '2024-01-15'
            },
            {
                id: 3,
                alloy: 'Ti35SH',
                c11: 186.0543,
                c33: 167.3914,
                c44: 48.4523,
                c12: 54.30485,
                c13: 68.77372,
                c66: 65.97475,
                bv: 101.7493977777778,
                br: 101.7264108672106,
                bi: 101.7379073734842,
                gv: 56.30545666666667,
                gr: 54.184551891345,
                gh: 55.109787575006,
                e: 140.403037144448,
                v: 0.270562092375,
                bg: 1.84084988175309,
                cauchy: 0.041791014812,
                gb: 0.5416840214038,
                date: '2024-01-14'
            },
            {
                id: 4,
                alloy: 'Ti35SeH',
                c11: 176.32665,
                c33: 164.52595,
                c44: 46.88992,
                c12: 45.09732,
                c13: 61.9703,
                c66: 65.614165,
                bv: 94.98367666666667,
                br: 94.986836949158,
                bi: 94.9852601618713,
                gv: 56.1035,
                gr: 52.9399710418388,
                gh: 54.0221034768944,
                e: 136.25975179968,
                v: 0.2609000773594,
                bg: 1.780809936909,
                cauchy: 0.132281905785,
                gb: 0.5680575615875,
                date: '2024-01-13'
            },
            {
                id: 5,
                alloy: 'Ti36H',
                c11: 179.95,
                c33: 164.6,
                c44: 46.5,
                c12: 47.1,
                c13: 60.5,
                c66: 66.2,
                bv: 95.53333333333333,
                br: 95.5317536971561,
                bi: 95.5325467572742,
                gv: 56.34,
                gr: 54.3018676383686,
                gh: 53.3220434168144,
                e: 137.1175029663,
                v: 0.2529290033594,
                bg: 1.726779926487505,
                cauchy: 0.106394272885,
                gb: 0.57811257573891,
                date: '2024-01-12'
            },
            {
                id: 6,
                alloy: 'Ti35VH',
                c11: 189.98255,
                c33: 171.08805,
                c44: 47.38625,
                c12: 51.27565,
                c13: 68.72308,
                c66: 68.8345,
                bv: 102.0549744444444,
                br: 102.058703505416,
                bi: 102.056823774743,
                gv: 57.01381266666667,
                gr: 54.1379028513573,
                gh: 55.5756887459012,
                e: 141.11204456848,
                v: 0.2699442073832,
                bg: 1.88280117034051,
                cauchy: 0.0275264836881,
                gb: 0.544579258416,
                date: '2024-01-11'
            },
            {
                id: 7,
                alloy: 'Ti35CrH',
                c11: 178.90455,
                c33: 171.44815,
                c44: 45.2568,
                c12: 52.55072,
                c13: 64.10865,
                c66: 63.178915,
                bv: 98.97703222222222,
                br: 98.986273299399,
                bi: 98.971157807675,
                gv: 53.97038333333333,
                gr: 51.0488537773645,
                gh: 52.5996370053489,
                e: 133.662921307821,
                v: 0.27458714730204,
                bg: 1.8041799568811,
                cauchy: 0.05449220943,
                gb: 0.5305549797244,
                date: '2024-01-10'
            },
            {
                id: 8,
                alloy: 'Ti35MnH',
                c11: 175.3445,
                c33: 168.27365,
                c44: 43.1193,
                c12: 54.84208,
                c13: 61.7996,
                c66: 60.35121,
                bv: 97.04948777777778,
                br: 97.048875267043,
                bi: 97.0418776812659,
                gv: 51.02981666666667,
                gr: 50.298167112163,
                gh: 126.848545711679,
                e: 126.848545711679,
                v: 0.2793071163836,
                bg: 1.90287434759752,
                cauchy: 0.0896331907138,
                gb: 0.516177491384,
                date: '2024-01-09'
            },
            {
                id: 9,
                alloy: 'Ti35FeH',
                c11: 179.4935,
                c33: 162.1,
                c44: 45.50845,
                c12: 58.44222,
                c13: 64.2188,
                c66: 60.528065,
                bv: 99.42539333333333,
                br: 99.4330067347182,
                bi: 99.3792303262577,
                gv: 52.589345,
                gr: 50.5217688296445,
                gh: 51.5555851498223,
                e: 131.08486297679,
                v: 0.278305708832,
                bg: 1.927614791503,
                cauchy: 0.098963923618,
                gb: 0.518779816220,
                date: '2024-01-08'
            },
            {
                id: 10,
                alloy: 'Ti35CoH',
                c11: 183.4256,
                c33: 161.1898,
                c44: 47.67445,
                c12: 61.99295,
                c13: 68.75728,
                c66: 60.73825,
                bv: 103.5192244444444,
                br: 103.374773386488,
                bi: 103.446988015471,
                gv: 53.05077666666667,
                gr: 52.1615971578,
                gh: 52.5983236123234,
                e: 134.92817267964,
                v: 0.262615184279,
                bg: 1.9867531839727,
                cauchy: 0.10582403273,
                gb: 0.5084588722357,
                date: '2024-01-07'
            },
            {
                id: 11,
                alloy: 'Ti35NH',
                c11: 180.49815,
                c33: 162.2667,
                c44: 45.52755,
                c12: 65.4357,
                c13: 68.78795,
                c66: 57.52125,
                bv: 103.6864866666667,
                br: 103.55122356331,
                bi: 103.624949501149,
                gv: 50.93420500000001,
                gr: 48.67220107496707,
                gh: 50.303813704354,
                e: 129.89583120721,
                v: 0.291085729578,
                bg: 2.0399918700731,
                cauchy: 0.1526380308989,
                gb: 0.4854838935521,
                date: '2024-01-06'
            },
            {
                id: 12,
                alloy: 'Ti35CuH',
                c11: 194.5984,
                c33: 186.6912,
                c44: 42.68015,
                c12: 66.34365,
                c13: 77.3576,
                c66: 64.127375,
                bv: 113.1117444444444,
                br: 113.105727055682,
                bi: 113.10843575083,
                gv: 53.55681166666666,
                gr: 48.27956432790721,
                gh: 51.4182299728964,
                e: 133.952098754082,
                v: 0.302613898531,
                bg: 2.19977356878576,
                cauchy: 0.176573630775,
                gb: 0.4545923484765,
                date: '2024-01-05'
            }
        ]
    }
};

// 当前选中的统计类型
let currentType = 'all';
// 当前页码
let currentPage = 1;
// 每页显示数量
const pageSize = 10;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 绑定导航项点击事件
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            switchStatistics(type);
        });
    });

    // 初始化显示全站统计
    updateStatistics('all');
});

// 切换统计类型
function switchStatistics(type) {
    currentType = type;
    currentPage = 1; // 重置页码

    // 更新导航激活状态
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-type') === type) {
            item.classList.add('active');
        }
    });

    // 更新统计数据
    updateStatistics(type);
}

// 更新统计数据
function updateStatistics(type) {
    const data = statisticsData[type];
    if (!data) return;

    // 更新标题
    document.getElementById('pageTitle').textContent = data.title;

    // 更新统计卡片
    animateNumber('totalMaterials', data.totalMaterials);
    animateNumber('totalParameters', data.totalParameters);
    animateNumber('totalTypes', data.totalTypes);
    animateNumber('recentUpdates', data.recentUpdates);

    // 更新饼图
    updatePieChart(data.pieData);

    // 更新柱状图
    updateBarChart(data.barData);

    // 更新参数分布
    updateParameters(data.parameters);

    // 更新表格表头
    updateTableHeader(type);

    // 更新材料表格
    updateMaterialTable(data.materials || []);
}

// 更新表格表头
function updateTableHeader(type) {
    const tableHead = document.getElementById('materialTableHead');
    if (!tableHead) return;

    if (type === 'creep') {
        tableHead.innerHTML = `
            <tr>
                <th>行号</th>
                <th>合金成分</th>
                <th>合金元素含量 at.%</th>
                <th>杨氏模量</th>
                <th>堆垛层错能</th>
                <th>扩散系数</th>
                <th>剪切模量</th>
                <th>相对蠕变速率</th>
                <th>二元合金蠕变相关…</th>
                <th>体模量</th>
                <th>剪切模量</th>
                <th>杨氏模量</th>
                <th>基面滑移层错能</th>
                <th>柱面滑移层错能</th>
                <th>锥面滑移层错能</th>
                <th>扩散系数</th>
                <th>更新时间</th>
                <th>操作</th>
            </tr>
        `;
    } else if (type === 'electronic') {
        tableHead.innerHTML = `
            <tr>
                <th>行号</th>
                <th>合金成分</th>
                <th>扩散能垒 (eV)</th>
                <th>扩散能垒 (eV)</th>
                <th>扩散能垒 (eV)</th>
                <th>T (K)</th>
                <th>扩散系数 (m²/s)</th>
                <th>扩散系数 (m²/s)</th>
                <th>扩散系数 (m²/s)</th>
                <th>扩散类型</th>
                <th>更新时间</th>
                <th>操作</th>
            </tr>
        `;
    } else if (type === 'elastic') {
        tableHead.innerHTML = `
            <tr>
                <th>行号</th>
                <th>合金成分</th>
                <th>C11(GPa)</th>
                <th>C33(GPa)</th>
                <th>C44(GPa)</th>
                <th>C12(GPa)</th>
                <th>C13(GPa)</th>
                <th>C66(GPa)</th>
                <th>BV（体模量）</th>
                <th>BR（体模量）</th>
                <th>BI（体模量）</th>
                <th>GV（剪切模量）</th>
                <th>GR（剪切模量）</th>
                <th>GH（剪切模量）</th>
                <th>E（杨氏模量）</th>
                <th>v（泊松比）</th>
                <th>B/G</th>
                <th>柯西压力</th>
                <th>G/B</th>
                <th>更新时间</th>
                <th>操作</th>
            </tr>
        `;
    } else {
        tableHead.innerHTML = `
            <tr>
                <th>材料名称</th>
                <th>分类</th>
                <th>抗拉强度 (MPa)</th>
                <th>屈服强度 (MPa)</th>
                <th>延伸率 (%)</th>
                <th>更新时间</th>
                <th>操作</th>
            </tr>
        `;
    }
}

// 数字动画
function animateNumber(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const start = 0;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// 更新饼图
function updatePieChart(data) {
    const pieChartSvg = document.getElementById('pieChartSvg');
    const pieLegend = document.getElementById('pieLegend');
    const pieCenterValue = document.getElementById('pieCenterValue');

    if (!pieChartSvg || !pieLegend) return;

    // 计算中心点
    const cx = 100;
    const cy = 100;
    const radius = 80;
    const innerRadius = 50;

    let currentAngle = 0;
    let paths = '';

    data.forEach((item, index) => {
        const angle = (item.percent / 100) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;

        // 计算外圆弧的起点和终点
        const x1 = cx + radius * Math.cos(startAngle * Math.PI / 180);
        const y1 = cy + radius * Math.sin(startAngle * Math.PI / 180);
        const x2 = cx + radius * Math.cos(endAngle * Math.PI / 180);
        const y2 = cy + radius * Math.sin(endAngle * Math.PI / 180);

        // 计算内圆弧的起点和终点
        const x3 = cx + innerRadius * Math.cos(endAngle * Math.PI / 180);
        const y3 = cy + innerRadius * Math.sin(endAngle * Math.PI / 180);
        const x4 = cx + innerRadius * Math.cos(startAngle * Math.PI / 180);
        const y4 = cy + innerRadius * Math.sin(startAngle * Math.PI / 180);

        const largeArcFlag = angle > 180 ? 1 : 0;

        // 创建环形扇形路径
        const pathData = `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
            L ${x3} ${y3}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
            Z
        `;

        paths += `
            <path class="pie-slice"
                  d="${pathData}"
                  fill="${item.color}"
                  data-name="${item.name}"
                  data-percent="${item.percent}"
                  data-value="${item.value || 0}">
                <title>${item.name}: ${item.percent}%</title>
            </path>
        `;

        currentAngle = endAngle;
    });

    pieChartSvg.innerHTML = paths;

    // 更新中心文字
    pieCenterValue.textContent = '100%';

    // 更新图例
    let legendHTML = '';
    data.forEach(item => {
        legendHTML += `
            <div class="legend-item">
                <span class="legend-color" style="background: ${item.color};"></span>
                <span>${item.name} (${item.percent}%)</span>
            </div>
        `;
    });
    pieLegend.innerHTML = legendHTML;

    // 添加悬停效果
    const slices = pieChartSvg.querySelectorAll('.pie-slice');
    slices.forEach(slice => {
        slice.addEventListener('mouseenter', function() {
            const name = this.getAttribute('data-name');
            const percent = this.getAttribute('data-percent');
            pieCenterValue.textContent = `${percent}%`;
        });

        slice.addEventListener('mouseleave', function() {
            pieCenterValue.textContent = '100%';
        });
    });
}

// 更新柱状图
function updateBarChart(data) {
    const mixedChartSvg = document.getElementById('mixedChartSvg');
    const mixedChartLegend = document.getElementById('mixedChartLegend');

    if (!mixedChartSvg) return;

    const width = 600;
    const height = 300;
    const padding = { top: 30, right: 30, bottom: 50, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // 找出最大值用于缩放
    const maxValue = Math.max(...data.map(d => d.value));
    const yScale = chartHeight / (maxValue * 1.1);

    // 绘制网格线
    let gridLines = '';
    const gridCount = 5;
    for (let i = 0; i <= gridCount; i++) {
        const y = padding.top + (chartHeight / gridCount) * i;
        const value = Math.round(maxValue * (1 - i / gridCount));
        gridLines += `
            <line class="chart-grid-line"
                  x1="${padding.left}"
                  y1="${y}"
                  x2="${width - padding.right}"
                  y2="${y}"/>
            <text class="chart-axis-text"
                  x="${padding.left - 10}"
                  y="${y + 4}"
                  text-anchor="end">${value}</text>
        `;
    }

    // 绘制柱状图
    const barWidth = (chartWidth / data.length) * 0.5;
    const barGap = (chartWidth / data.length) * 0.5;
    let bars = '';

    data.forEach((item, index) => {
        const x = padding.left + (chartWidth / data.length) * index + barGap / 2;
        const barHeight = item.value * yScale;
        const y = padding.top + chartHeight - barHeight;

        bars += `
            <rect class="chart-bar"
                  x="${x}"
                  y="${y}"
                  width="${barWidth}"
                  height="${barHeight}"
                  fill="${item.color}"
                  rx="4"
                  data-value="${item.value}"
                  data-label="${item.label}">
                <title>${item.label}: ${item.value}</title>
            </rect>
            <text class="chart-bar-label"
                  x="${x + barWidth / 2}"
                  y="${y - 8}">${item.value}</text>
            <text class="chart-axis-text"
                  x="${x + barWidth / 2}"
                  y="${height - padding.bottom + 20}"
                  text-anchor="middle">${item.label}</text>
        `;
    });

    // 绘制趋势线
    const points = data.map((item, index) => {
        const x = padding.left + (chartWidth / data.length) * index + barGap / 2 + barWidth / 2;
        const y = padding.top + chartHeight - item.value * yScale;
        return `${x},${y}`;
    }).join(' ');

    // 绘制趋势线点
    let linePoints = '';
    data.forEach((item, index) => {
        const x = padding.left + (chartWidth / data.length) * index + barGap / 2 + barWidth / 2;
        const y = padding.top + chartHeight - item.value * yScale;
        linePoints += `
            <circle class="chart-line-point"
                    cx="${x}"
                    cy="${y}"
                    r="4"
                    stroke="#ef4444"
                    data-value="${item.value}"
                    data-label="${item.label}">
                <title>${item.label}: ${item.value}</title>
            </circle>
        `;
    });

    // 创建渐变
    const gradient = `
        <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
            </linearGradient>
        </defs>
    `;

    mixedChartSvg.innerHTML = `
        ${gradient}
        ${gridLines}
        ${bars}
        <polyline class="chart-line"
                  points="${points}"
                  stroke="url(#lineGradient)"/>
        ${linePoints}
    `;

    // 更新图例
    if (mixedChartLegend) {
        mixedChartLegend.innerHTML = `
            <div class="legend-item">
                <span class="legend-color" style="background: #2563eb;"></span>
                <span>数据量</span>
            </div>
            <div class="legend-item">
                <span class="legend-line" style="background: linear-gradient(90deg, #ef4444, #f59e0b);"></span>
                <span>增长趋势</span>
            </div>
        `;
    }
}

// 更新参数分布
function updateParameters(data) {
    const parameterGrid = document.querySelector('.parameter-grid');

    let paramHTML = '';
    data.forEach(item => {
        paramHTML += `
            <div class="parameter-item">
                <div class="parameter-name">${item.name}</div>
                <div class="parameter-bar">
                    <div class="parameter-fill" style="width: ${item.value}%;"></div>
                </div>
                <div class="parameter-value">${item.value}%</div>
            </div>
        `;
    });

    parameterGrid.innerHTML = paramHTML;
}

// 搜索功能
document.querySelector('.search-input')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#materialTableBody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// 导出功能
document.querySelector('.btn-export')?.addEventListener('click', function() {
    showToast('数据导出功能开发中...', 'info');
});

// 分页功能
document.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.disabled) return;

        const data = statisticsData[currentType];
        if (!data || !data.materials) return;

        const totalPages = Math.ceil(data.materials.length / pageSize);

        if (this.textContent === '上一页') {
            if (currentPage > 1) {
                currentPage--;
                updateMaterialTable(data.materials);
            }
        } else if (this.textContent === '下一页') {
            if (currentPage < totalPages) {
                currentPage++;
                updateMaterialTable(data.materials);
            }
        }
    });
});

// 更新材料表格
function updateMaterialTable(materials) {
    const tableBody = document.getElementById('materialTableBody');
    if (!tableBody) return;

    // 计算分页
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageMaterials = materials.slice(startIndex, endIndex);

    // 获取分类对应的徽章类名
    const badgeClass = getBadgeClass(currentType);

    // 生成表格行
    let tableHTML = '';
    
    // 蠕变性质使用特殊表格结构
    if (currentType === 'creep') {
        pageMaterials.forEach(material => {
            tableHTML += `
                <tr>
                    <td>${material.id || '-'}</td>
                    <td>${material.alloy || '-'}</td>
                    <td>${material.content || '-'}</td>
                    <td>${material.youngsModulus || '-'}</td>
                    <td>${material.stackingFaultEnergy || '-'}</td>
                    <td>${material.diffusionCoefficient || '-'}</td>
                    <td>${material.shearModulus || '-'}</td>
                    <td>${material.relativeCreepRate || '-'}</td>
                    <td>${material.binaryAlloy || '-'}</td>
                    <td>${material.bulkModulus || '-'}</td>
                    <td>${material.shearModulus2 || '-'}</td>
                    <td>${material.youngsModulus2 || '-'}</td>
                    <td>${material.basalSFE || '-'}</td>
                    <td>${material.prismaticSFE || '-'}</td>
                    <td>${material.pyramidalSFE || '-'}</td>
                    <td>${material.diffusionCoefficient2 || '-'}</td>
                    <td>${material.date}</td>
                    <td><button class="btn-view">查看</button></td>
                </tr>
            `;
        });
    } else if (currentType === 'electronic') {
        // 电子结构使用特殊表格结构
        pageMaterials.forEach(material => {
            tableHTML += `
                <tr>
                    <td>${material.id || '-'}</td>
                    <td>${material.alloy || '-'}</td>
                    <td>${material.diffusionBarrier1 || '-'}</td>
                    <td>${material.diffusionBarrier2 || '-'}</td>
                    <td>${material.diffusionBarrier3 || '-'}</td>
                    <td>${material.temperature || '-'}</td>
                    <td>${material.diffusionCoefficient1 || '-'}</td>
                    <td>${material.diffusionCoefficient2 || '-'}</td>
                    <td>${material.diffusionCoefficient3 || '-'}</td>
                    <td>${material.diffusionType || '-'}</td>
                    <td>${material.date}</td>
                    <td><button class="btn-view">查看</button></td>
                </tr>
            `;
        });
    } else if (currentType === 'elastic') {
        // 弹性性质使用特殊表格结构
        pageMaterials.forEach(material => {
            tableHTML += `
                <tr>
                    <td>${material.id || '-'}</td>
                    <td>${material.alloy || '-'}</td>
                    <td>${material.c11 || '-'}</td>
                    <td>${material.c33 || '-'}</td>
                    <td>${material.c44 || '-'}</td>
                    <td>${material.c12 || '-'}</td>
                    <td>${material.c13 || '-'}</td>
                    <td>${material.c66 || '-'}</td>
                    <td>${material.bv || '-'}</td>
                    <td>${material.br || '-'}</td>
                    <td>${material.bi || '-'}</td>
                    <td>${material.gv || '-'}</td>
                    <td>${material.gr || '-'}</td>
                    <td>${material.gh || '-'}</td>
                    <td>${material.e || '-'}</td>
                    <td>${material.v || '-'}</td>
                    <td>${material.bg || '-'}</td>
                    <td>${material.cauchy || '-'}</td>
                    <td>${material.gb || '-'}</td>
                    <td>${material.date}</td>
                    <td><button class="btn-view">查看</button></td>
                </tr>
            `;
        });
    } else {
        // 其他分类使用标准表格结构
        pageMaterials.forEach(material => {
            tableHTML += `
                <tr>
                    <td>${material.name}</td>
                    <td><span class="badge ${badgeClass}">${getCategoryName(currentType)}</span></td>
                    <td>${material.tensile}</td>
                    <td>${material.yield}</td>
                    <td>${material.elongation}</td>
                    <td>${material.date}</td>
                    <td><button class="btn-view">查看</button></td>
                </tr>
            `;
        });
    }

    tableBody.innerHTML = tableHTML;

    // 更新分页信息
    updatePagination(materials.length);
}

// 获取分类对应的徽章类名
function getBadgeClass(type) {
    const badgeMap = {
        'metal': 'metal',
        'inorganic': 'inorganic',
        'polymer': 'polymer',
        'composite': 'composite',
        'nano': 'nano',
        'functional': 'functional',
        'creep': 'creep',
        'electronic': 'electronic',
        'elastic': 'elastic'
    };
    return badgeMap[type] || 'metal';
}

// 获取分类名称
function getCategoryName(type) {
    const nameMap = {
        'metal': '金属材料',
        'inorganic': '无机非金属材料',
        'polymer': '高分子材料',
        'composite': '复合材料',
        'nano': '纳米材料',
        'functional': '功能材料',
        'creep': '蠕变性质',
        'electronic': '电子结构',
        'elastic': '弹性性质(含H元素)'
    };
    return nameMap[type] || '材料';
}

// 更新分页信息
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const paginationInfo = document.querySelector('.pagination-info');
    const prevBtn = document.querySelector('.pagination-btn:first-child');
    const nextBtn = document.querySelector('.pagination-btn:last-child');

    if (paginationInfo) {
        paginationInfo.textContent = `第 ${currentPage} 页，共 ${totalPages} 页`;
    }

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }

    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

console.log('统计页面已加载');
