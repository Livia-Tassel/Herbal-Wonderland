// 中药人格测试数据
const questions = [
    {
        question: "在社交场合中，你通常扮演什么角色？",
        options: [
            { text: "气氛活跃者，热情似火", icon: "fas fa-fire" },
            { text: "冷静观察者，理性分析", icon: "fas fa-brain" },
            { text: "温和调解者，善解人意", icon: "fas fa-hand-holding-heart" },
            { text: "神秘独行者，不拘一格", icon: "fas fa-moon" }
        ]
    },
    {
        question: "面对压力时，你的第一反应是？",
        options: [
            { text: "直面挑战，迅速行动", icon: "fas fa-fist-raised" },
            { text: "冷静思考，制定计划", icon: "fas fa-chess" },
            { text: "寻求帮助，团队协作", icon: "fas fa-hands-helping" },
            { text: "暂时逃避，自我调整", icon: "fas fa-seedling" }
        ]
    },
    {
        question: "你最喜欢的休闲方式是什么？",
        options: [
            { text: "户外探险和极限运动", icon: "fas fa-hiking" },
            { text: "阅读学习或深度思考", icon: "fas fa-book" },
            { text: "朋友聚会或家庭时光", icon: "fas fa-users" },
            { text: "独自冥想或艺术创作", icon: "fas fa-palette" }
        ]
    },
    {
        question: "在团队中，你最重要的特质是？",
        options: [
            { text: "领导力和决策能力", icon: "fas fa-crown" },
            { text: "分析力和问题解决", icon: "fas fa-lightbulb" },
            { text: "同理心和团队协作", icon: "fas fa-heart" },
            { text: "创造力和独特视角", icon: "fas fa-star" }
        ]
    },
    {
        question: "你的人生座右铭最接近？",
        options: [
            { text: "行动胜于空谈", icon: "fas fa-running" },
            { text: "知识就是力量", icon: "fas fa-graduation-cap" },
            { text: "家和万事兴", icon: "fas fa-home" },
            { text: "活出真我风采", icon: "fas fa-user-alt" }
        ]
    }
];

