const Stack = require('../stack');

function parenthesesMatch(str) {
	const stack = new Stack();

	const matches = {
		']': '[',
		'}': '{',
		')': '('
	};

	for (let c of str) {
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
