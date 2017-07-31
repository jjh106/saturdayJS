### day-4

* JavaScript30

#### 1. filter 

*var new_array = arr.filter(callback[, thisArg])*

* *callback은 세 인수와 함께 호출된다.*
  * *요소값*
  * *요소 인덱스*
  * *순회되는 배열 객체*

*배열 내 각 요소에 대해 callback 함수가 true로 강제하는 조건에 맞는 모든 값이 있는 새로운 배열을 생성한다.*

* ES5

```javascript
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1600) {
	return true; // keep it!!
  }
});
```

* ES6

```javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

> inventors 배열 중 1500년대에 태어난 사람을 반환.
>
> 배열 내 요소의 값들 중 year이 1500이상이고 1600미만인 것들을 추출하여 fifteen에 담는다. 

---

#### 2. map 

*var new_array = arr.map(callback[, thisArg])*

* *callback함수는 새로운 배열 요소를 생성하는 함수로 세 가지 인수를 가진다.*
  * *배열의 요소 중 현재 처리되고 있는 요소*
  * *처리되고 있는 요소의 인덱스*
  * *map 메소드가 적용되는 배열*
* *thisArg : 선택항목으로 callback을 실행할 때 this로 사용되는 값이다.*

*map 메소드는 배열 내의 모든 요소 각각에 대해 callback을 호출하여 그 결과로 새로운 배열을 반환한다.*

* ES6

```javascript
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

> inventors 배열 내 값들의 first와 last를 뽑아 공백으로 연결하여 새로운 배열을 만든다.

---

#### 3. sort

*arr.sort(compareFunction)*

*배열의 요소를 오름차순 또는 내림차순으로 정렬한다.*

* ES5

```javascript
const ordered = inventors.sort(function(firstPerson, secondPerson) {
  if(firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
});
```

* ES6

```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1 );
```

> inventors 배열의 값들을 태어난 순서대로 정렬한다.
>
> 비교하는 값 중 a의 year가 b의 year보다 크면 1을 반환, 작으면 -1을 반환한다.

---

#### 4. reduce

*arr.reduce(callback[, initialValue])*

*배열의 모든 요소에 대해 지정된 콜백을 호출하고 반환 값은 결과에 누적되어 다음 콜백함수의 인수로 제공된다.*

* ES6

```javascript
const totalYear = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
```

> inventors 배열 값들의 총 수명을 구한다.
>
> total에 inventors 배열 값들의 수명을 누적으로 더해준다.
>
> 0은 초기값.