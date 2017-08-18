### day-10

* JavaScript30
  * 결과물 : [10.Hold Shift and Check Checkboxes](https://jjh106.github.io/saturdayJS/day-10/10-HoldShiftandCheckCheckboxes/index.html)

#### 1. 변수 생성

```javascript
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
```

> inbox 하위의 체크박스를 상수에 담는다. 
>
> 변수 lastChecked 선언

#### 2. handleCheck 함수

```javascript
function handleCheck(e){
	let inBetween = false;
	if( e.shiftKey && this.checked ){
		checkboxes.forEach(checkbox => {
			if( checkbox === this || checkbox === lastChecked ){
				inBetween = !inBetween;
			}
			if( inBetween ){
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}
```

> inBetween에 false 할당 후 shift키를 누르고 그것이 체크되어 있다면 체크박스를 순회하며 다시 if문을 실행
>
> shift를 누르고 클릭하면 하위의 모든 인풋을 반환하고 두 번째 버튼을 shift를 누르고 클릭하면 그 사이의 모든 인풋을 반환한다. 

#### 3. 함수 호출

```javascript
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```

