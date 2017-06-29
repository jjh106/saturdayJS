### day-2

- JavaScript30

  결과물 : [02.Clock](https://jjh106.github.io/saturdayJS/day-2/02-JSandCSSClock/index.html)

  이번 과제에서 사용한 setDate를 이용해 [전자시계](https://jjh106.github.io/MiniProject/clock/index.html) 를 만들었다. 

  #### 1. CSS에서의 효과

  ```css
  .hand {
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  }
  ```

  > transform-origin은 어떠한 변형효과를 줄 때 원점의 위치를 지정하는 속성으로 기본값은 엘리먼트의 왼쪽 위이며 x좌표와 y좌표를 입력가능하다. 100% 100% 적용 시 오른쪽 아래가 기준이 된다.
  >
  > transition-timing-function은 변화가 일어나는 속도를 설정하는 것으로 우리가 흔히 아는 ease-in-out같은 것들을 적용할 수 있다. 여기에서는 cubic-bezier를 적용했는데 이는 사용자가 함수 값을 직접 지정하는 것으로 자세한 것은 [여기](http://ielselog.blogspot.kr/2013/09/understand-css-trasition.html)에 가면 공부할 수 있다.

  #### 2. 시,분,초 바늘을 현재 시간에 맞추기 

  ```javascript
  var setDate = function() {
  			const secondHand     = document.querySelector('.second-hand'),
  			 	  minsHand       = document.querySelector('.min-hand'),
  			 	  hourHand       = document.querySelector('.hour-hand'),
  				  now            = new Date(),
  			 	  seconds        = now.getSeconds(),
  			 	  mins           = now.getMinutes(),
  			 	  hour           = now.getHours(),
  			 	  secondsDegrees = ((seconds / 60) * 360) + 90,
  				  minsDegrees    = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90,
  				  hourDegrees    = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  			
  			secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  			
  			minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  			hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  		}
  		setInterval(setDate, 1000);
  		setDate();
  ```

  > 1. now에 현재 시간에 대한 정보를 담는다
  > 2. 시, 분, 초 상수를 만든 후 각각의 각도를 계산해 이 또한 상수에 담는다.
  > 3. 각도를 transform: rotate 속성에 템플릿 문자열로 적용한다.
  > 4. setInterval로 setDate를 1초마다 실행한다.

  ---

- HTML/CSS
  - 웹접근성 연구소 홈페이지를 접근성에 맞게 마크업 하기
    - dl요소 내부의 dt와 dd는 하나의 a요소로 묶어 코드를 줄였어야 했다.
    - 항상 대체 텍스트를 생각하며 마크업을 해야겠다.
    - alt속성은 이미지를 볼 수 없는 환경에서 내용을 확인하게 하는 역할을 하고 title 속성은 해당 객체에 대한 제목이나 특성을 설명하기 위한 것으로 참고의 의미가 있다. 때문에 title속성을 alt 대신 사용하는 것은 바람직하지 않다.
    - alt 사용 시 주의사항
      - 명쾌하고 짦은 텍스트 작성
      - 파일명을 기입하는 법은 지양
      - 의미없는 이미지에는 공백으로 대체
      - 의미를 파악할 수 없는 구체적이지 않은 단어는 사용하지 않는다.