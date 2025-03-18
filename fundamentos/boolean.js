let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //negação 2x inverte/cancela a negação

console.log('VERDADEIROS'); //Todos os números inteiros são verdadeiros, exceto o zero
console.log(!!3);
console.log(!!-1);
console.log(!!' '); //precisa ter pelo menos um espaço em branco
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("FALSOS")
console.log(!!0);
console.log(!!''); //precisa ser completamente vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
