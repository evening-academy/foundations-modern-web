const defaultValue = 'По умолчанию';
const someValue = null;

const result = 0 ?? defaultValue;

console.log(result); // Выведет: 'По умолчанию'