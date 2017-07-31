### day-7

* JavaScript30

#### 1. some()

```javascript
const isAdult = people.some( person => ( (new Date()).getFullYear() ) - person.year >= 19 );

console.log(isAdult);
```

> people 배열에서 19살 이상이 한 명 이상 있는지 알기 위한 메서드로 조건에 맞는 것이 있으면 true를 반환.
>
> 현재 시간을 받아와 people의 year을 뺐을 때 19살 이상이 있는지 찾는다.

#### 2. every()

```javascript
const allAdults = people.every( person => ( (new Date()).getFullYear() ) - person.year >= 19 );

console.log(allAdults);
```

> people 의 모두가 19살 이상인지 알기 위한 메서드로 조건이 맞다면 true를 반환한다.

#### 3. find()

```javascript
const comment = comments.find( comment => comment.id === 823423 );
```

> comments에서 아이디가 823423인 값이 있는지 찾는다.

#### 4. findIndex(), slice()

```javascript
const index = comments.findIndex( comment => comment.id === 823423 );
console.log(index);

const newComments = [
  ...commnets.slice(0, index),
  ...comments.slice(index + 1)
];
console.log(newComments);
```

> comments에서 아이디가 823423인 값을 찾아 index를 반환.
>
> 새로운 배열 newComments를 만들어 823423인 값을 빼고 나머지를 넣는다.

---

#### 추가 내용

##### * Rest Parameters

함수 정의 시 매개변수에 ...를 붙여 마지막 매개변수를 뜻한다.(함수에 실제로 전달되는 인수는 제외)

```javascript
var test = function(a, b, ...theArgs) {
  console.log(a);
  console.log(b);
  console.log(theArgs);
}
test(1, 2, 3, 4, 5);

// 1
// 2
// [3, 4, 5]
```

> rest parameter는 이름을 정하지 않은 파라미터이고 arguments는 함수로 전달된 모든 파라미터를 뜻한다.
>
> rest parameter는 array이기 때문에 배열의 메서드 사용이 가능하다.





