Array.prototype.map = function (fn){
    const result = []
    for (let i = 0; i < this.length; i++){
        result.push(fn(this[i], i, this))
    }
    return result
}
