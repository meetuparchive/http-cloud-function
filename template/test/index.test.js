'use strict';

const proxyquire = require(`proxyquire`).noCallThru();
const sinon = require(`sinon`);
const test = require(`ava`);


function getSample () {
  return {
    program: proxyquire(`../`, {
      // fill in overrides here
    })
  };
}

test(`sends a response`, (t) => {
  const request = sinon.stub()
  const response = {
    send: sinon.spy()
  }
  const sample = getSample()
  sample.program.{{FUNCTION_NAME}}(request, response)
  t.true(response.send.calledWith(`hello world`))
});
