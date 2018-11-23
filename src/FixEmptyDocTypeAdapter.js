const FixEmptyDocTypeAdapter = {
    adapt(req) {
        req.setDoctype("DNI")
        return req
    }
}
module.exports = FixEmptyDocTypeAdapter