### day-5

* JavaScript30
  * 결과물 : [05.Flex Panel Gallery](https://jjh106.github.io/saturdayJS/day-5/05.FlexPanelGallery/index.html)


#### 1. panels에 display: flex 적용 

```css
.panels {
  display: flex;
}
```

> 내부의 panel들은 flex의 영향을 받아 세로로 배치된다.

#### 2. panel 크기, 위치 조절 

```css
.panel {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

> 1. display를 felx로 설정한다.
> 2. flex를 1로 설정하여 브라우저 크기에 맞춰 모든 패널의 크기가 동일하게 설정된다.
> 3. justify-content: center : 수평정렬
> 4. align-items: center : 수직정렬
> 5. flex-direction: column : 축을 세로로 변경

#### 3. panel 효과 적용

```css
.panel > *:first-child {
  transform: translateY(-100%);
}
.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

> 1. panel의 첫 번째 자식요소의 수직 위치를 100% 위로 이동 시켜 숨긴다.
> 2. panel의 두 번째 자식요소의 수직 위치를 100% 아래로 이동 시켜 숨긴다.
> 3. open-active 클래스가 부여되면 원래 위치로 돌아오도록 설정.

#### 4. 스크립트로 효과 적용

```javascript
const panels = document.querySelectorAll('.panel');

	var toggleOpen = function() {
		this.classList.toggle('open');
	}

	var toggleActive = function(e) {
		if(e.propertyName.includes('flex')) {
			this.classList.toggle('open-active');
		}
	}

	panels.forEach(panel => panel.addEventListener('click', toggleOpen));

	panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

> 1. panel들을 panels에 담는다.
> 2. toggleOpen() : 이벤트 발생 시 open이 토글되는 함수.
> 3. toggleActive() : 속성 중 flex가 있다면 open-active 클래스가 토글되는 함수.
> 4. 각 패널에 대해 클릭 시 toggleOpen 함수 실행.
> 5. 각 패널에 대해 변화 종료 시(transitionend) toggleActive 함수 실행.