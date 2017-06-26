### day-1

- JavaScript30
  - 결과물 : [01.Drum Kit](https://jjh106.github.io/saturdayJS/day-1/01-JavaScriptDrumKit/index.html)
    - kbd요소 : 유저의 키보드 입력을 지정하는 태그.
    - data-key는 키코드에 해당하는 키를 눌러 실행 시키는지 설정하는 것으로 div요소와 aduio요소를 연결해준다.
    - audio.currentTime = 0으로 설정한 것은 키를 입력한 후 딜레이 없이 다시 소리가 나도록 설정한 것.
- HTML/CSS
  - 결과물 : [folio](https://jjh106.github.io/saturdayJS/day-1/folio/index.html)
    - 반응형으로 만들기 전 데스크탑 버전만 우선 만들어 보았다.
    - [class*="box-"] 내부의 텍스트를 가상 요소를 사용하여 적용했지만 텍스트를 이런 방법으로 사용한다면 접근성에 대한 이슈가 생긴다는 것을 간과하였다.  
    - ul > li 내부에 img요소 사용 시 의도치 않은 여백이 생긴다. img태그가 inline 요소이기 때문에 공백을 하나의 텍스트 노드로 인식하여 기본 행간이 적용되면서 여백이 생긴다. 이런 경우 img 요소에 display: block 사용하여 행간의 영향에서 벗어나 여백을 방지할 수 있다.
    - news의 화살표는 해당 뉴스 페이지로 이동하는 링크 버튼인데 이것은 관련된 기사와 함께 같은 division 내부에 위치 시켰어야 했다. 