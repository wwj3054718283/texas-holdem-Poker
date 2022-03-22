import Card from "./Card.js"

// 一副牌 类
export default class CardList extends Array {
    // -------------一.工具函数-------------
    // 1.生成指定范围的随机整数 用于洗牌
    randomInt(min, max, forbid = false) {
        // 1.1 获取随机数
        let ranInt = min + Math.floor(Math.random() * (max - min + 1))
        // 1.2 查看是否存在禁止数 若不存在则直接返回
        if (!forbid) return ranInt
        // 1.3 存在禁止数 且 与 当前 随机数 相等 则 重新获取随机数
        while (ranInt == forbid) {
            ranInt = min + Math.floor(Math.random() * (max - min + 1))
        }
        // 1.4 返回 与 禁止数 不同的随机数
        return ranInt
    }

    // -------------二.业务函数-------------
    // 1.构造函数 初始化牌组
    constructor() {
        super()
        // 一张牌
        let card
        // 生成一副牌
        for (let Ccolor in Card.CardColor) {
            let cardColor = Ccolor
            for (let j in Card.CardPower) {
                card = Card.CardIcon[Card.CardColor[Ccolor]] + j
                let ACard = new Card(cardColor,j)
                this.push(ACard)
            }
        }
    }
    // 2.洗牌 times:每张牌平均被抽到的次数
    shuffle(times = 4) {
        // 抽卡位置
        let card_1 = 0
        // 插卡位置
        let card_2 = 0
        for (let index = 0; index < this.length * times; index++) {
            card_1 = this.randomInt(0,this.length-1)
            card_2 = this.randomInt(0,this.length-1,card_1)
            // 抽卡
            let exCard = this.splice(card_1,1)
            // 插卡
            this.splice(card_2,0,...exCard)
            // console.log(index,card_1,card_2);
        }
    }

    // 3.抽卡
    getOneCard(){
        return this.pop()
    }
}

// let a = new CardList
// console.log("洗牌前",a);
// a.shuffle()
// console.log("洗牌后",a);
// a.getOneCard()
// console.log("抽卡后",a);