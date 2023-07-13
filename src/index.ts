export const Max = (num: number[]) => {
    if (!num.length) throw Error("Array empty");
    return Math.max(...num)
}

export const Min = (num: number[]) => {
    if (!num.length) throw Error("Array empty");
    return Math.min(...num)
}

export const Avg = (num: number[]) => {
    if (!num.length) throw Error("Array empty");
    let sum = num.reduce(function(a,b){
        return a+b
    })
    return sum
}