const { recursiveHandler } = require("laconia-handler");
const tracker = require("laconia-test-helper").tracker("recursive");

module.exports.handler = recursiveHandler((event, context, recurse) => {
  return tracker.tick().then(_ => {
    if (event.input !== 3) {
      return recurse({ input: event.input + 1 });
    }
  });
});