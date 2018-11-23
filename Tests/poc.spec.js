const FactoryBaseOnLambda = require('../src/FactoryBaseOnLambda')
const ClientParameter = require('../src/ClientParameter')
const DeviceFactory = require('../src/DeviceFactory')
const FixEmptyDocTypeAdapter = require('../src/FixEmptyDocTypeAdapter')
const NoOpAdapter = require('../src/NoOpAdapter')

describe.only('should adapt appropriated doctype for devices ios', () => {

    const factory = new FactoryBaseOnLambda(NoOpAdapter)
    let req;

    describe("Map FixEmptyDocTypeAdapter to ios < 7.19.0", () => {

        factory.map(param => {

            return param.test(client => {
                return client.is("ios").lt("7.19.0")
            })

        }, FixEmptyDocTypeAdapter)
    })

    //For each test check we create a new request
    beforeEach(() => {
        req = {
            setDoctype(docType) {
                this.body.doc_type = docType
            },
            body: {
                //missing doc_type property
                doc_number: "40123221",
                item: {
                    site_id: "MLA"
                }
            }
        };
    })

    it("empty doctype for version 7.19.X", () => {
        const device = DeviceFactory("ios", "7.19.0")
        const adapter = factory.create(
            new ClientParameter(device)
        )
        req = adapter.adapt(req)
        
        expect(req.body.doc_type).toEqual("DNI");
    });

    it("should not adapt for versions gte 7.20.X", () => {
        const device = DeviceFactory("ios", "7.20.0")
        const adapter = factory.create(
            new ClientParameter(device)
        )
        req = adapter.adapt(req)
        
        expect(req.body.doc_type).toBeUndefined();
    });
});