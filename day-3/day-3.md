### day-3

* JavaScript30

  결과물 : [03.CSS Variables](https://jjh106.github.io/saturdayJS/day-3/03-CSSVariables/index.html)

  #### 1. CSS 변수

  ```css
  :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
  }
  ```

  > :root는 가상클래스로 문서의 최상위 루트요소를 나타낸다(HTML요소).
  >
  > CSS에서는 --변수명으로 변수를 선언한다.
  >
  > base : 기본 색상
  >
  > spacing : 기본 여백
  >
  > blur : 기본 흐림정도

  #### 2. 변수를 적용해 효과주기

  ```css
  img {
    padding: var(--spacing);
    filter: blur(var(--blur));
    background: var(--base);
  }

  .hl {
    color: var(--base);
  }
  ```

  > img요소에 padding값으로 --spacing을, filter값으로 --blur를, background값으로 --base를 적용함.
  >
  > 변수 적용은 var(--변수명)으로 한다.

  #### 3. 스크립트에서 변수 작동

  ```javascript
  const inputs = document.querySelectorAll('.controls input');

  var handleUpdate = function() {
    suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  ```

  > 1. inputs에 input요소들을 담는다.
  > 2. 범위를 지정하는 input요소 2개의 data-sizing="px"속성과 color-picker의 input요소를 suffix에 dataset.sizing과 공백으로 or연사자를 사용해 담는다.
  > 3. document.documentElement는 최상위 HTML요소를 지칭하며 setProperty style을 부여해 준다. 스타일의 내용은 input요소들의 name: value로 지정한다.
  > 4. input요소들에 change와 mousemove 이벤트가 일어났을 때 handleUpdate 함수를 실행하게 한다.

  #### 4. 추가 내용

  **dataset** : data-* 형식으로 이루어진 내용의 데이터정보를 호출한다.. 

  ​                  ex) data-sizing 속성은 dataset.sizing으로 호출.

  ​

