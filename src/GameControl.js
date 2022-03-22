// 导入牌组类
import CardList from './CardList.js'
// 导入游戏界面
import GameView from './GameView.js'
// 导入数学模型
import MathModel from './MathematicalModel.js'
// 导入玩家类
import Player from './Players.js'

export default class GameControl {
    // ----------------一、构造函数--------------------
    constructor() {
        // 1.创建游戏界面实例------------------
        this.gameView = new GameView(this)
        this.cardList = new CardList()
        // 玩家数组
        this.players = []
        // 游戏规则
        this.MModel = new MathModel()
        // 公共牌
        this.pubCards = []
    }

    // ----------------二、普通函数--------------------

    // 1.初始化玩家
    async initPlayers() {
        // 1.1 输入玩家数量 和 玩家代号
        await this.gameView.initPlayers()
        console.log("-----------");
    }

    // 2.添加玩家
    addPlayer(name) {
        // 创建玩家
        let player = new Player(name)
        // 加入玩家数组
        this.players.push(player)
    }

    // 3.开始游戏
    startPlay() {
        // a.洗牌
        this.cardList.shuffle()
        // b.公共牌组
        this.deelPubCard()
        // c.玩家手牌
        this.deelAllPlayerCard()

        // d.玩家组合牌 排序
        this.sortMixCards()

        // e.显示公共牌
        this.showPubCards()
        // f.显示玩家牌
        this.showPlayerCards()

        // g.开始计算
        this.mathModelRule()
    }
    // 3.1发公共牌方法
    deelPubCard() {
        this.pubCards = this.cardList.splice(0, 5)
    }
    // 3.2发玩家牌方法
    deelAllPlayerCard() {
        this.players.forEach((p) => {
            // 给玩家发手牌 两张
            p.cards.push(this.cardList.getOneCard())
            p.cards.push(this.cardList.getOneCard())
            // 将 玩家牌 和 公共牌组合
            p.mixCards.push(...p.cards, ...this.pubCards)
        })
    }

    // 4.将手牌 和 公共牌进行大小排序
    sortMixCards() {
        this.players.forEach((p) => {
            p.mixCards.sort((pre, next) => next.cardPrice - pre.cardPrice)
        })
    }

    // 5.显示玩家牌
    showPlayerCards() {
        this.players.forEach(p => p.showPlayerCards())
    }

    // 6.显示公共牌
    showPubCards() {
        let s = this.pubCards.reduce((str, p) => {
            return str += p.name + '\t'
        }, '')
        console.log(`公共牌\t ` + s)
    }

    // 7.检测
    mathModelRule() {
        this.players.forEach((p) => {
            this.MModel.CardListType(p.mixCards)
        })
    }
}

let a = new GameControl
// a.initPlayers()
a.addPlayer('yyz')
a.addPlayer('yp')
a.startPlay()
// console.log(a);
// console.log(a.players[0]);
