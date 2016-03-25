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
        // 仅做括号匹配，非括号直接忽略
        break;
    }
  }

  return stack.isEmpty();
}

module.exports = parenthesesMatch;