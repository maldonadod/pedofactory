class TestNameArg {
    constructor(dto) {
        this.dto = dto
    }
    test(name) {
        return name === this.dto.name
    }
}
module.exports = TestNameArg