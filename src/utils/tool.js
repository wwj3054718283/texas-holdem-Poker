// 导入 node 的逐行读取 模块
import readline from 'readline';

// 1.创建 Inteface实例
const rl = readline.createInterface({
    // 要监听的 可读流
    input: process.stdin,
    // 要将 逐行读取 的数据写入的 可写流
    output: process.stdout
});

// 2.追加readline方法 msg:提示语 answer：键入信息数据
console.readLine = function (msg) {
    return new Promise((suc, fal) => {
        rl.question(msg, (answer) => {
            // console.log("1-------------");
            suc(answer)
            // console.log("SUC:",suc(answer));
            // console.log("RL:",rl);
        })
    }).finally(() => {
        rl.close()
        // console.log("RL:",rl);
    })
}

// 3.追加readNum方法
console.readNum = async function (msg) {
    return new Promise((suc, fal) => {
        rl.question(msg, (answer) => {
            // console.log("2-------------");
            suc(answer)
        })
    }).finally(() => {
        rl.close()
    })
}

// 4.追加readNum2方法
console.readNum2 = async function (msg) {
    return new Promise((suc, fal) => {
        rl.question(msg, async (answer) => {
            // console.log("3-------------");
            let numb = Number(answer)
            if (!isNaN(numb)) {
                console.log("请输入数字:");
                numb = await console.readNum(msg)
            }
            else suc(answer)
        })
    }).finally(() => {
        rl.close()
    })
}


// console.log(console);


let funt = async () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        let a =  await console.readLine(`输入${i+1}值:`)  
        arr.push(a) 
    }
    console.log(arr);
}
funt()

