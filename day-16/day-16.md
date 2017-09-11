### day-16

* JavaScript30
  * 결과물 : [16.sort Without Articles](https://jjh106.github.io/saturdayJS/day-16/17-sortWithoutArticles/index.html)

#### 1. strip 함수

```javascript
function strip(bandName){
  return bandName.replace(/^(a |the |an)/i,'').trim();
}
```

> 인자로 bandName을 넣어 내용중 a, the, an을 공백으로 변환하고 제거하는 함수.

#### 2. sort하기

```javascript
const sortedBand = bands.sort( (a,b) => strip(a) > strip(b) ? 1 : -1 );
```

> 알파벳 순서대로 정렬

#### 3. 매핑

```javascript
document.querySelector('#bands').innerHTML =
  sortedBands
    .map( band => `<li>${band}</li>` )
    .join('');
```

> 리스트에 하나씩 담아 bands를 id로 갖는 요소에 매핑한다.