import './utils/tool.js';
// 游戏视图
export default class GameView {
    constructor(gameControl) {
        // 创建游戏对象
        this.game = gameControl
    }

    // 1.游戏导入界面
    initView() {
        console.log('==========================================================');
        console.log('||\t德\t克\t萨\t斯\t扑\t克\t||');
        console.log('==========================================================');
    }

    // 2.初始化玩家 和 玩家代号
    async initPlayers() {
        // 2.1 初始化玩家数量
        this.playerCount = await console.readLine('请输入参与游戏玩家数量(2-10):')
        const len = this.playerCount.length
        // 2.2 初始化玩家代号
        let playName = ''
        // 循环便利输入 所有玩家 代号
        for (let i = 0; i < len; i++) {
            playName = await console.readLine(`请输入${i+1}号玩家代号:`)
            console.log(`${i+1}号玩家代号:${playName}`);
        }
    }
}

let g = new GameView({ poker: 'Heart' })
g.initView()
g.initPlayers()
// console.log(g)