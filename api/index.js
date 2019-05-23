const micro = require("micro")
const parse = require("url-parse")

module.exports = micro(async (req, res) => {
  const url = await parse(req.url, true)
  return JSON.stringify(url.query) + "\n"
})
