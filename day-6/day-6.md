### day-6

* JavaScript30
  * 결과물: [06.Type Ahead](https://jjh106.github.io/saturdayJS/day-5/06-TypeAhead/index.html)

#### 1. json 데이터 받아오기

```javascript
const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(data));
```

> 1. cities라는 배열을 생성하고 fetch api를 사용해 endpoint(json파일)를 불러온다.

#### 2. findMatches 함수

*검색 시 일치하는 값을 찾아낸다.*

```javascript
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}
```

> 1. 정규표현식 생성자를 사용해 검색하는 문자 전체를 일치시키게 하고 대소문자를 구별하지 않게 한다.
> 2. filter메서드를 사용해 도시 이름과 주를 반환한다.

#### 3. displayMatches 함수

*검색한 값을 화면에 나타낸다.*

```javascript
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
```

> 1. matchArray에 검색 값을 담는다.
> 2. 검색한 도시나 주에 하이라이트 스타일을 주기 위해 replace를 사용해 새로운 html로 대체 시킨다.
> 3.  view에 보여질 리스트를 return한 후 공백으로 연결.
> 4. html에 담는다.
> 5. suggestions에 innerHTML로 삽입.

#### 4. numberWithCommas 함수

*인구수에 콤마를 삽입하여 가독성을 높여준다.*

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

> 정규표현식으로 stackoverflow에서 가져온 것이다.. 정규표현식 공부 후 다시 보자..!

#### 5. input에 이벤트를 부여하여 검색 시 해당하는 값을 화면에 출력

```javascript
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
```

