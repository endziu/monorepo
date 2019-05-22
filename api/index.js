const micro = require("micro")

module.exports = micro((req, res) => {
  return '{"data": "beep boop 1 2 3"}'
})
