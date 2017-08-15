### day-9

* JavaScript30
  * 결과물 : [09.Dev Tools Domination](https://jjh106.github.io/saturdayJS/day-9/09-DevToolsDomination/index.html)

#### 1. Regular

```javascript
console.log('hello')
```

> 기본 콘솔

```javascript
console.log('Hello I am %s!', 'jjh');
```

> $s에 jjh를 대입

```javascript
console.log('%c I am some great text', 'font-size:50px; background:red');
```

> %c를 사용해 스타일을 적용

#### 2. Warn,Error,Info

```javascript
console.warn('OH NOOO');
```

> 경고창 표시

```javascript
console.error('Shit!');
```

> 에러창 표시

```javascript
console.info('Crocodiles eat 3-4 people per year');
```

> 정보 표시

#### 3. Test, clear, Viewing DOM Elements

```javascript
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch!'), 'That is wrong');
```

> assert의 첫 인자가 false일 때 메시지 출력.

```javascript
console.clear();
```

> 콘솔 내용을 모두 지움.

```javascript
console.log(p);
console.dir(p);
```

> 해당 엘리먼트를 보여준다.
>
> 해당 엘리먼트의 모든 속성을 보여준다.

#### 4. Grouping together, counting, timing

```javascript
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
```

> group와 groupEnd 사이를 그룹으로 매핑해준다.

```javascript
console.count('Wes'); 
console.count('Wes'); 
console.count('Steve'); 
console.count('Steve'); 
console.count('Wes'); 
console.count('Steve'); 
console.count('Wes'); 
console.count('Steve'); 
console.count('Steve'); 
console.count('Steve'); 
console.count('Steve'); 
console.count('Steve');
```

> 같은 인자의 갯수를 센다.

```javascript
console.time('fetching data'); 
fetch('https://api.github.com/users/wesbos') 
  .then(data => data.json()) 
  .then(data => { 
    console.timeEnd('fetching data'); 
    console.log(data); 
  }); 
console.table(dogs);
```

> time과 timeEnd 사이에 데이터를 받아와 타이머를 작동시킨다.