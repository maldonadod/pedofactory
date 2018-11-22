const AssertEquals = (a, b) => expect(a).toEqual(b)
const DefaultTerminator = require('../src/DefaultTerminator')
const FactoryBaseOnLambda = require('../src/FactoryBaseOnLambda')
const T1000 = require('../src/T1000')
const T2000 = require('../src/T2000')
const Find = require('../src/FinderArgs')

describe('FactoryBaseOnLambda', () => {
    
    const defaults = DefaultTerminator
    const factory = new FactoryBaseOnLambda(defaults)

    it('return default result', () => {
        AssertEquals(
            factory.create(new Find(1)), DefaultTerminator
        )
    })

    describe('Before all we map some terminators in the factory', () => {

        beforeAll(() => {
            const T1000Tester = IBaseOnLambdaArgs => IBaseOnLambdaArgs.test(1)
            factory.map(T1000Tester, T1000)

            const T2000Tester = IBaseOnLambdaArgs => IBaseOnLambdaArgs.test(2)
            factory.map(T2000Tester, T2000)
        })
            
        it('return T1000 result', () => {
            AssertEquals(
                factory.create(new Find(1)), T1000
            )
        })
        it('return T2000 (liquido) result', () => {
            AssertEquals(
                factory.create(new Find(2)), T2000
            )
        })
    })
})