class FactoryBaseOnLambda {

    constructor(defaultClass) {
        this.defaultClass = defaultClass
        this.posibilities = []
    }
    map(test, result) {
        this.posibilities = [...this.posibilities, {
            test,
            result
        }]
    }
    create(IBaseOnLambdaArgs) {
        const posibility = this.posibilities
            .find(({test}) => test(IBaseOnLambdaArgs))

        return posibility ? posibility.result : this.defaultClass
    }
}

module.exports = FactoryBaseOnLambda