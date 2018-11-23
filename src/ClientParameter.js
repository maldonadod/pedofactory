class ClientParameter {
    constructor(client) {
        this.client = client
    }
    test(test) {
        return test(this.client)
    }
}

module.exports = ClientParameter