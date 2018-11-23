const DeviceFactory = (platform, version) => {
    return {
        platform,
        version,
        ok: false,
        is(platform) {
            this.ok = this.platform === platform
            return this
        },
        lt(version) {
            return this.version === version && this.ok
        }
    }
}

module.exports = DeviceFactory