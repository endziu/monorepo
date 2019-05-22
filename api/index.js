const micro = require("micro")

module.exports = micro((req, res) => {
  return '{"data": "0x12f5ad3680a"}'
})
