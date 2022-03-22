// 导入牌类
export default class MathModel{
    constructor(){
        this.name = 'mathModel'
    }
    
    CardListType(cardlist){
        console.log(cardlist);
        let arrCards = []
        cardlist.forEach(c => {
            arrCards.push(c.cardPrice)
        });
        console.log(arrCards);
    }
}

let m = new MathModel()