class IBaseOnLambdaArgs {
    constructor(value) {
        this.value = value
    }
    test(n) {
        return this.value === n
    }
}

module.exports = IBaseOnLambdaArgs