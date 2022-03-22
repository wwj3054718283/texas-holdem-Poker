// 单张 牌 类
export default class Card{
    // ------------构造函数-------------------
    constructor(cardcolor, cardpower) {
        this.cardcolor = cardcolor // 牌型：红桃
        this.cardpower = cardpower   // 牌数：K
        this.name = Card.CardIcon[Card.CardColor[cardcolor]] + cardpower + '' // 牌面 '红桃K'
        this.cardPrice = Card.CardPower[cardpower] // 牌力
    }
    toString(){
        return this.name
    }
    // -----------初始化数据-------------------
    // 1.牌大小
    static CardPower = {
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        "6": 5,
        "7": 6,
        "8": 7,
        "9": 8,
        "10": 9,
        "J": 10,
        "Q": 11,
        "K": 12,
        "A": 13
    }

    // 2.牌花色
    static CardColor={
        // 红桃
        'Heart': 0,
        // 黑桃
        'Spade': 1,
        // 梅花
        'Club': 2,
        // 方块
        'Diamond': 3,
    }

    // 3.牌花色 图表
    static CardIcon = ["♥", "♠", "♣", "♦"];
}

// let a = new Card('Club','J')
// console.log(a);