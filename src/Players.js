// 玩家类
export default class Player {
    constructor(name) {
        // 玩家姓名
        this.name = name
        // 玩家手牌（2张）
        this.cards = []
        // 玩家组合牌(5张，最终牌)
        this.mixCards = []
        // 玩家 牌力值
        this.power = 0
        // 玩家牌型
        this.grand = null
    }

    // 1.拼接牌组
    showHandCards(cardList) {
        // 判断有没有发牌
        if (cardList.length == 0) return '未发牌'
        let str = ''
        cardList.forEach((c) => {
            // 拼接手牌
            str += c + '\t'
        })
        return str
    }

    // 2.展示 玩家手牌
    showPlayerCards() {
        const res = this.showHandCards(this.cards)
        console.log(`玩家${this.name}手牌:\t${res}`)
        return res
    }

    // 3.展示 玩家组合牌
    showPlayerMixCards() {
        const res = this.showHandCards(this.mixCards)
        console.log(`玩家${this.name}组合牌:\t${res}`)
        return res
    }
}

// let a = new Player('yyz')
// a.cards = ['♥4', '♣K']
// a.mixCards = ['♥4', '♣K','♥K','♣9','♦4']
// a.showPlayerCards()
// a.showPlayerMixCards()
// console.log(a)
// console.log(a.showHandCards(['♥4', '♣K']));