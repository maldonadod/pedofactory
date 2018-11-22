class FactoryBaseOnLambda {

    constructor(defaultClass) {
        this.defaultClass = defaultClass
        this.collection = []
    }
    map(test, result) {
        this.collection = [...this.collection, {
            test,
            result
        }]
    }
    create(IBaseOnLambdaArgs) {
        const element = this.collection
            .find(({test}) => test(IBaseOnLambdaArgs))

        return element ? element.result : this.defaultClass
    }
}

module.exports = FactoryBaseOnLambda