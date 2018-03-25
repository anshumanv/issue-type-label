const issueType = require('./lib/issueType')

module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')

  // Listen to the issue created/updated event
  const events = ['issues.opened', 'issues.edited']
  robot.on(events, async context => {
    issueType(context)
  })
}
