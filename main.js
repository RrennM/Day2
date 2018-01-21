var hello = "hello";
console.log(hello);

var reversed = "";

for (var i = hello.length - 1; i >= 0; i--) {
	reversed += hello[i];
}
console.log(reversed);

// i = 5 - 1 = 4
// 4, 3, 2, 1, 0
// o, l, l, e, h
