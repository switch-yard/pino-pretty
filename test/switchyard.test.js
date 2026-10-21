'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const { prettyFactory } = require('../')

test('prettifies a plain log line', () => {
  const prettify = prettyFactory({ colorize: false, translateTime: false })
  const line = prettify({ level: 30, time: 0, msg: 'tested through the merge queue', pid: 1, hostname: 'host' })
  assert.ok(line.includes('INFO'))
  assert.ok(line.includes('tested through the merge queue'))
})
