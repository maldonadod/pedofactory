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
        const element = this.posibilities
            .find(({test}) => test(IBaseOnLambdaArgs))

        return element ? element.result : this.defaultClass
    }
}

module.exports = FactoryBaseOnLambda