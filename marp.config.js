const { Marp } = require("@marp-team/marp-core");

module.exports = {
  html: true,
  engine: (opts) => new Marp(opts).use(require("markdown-it-plantuml")),
};
