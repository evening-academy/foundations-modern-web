### Основные методы `console` в JavaScript

Вот 5 самых основных методов объекта `console` с короткими примерами:

#### 1. `console.log()`
**Описание:** Выводит сообщения общего назначения. Чаще всего используется для отладки и вывода информации.

```javascript
console.log("This is a log message"); // Вывод: This is a log message
```

#### 2. `console.error()`
**Описание:** Выводит сообщения об ошибках.

```javascript
console.error("This is an error message"); // Вывод: This is an error message
```

#### 3. `console.warn()`
**Описание:** Выводит предупреждающие сообщения.

```javascript
console.warn("This is a warning message"); // Вывод: This is a warning message
```

#### 4. `console.info()`
**Описание:** Выводит информационные сообщения.

```javascript
console.info("This is an info message"); // Вывод: This is an info message
```

#### 5. `console.table()`
**Описание:** Выводит данные в виде таблицы.

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.table(users); 
/*
Вывод:
┌─────────┬───────┬─────┐
│ (index) │ name  │ age │
├─────────┼───────┼─────┤
│    0    │ Alice │  25 │
│    1    │  Bob  │  30 │
└─────────┴───────┴─────┘
*/
```

Эти методы помогут вам эффективно выводить различную информацию в консоль для целей отладки и информирования.