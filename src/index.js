const { name, version } = require('../package.json')

require('./hello/')
	.renderSync({ name, version })
	.appendTo(document.body)