// 完整40味中药数据库
const herbs = [
    { id: 1, name: "甘草", fact: "中药界的『和事佬』，90%药方都带它玩，只因能调和诸药打架的暴脾气。", personality: "你具有强大的适应性和包容力，是团队中的和谐使者，像甘草一样能平衡各方关系。" },
    { id: 2, name: "黄连", fact: "哑巴吃黄连时可能在偷着乐——毕竟它含天然抗菌剂，专治不服的细菌。", personality: "你拥有深刻的洞察力和批判思维，像黄连一样能直指问题核心，是团队中的问题解决专家。" },
    { id: 3, name: "枸杞", fact: "保温杯里的中年救星，实际是西域来的混血儿，唐朝才在中国扎根。", personality: "你懂得生活的平衡艺术，像枸杞一样既保持活力又注重滋养，是朋友圈中的养生达人。" },
    { id: 4, name: "艾草", fact: "端午限定款绿色蚊香，燃烧时散发的不是烟，是古人驱邪的执念。", personality: "你具有保护者和疗愈者的特质，像艾草一样散发着温暖的能量，守护身边的人和环境。" },
    { id: 5, name: "何首乌", fact: "熬夜冠军的自我修养：白天当药材，晚上偷偷变『夜交藤』开派对。", personality: "你拥有强大的恢复力和适应能力，像何首乌一样在压力下依然保持活力和创造力。" },
    { id: 6, name: "茯苓", fact: "松树精的私房钱，专门藏在树根下长成白馒头状存折。", personality: "你具有平和稳定的特质，像茯苓一样能化解生活中的湿气，保持内心的安宁与平衡。" },
    { id: 7, name: "金银花", fact: "双生花上演金银cosplay，开花24小时即完成土豪金到白银的变色魔法。", personality: "你拥有多面性和强大的适应力，像金银花一样能在不同场合展现最合适的自己。" },
    { id: 8, name: "陈皮", fact: "橘子皮界的陈年老腊肉，三年起步的晾晒是成为大佬的硬指标。", personality: "你像陈皮一样，经过时间的沉淀愈发醇厚，拥有超越年龄的智慧和成熟魅力。" },
    { id: 9, name: "蜈蚣", fact: "百足之虫死而不僵，烘干后仍保持着妖娆的S型走位。", personality: "你思维灵活多变，像蜈蚣一样能同时处理多条任务，在复杂局面中游刃有余。" },
    { id: 10, name: "朱砂", fact: "古代美妆博主挚爱的死亡色号，秦始皇陵里的流动水银河原料供应商。", personality: "你具有神秘的气质和强大的内在能量，像朱砂一样既充满魅力又具有守护力量。" },
    { id: 11, name: "决明子", fact: "自带护眼屏保的种子，泡水后会膨胀成Q弹小果冻监视你喝水的进度。", personality: "你具有敏锐的观察力和清晰的判断力，像决明子一样能看透事物本质，保护自己不受迷惑。" },
    { id: 12, name: "蝉蜕", fact: "昆虫界的金蝉脱壳限定皮肤，出土时间精确到秒的夏日限定款。", personality: "你懂得适时蜕变和成长，像蝉蜕一样在恰当时机展现全新的自己，追求精神自由。" },
    { id: 13, name: "三七", fact: "云南白药里的保密咖，受伤的武侠高手都在偷偷嚼它的根。", personality: "你具有强大的自我修复能力，像三七一样在经历挫折后能迅速恢复，内心坚韧不拔。" },
    { id: 14, name: "阿胶", fact: "驴皮熬制的上古胶原蛋白，杨贵妃的美容秘方其实是黑暗料理。", personality: "你像阿胶一样具有凝聚人心的力量，滋养着人际关系，是传统文化和价值观的守护者。" },
    { id: 15, name: "薄荷", fact: "自带中央空调的清凉猛男，叶片越被揉虐散发的凉气越嚣张。", personality: "你充满活力和清新气息，像薄荷一样能激发团队的创造力和热情，带来耳目一新的观点。" },
    { id: 16, name: "龙眼肉", fact: "水果界的伪装大师，晒干后变身中药材继续在药膳里当卧底。", personality: "你具有甜美温暖的特质，像龙眼肉一样滋养着身边人的心灵，同时拥有多面的才能。" },
    { id: 17, name: "冬虫夏草", fact: "真菌绑架虫子的僵尸现场，海拔5000米的菌虫爱情悲剧。", personality: "你像冬虫夏草一样神奇而独特，能在极端环境中找到生存之道，拥有珍贵的品质和才能。" },
    { id: 18, name: "乌梅", fact: "青梅竹马熬成婆，烟熏火燎后修炼成酸度爆表的皱皮仙人。", personality: "你具有将经历转化为智慧的能力，像乌梅一样经过时间的沉淀，形成独特而深刻的个性。" },
    { id: 19, name: "板蓝根", fact: "非典时期的顶流明星，至今仍在各大药房C位出道。", personality: "你在危机时刻总能成为可靠的保护者，像板蓝根一样是团队中的防御专家和安全屏障。" },
    { id: 20, name: "枇杷叶", fact: "自带密码锁的树叶，煎药前必须用刷子破解背面的绒毛密码。", personality: "你像枇杷叶一样表面普通但内含深意，需要用心刷洗才能发现你深层的智慧和疗愈力量。" },
    { id: 21, name: "鱼腥草", fact: "植物界的咸鱼本尊，揉碎叶片会散发来自东海的问候——浓郁鱼腥味。", personality: "你勇于展现真实的自我，像鱼腥草一样不畏惧他人的眼光，坚持自己的独特气味和个性。" },
    { id: 22, name: "天麻", fact: "终生不进行光合作用的摸鱼大师，全靠真菌外卖小哥送营养上门。", personality: "你具有独特的生存智慧，像天麻一样懂得借助外力实现自己的成长，是聪明的资源整合者。" },
    { id: 23, name: "白芷", fact: "自带十级磨皮美白滤镜，古代贵妇面膜里的C位成分。", personality: "你像白芷一样散发着自然光彩，不仅注重外在形象，更拥有内在的美丽和疗愈力量。" },
    { id: 24, name: "灵芝", fact: "真菌界的千年老戏骨，秦汉时期就开始在神话故事里当道具。", personality: "你具有尊贵的气质和长远的眼光，像灵芝一样在团队中被视为智慧和长寿的象征。" },
    { id: 25, name: "红花", fact: "藏在黄色花瓣里的红色特工，需要人工采撷才能解锁终极染色形态。", personality: "你外表可能平和，但内心充满热情，像红花一样需要深入接触才能发现你真正的活力和创造力。" },
    { id: 26, name: "葛根", fact: "深藏地下的淀粉银行，东汉灾荒时期曾担任临时国库储备粮。", personality: "你像葛根一样低调但充满价值，在关键时刻总能提供支持和资源，是团队中的稳定后盾。" },
    { id: 27, name: "杜仲", fact: "树皮界的拉丝大师，折断后会表演藕断丝连的绝活。", personality: "你具有强大的韧性和连接能力，像杜仲一样即使面临断裂也能保持联系，是团队中的凝聚力。" },
    { id: 28, name: "罗汉果", fact: "葫芦娃家的甜味担当，1个果实的甜度相当于300g白糖却零卡路里。", personality: "你像罗汉果一样带给他人甜蜜而健康的体验，天然去雕饰，拥有真诚而有益的影响力。" },
    { id: 29, name: "砂仁", fact: "长在竹子根部的姜科卧底，晒干后依然保持刺客般的尖刺造型。", personality: "你外表可能有些尖锐，但内心温暖，像砂仁一样是隐藏的疗愈者，懂得在适当的时候展现温柔。" },
    { id: 30, name: "槐花", fact: "会下黄色蜜雪的中药，古代染坊VIP客户指定黄色染料供应商。", personality: "你充满创造力和色彩感，像槐花一样为生活增添甜蜜和美感，是团队中的艺术灵魂。" },
    { id: 31, name: "蒲公英", fact: "自带降落伞的种子空降兵，每朵绒球都藏着200+个特种兵。", personality: "你热爱自由和冒险，像蒲公英一样能适应各种环境，带着梦想的种子四处传播新思想。" },
    { id: 32, name: "石斛", fact: "悬崖上的吊威亚演员，天生具备倒挂金钟生长的杂技天赋。", personality: "你在逆境中也能顽强生长，像石斛一样在艰难环境中绽放珍贵的光彩，拥有非凡的生存智慧。" },
    { id: 33, name: "酸枣仁", fact: "失眠患者的数羊替代品，每颗果核都刻着安眠程序的源代码。", personality: "你具有平静心灵的力量，像酸枣仁一样能抚慰焦虑，为他人带来内心的安宁和平衡。" },
    { id: 34, name: "鸡内金", fact: "鸡的六块腹肌，专业粉碎各种石子沙粒的砂囊铠甲。", personality: "你拥有强大的消化和转化能力，像鸡内金一样能将生活中的砂石转化为成长的养分。" },
    { id: 35, name: "桑叶", fact: "蚕宝宝御用米其林餐厅，经霜打后自动升级为降糖特供版。", personality: "你像桑叶一样随环境变化而提升价值，懂得在经历风霜后展现更深的智慧和疗愈力量。" },
    { id: 36, name: "地龙", fact: "蚯蚓的医学进修班毕业证，烘干后依然保持妖娆的波浪线造型。", personality: "你在幕后默默耕耘，像地龙一样疏通着团队的经络，是连接各方的重要通道。" },
    { id: 37, name: "薏苡仁", fact: "会伪装修仙的粮食，在中药铺和杂粮店之间反复横跳。", personality: "你具有多面才能，像薏苡仁一样在实用和灵性间自由切换，是生活艺术的实践者。" },
    { id: 38, name: "牛膝", fact: "茎节处自带膝关节彩蛋，完美复刻牛膝盖的凹凸造型。", personality: "你像牛膝一样为团队提供坚实的支撑，是维持结构和稳定的关键力量。" },
    { id: 39, name: "王不留行", fact: "名字很霸气的麦蓝菜种子，实际是古代催乳界的扫地僧。", personality: "你善于促进事物流动和发展，像王不留行一样低调但高效，是团队进步的隐形推手。" },
    { id: 40, name: "马钱子", fact: "自带毒药界爱马仕title，士的宁成分让007特工都忌惮三分。", personality: "你拥有独特的力量和魅力，像马钱子一样需要谨慎使用才能发挥最大价值，是具有震撼力的存在。" }
];

