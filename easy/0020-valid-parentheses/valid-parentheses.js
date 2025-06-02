function isValid(s) {
    var stack = [];
    var mapping = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char in mapping) {
            var top_1 = stack.length > 0 ? stack.pop() : "*"; // mengambil char paling atas dari stack kalo ndak kosong
            // mencocokkan pasangan parentheses
            if (mapping[char] !== top_1) {
                return false;
            }
        }
        else {
            // jika dia tanda buka maka masukkan ke stack
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("()[]{}"));
