# saturdayJS

*자바스크립트 공부를 우선으로 하며 html5, css3를 추가로 스터디하는 모임.*

### # JavaScript

- 이론

  개인 공부 또는 실습을 하며 이해가 안되는 부분을 토론하며 해결.

- 실습

  1주일 기준 javascript30 chapter1~2개 공부

### # HTML / CSS

- 준비된 PSD파일 또는 실습해보고 싶은 웹사이트를 만들고 서로의 코드를 보며 토론한다.
- 간단하고 재미있는 액티비티를 찾아서 해보기.
- javascript30에 준비되어 있는 html, css를 지우고 자신의 코드로 만들어 보기. 

------

### day-1

- JavaScript
  - 결과물 : [01.Drum Kit](https://jjh106.github.io/saturdayJS/javascript/01-JavaScriptDrumKit/index.html)
- HTML/CSS
  - 결과물 : [folio](https://jjh106.github.io/saturdayJS/html+css/folio/index.html)
    - 반응형으로 만들기 전 데스크탑 버전만 우선 만들어 보았다.
    - [class*="box-"] 내부의 텍스트를 가상 요소를 사용하여 적용했지만 텍스트를 이런 방법으로 사용한다면 접근성에 대한 이슈가 생긴다는 것을 간과하였다.  
    - ul > li 내부에 img요소 사용 시 의도치 않은 여백이 생긴다. img태그가 inline 요소이기 때문에 공백을 하나의 텍스트 노드로 인식하여 기본 행간이 적용되면서 여백이 생긴다. 이런 경우 img 요소에 display: block 사용하여 행간의 영향에서 벗어나 여백을 방지할 수 있다.
    - news의 화살표는 해당 뉴스 페이지로 이동하는 링크 버튼인데 이것은 관련된 기사와 함께 같은 division 내부에 위치 시켰어야 했다. 

------



