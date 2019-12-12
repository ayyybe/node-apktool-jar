const path = require('path')

const APKTOOL_VERSION = '2.4.1'

class Apktool {
	constructor() {
		throw new Error('Constructor not allowed. Use the static getters.')
	}

	static get version() {
		return APKTOOL_VERSION
	}

	static get path() {
		return path.join(__dirname, 'bin', `apktool_${APKTOOL_VERSION}.jar`)
	}
}

module.exports = Apktool
