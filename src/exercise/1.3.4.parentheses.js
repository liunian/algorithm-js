var Stack = require('../stack');

function parenthesesMatch(str) {
  var stack = new Stack();

  var matches = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  for (var c of str) {
    switch (c) {
      case '[':
      case '{':
      case '(':
        stack.push(c);
        break;
      case ']':
      case '}':
      case ')':
        if (!stack.isEmpty() && stack.top() === matches[c]) {
          stack.pop();
        } else {
          stack.push(c);
        }
        break;
      default:
        stack.push(c);
        break;
    }
  }

  return stack.isEmpty();
}

module.exports = parenthesesMatch;