var ntfd = require('ntfd')

ntfd({
  path: __dirname + '/tests',
  agent: 'test',
  plugin: [
    new ntfd.plugin.ConsoleEmitter(),
    new ntfd.plugin.HttpEmitter('http://localhost:8000/suite/result'),
  ],
  test: {
    interval: 10,
  },
})