// 全局变量
let currentQuestion = 0;
let answers = [];
let selectedOption = null;

// DOM元素
const introScreen = document.getElementById('introScreen');
const testScreen = document.getElementById('testScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const questionArea = document.getElementById('questionArea');
const nextBtnText = document.getElementById('nextBtnText');
const floatingLeaves = document.getElementById('floatingLeaves');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    startBtn.addEventListener('click', startTest);
    nextBtn.addEventListener('click', nextQuestion);
    createFloatingLeaves();
});

// 创建飘动叶子
function createFloatingLeaves() {
    const leaves = ['🌿', '🍃', '🌱', '🍀', '🍂'];
    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.top = `${Math.random() * 100}%`;
        leaf.style.fontSize = `${Math.random() * 2 + 1}rem`;
        leaf.style.animationDuration = `${Math.random() * 10 + 10}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        floatingLeaves.appendChild(leaf);
    }
}

// 开始测试
function startTest() {
    introScreen.style.display = 'none';
    testScreen.style.display = 'block';
    renderQuestion();
}

// 渲染问题
function renderQuestion() {
    const question = questions[currentQuestion];

    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <div class="option" onclick="selectOption(${index})">
                <i class="${option.icon}"></i>
                ${option.text}
            </div>
        `;
    });

    questionArea.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">${optionsHTML}</div>
    `;

    updateProgress();

    // 如果是最后一题，更改按钮文本
    if (currentQuestion === questions.length - 1) {
        nextBtnText.textContent = "查看我的中药人格";
    } else {
        nextBtnText.textContent = "下一题";
    }
}

// 选择选项
function selectOption(index) {
    // 移除之前的选择
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    // 添加当前选择
    options[index].classList.add('selected');

    // 保存选择
    selectedOption = index;
    answers[currentQuestion] = index;

    // 启用下一题按钮
    nextBtn.disabled = false;
}

// 更新进度
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
}

// 下一题
function nextQuestion() {
    if (selectedOption === null) {
        alert('请选择一个选项');
        return;
    }

    currentQuestion++;
    selectedOption = null;
    nextBtn.disabled = true;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        finishTest();
    }
}

// 完成测试
function finishTest() {
    testScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    // 匹配结果
    const matchedHerb = matchHerb();
    showResult(matchedHerb);
}

// 匹配中药人格
function matchHerb() {
    // 随机选择一个中药
    const randomIndex = Math.floor(Math.random() * herbs.length);
    return herbs[randomIndex];
}

// 显示结果
function showResult(herb) {
    // 创建匹配标签（随机生成3个）
    const traits = ["调和", "滋养", "智慧", "坚韧", "独特", "创新", "平衡", "热情", "疗愈", "包容", "沉稳", "灵动"];
    const matchedTraits = [];
    for (let i = 0; i < 3; i++) {
        const randomTrait = traits[Math.floor(Math.random() * traits.length)];
        matchedTraits.push(randomTrait);
        traits.splice(traits.indexOf(randomTrait), 1); // 避免重复
    }

    // 创建匹配标签HTML
    const traitsHTML = matchedTraits.map(trait =>
        `<div class="match-item">${trait}</div>`
    ).join('');

    resultScreen.innerHTML = `
        <div class="result-title">你的中药人格是</div>
        <div class="herb-name">${herb.name}</div>

        <div class="herb-image">${herb.name.charAt(0)}</div>

        <div class="personality-match">
            ${traitsHTML}
        </div>

        <div class="herb-fact">${herb.fact}</div>

        <div class="herb-fact">${herb.personality}</div>

        <div class="btn-container">
            <button class="btn restart-btn" onclick="restartTest()">
                <i class="fas fa-redo"></i> 重新测试
            </button>
        </div>
    `;
}

// 重新测试
function restartTest() {
    currentQuestion = 0;
    answers = [];
    selectedOption = null;

    resultScreen.style.display = 'none';
    introScreen.style.display = 'block';
    testScreen.style.display = 'none';

    // 重置按钮状态
    nextBtn.disabled = true;
}
