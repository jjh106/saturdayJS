### day-14

JavaScript30

- 결과물: [14. LocalStorage](https://jjh106.github.io/saturdayJS/day-14/15-LocalStorage/index.html)

#### 1. addItem 함수(아이템을 추가하는 함수)

```javascript
function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
	text,
	done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
```

> input의 value 값을 text에 저장한 후 item 객체의 text에 담는다.
>
> 빈 배열(items)에 item을 담는다. 

#### 2. populateList함수(추가한 아이템을 리스트로 보여주는 함수) 

```javascript
function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
	return `
	  <li>
	    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
	    <label for="item${i}">${plate.text}</label>
	  </li>
	`;
  }).join('');
}
```

#### 3. toggleDone함수(done의 여부를 저장하는 함수)

```javascript
function toggleDone(e){
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}
```

> 체크된 항목들은 done값을 true로 저장해 다시 값을 불러올 때 체크되어 있는 상태로 불러와 지도록 함수 생성 및 로컬스토리지에 저장.

---

##### * localStorage

로컬스토리지 메서드를 사용하기 위해 사용한다.

setItem, getItem - 로컬스토리지에 내용을 저장, 불러오는 메서드