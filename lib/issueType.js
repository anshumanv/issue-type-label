async function issueType (context) {
  const { title } = context.payload.issue

  // Determine the issue type
  const type = getType(title)

  // If any type exists add a label for it
  if (type) {
    // TODO: check if a label already exists when the issue is updated and thus remove it and add new one.
    return context.github.issues.addLabels(context.issue({labels: [type]}))
  } else { // Else add a comment to ask the user to add an issue type. TODO: make it configurable
    return context.github.issues.createComment(context.issue({body: 'Hey! Thanks for opening this up, please edit the issue title to determine it\'s type within square brackets.'}))
  }
}

function getType (title) {
  return title.match(/\[(.*?)\]/) ? title.match(/\[(.*?)\]/)[1] : false
}

module.exports = issueType
