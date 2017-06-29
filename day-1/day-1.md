### day-1

- JavaScript30

  결과물 : [01.Drum Kit](https://jjh106.github.io/saturdayJS/day-1/01-JavaScriptDrumKit/index.html)

  #### 1. 키 입력 시 소리와 액션 추가하는 함수 생성

  ```javascript
  var playSound = function(e) {
      var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if( !audio ) {
        return;
      }
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  ```

  > 1. audio와 key에 ES6 템플릿문자열을 사용해 입력한 키와 일치하는 data-key 속성의 키코드를 담아주고 일치하는 audio가 없다면 그냥 리턴을 한다. 
  > 2. 키 입력 후 다시 입력할 때까지 딜레이가 생기지 않도록 즉, 현재 위치를 0초로 설정해 소리가 끝나기 전에 연속으로 입력 가능하도록 설정함.
  > 3. 일치한다면 key에 playing 클래스를 추가한다.

  #### 2. 입력 해제 시 효과 종료하는 함수 생성

  ```javascript
  var removeTransition = function(e) {
      if( e.propertyName !== 'transform' ) {
        return;
      }
      this.classList.remove('playing');
    }
  ```

  > 1. 입력한 키의 속성 중 transform이 없으면 그냥 리턴한다.
  > 2. 있다면 추가했던 playing 클래스를 제거하여 효과를 해제한다.

  #### 3. removeTransition 함수 적용

  ```javascript
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  ```

  > 1. key 클래스를 가진 요소들을 keys에 배열로 담는다.
  > 2. forEach를 사용해 각각의 key에 변화가 끝나면(transitionend) removeTransition 함수를 실행한다.

  #### 4. 추가 내용

  **kbd요소** : 유저의 키보드 입력을 지정하는 태그.

  **data-key** : 사용자 정의 속성으로서, 키코드에 해당하는 키(class="key")와 audio 요소를 연결해 준다.

  ---

- HTML/CSS
  - 결과물 : [folio](https://jjh106.github.io/MiniProject/folio/index.html)
    - ~~반응형으로 만들기 전 데스크탑 버전만 우선 만들어 보았다.~~ (해결)
    - ~~[class*="box-"] 내부의 텍스트를 가상 요소를 사용하여 적용했지만 텍스트를 이런 방법으로 사용한다면 접근성에 대한 이슈가 생긴다는 것을 간과하였다.~~ (해결)
    - ul > li 내부에 img요소 사용 시 의도치 않은 여백이 생긴다. img태그가 inline 요소이기 때문에 공백을 하나의 텍스트 노드로 인식하여 기본 행간이 적용되면서 여백이 생긴다. 이런 경우 img 요소에 display: block 사용하여 행간의 영향에서 벗어나 여백을 방지할 수 있다. 또 하나의 방법으로는 이미지를 감싸고 있는 부모요소에게 font-size : 0을 부여하면 해결된다.
    - news의 화살표는 해당 뉴스 페이지로 이동하는 링크 버튼인데 이것은 관련된 기사와 함께 같은 division 내부에 위치 시켰어야 했다. 