### day-13

#### 1. string, number, boolean 

```javascript
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100
```

> string, number, boolean같은 경우 원시타입이기 때문에 데이터의 값이 복사된다.
>
> null, undefined도 원시타입.

#### 2. Array

```javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;

console.log(players, team); 
// ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Poppy']

team[3] = 'Lux';
console.log(players, team);
// ['Wes', 'Sarah', 'Ryan', 'Lux'] ['Wes', 'Sarah', 'Ryan', 'Lux']
```

> team[3]으로 team의 배열만 변경하고 싶었지만 players도 함께 바꼈다.
>
> Array, function, Object는 참조타입이기 때문에 값이 참조된다.

#### 3. 배열의 참조를 막는 방법

```javascript
// 1
const team2 = players.slice();

// 2
const team3 = [].concat(players);

// 3
const team4 = [...players];

// 4
const team5 = Array.from(players);
```

> 위의 네 가지 방법으로 새로운 배열을 생성하여 기존 배열 값의 변경 없이 참조가 가능하다.

#### 4. Object

```javascript
const person = {
  name: 'Wes Bos',
  age: 80
};

const captain = person;
captain.number = 99;

console.log(person) // {name: 'Wes Bos', age: 80, number: 99}
```

#### 5. 객체의 참조를 막는 방법

```javascript
// 1
const cap2 = Object.assign({}, person, {number: 99, age: 12});

// 2
const cap3 = {...person};
```

```javascript
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = 'Hi'
```

---

##### * assign : 열거 가능한 객체를 복사할 때 사용

