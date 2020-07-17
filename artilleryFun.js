function setId (context, events, done) {
  context.vars.id = Math.floor(Math.random() * 9999999) + 1;
  return done();
}

module.exports = {
  setId,
}