### day-8

* JavaScript30
  * 결과물 : [08.FunwithHTML5Canvas](https://jjh106.github.io/saturdayJS/day-8/08-FunwithHTML5Canvas/index.html)

#### 1. 기본 설정

```javascript
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55'; 
ctx.lineJoin = 'round'; 
ctx.lineCap = 'round'; 
ctx.lineWidth = 100;
```

> getContext('2d') : 그리기 대상을 찾는 함수
>
> strokeStyle : 윤곽선의 색
>
> lineJoin : 두 선이 만나는 지점의 모양
>
> lineCap : 선 끝의 모양
>
> lineWidth : 선의 두께

#### 2. 위치 추적을 위한 변수 설정

```javascript
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
```

> isDrawing : 현재 그림을 그리고 있는지의 여부
>
> lastX, lastY : 시작 지점의 좌표
>
> hue : 기본 색상
>
> direction : 굵기의 방향

#### 3. 그리기 위한 함수 만들기

```javascript
function draw(e) {
  if(!isDrawing) return;
  
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; 
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  hue++;
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
```

> moused down이 이루어지지 않을 때 함수를 리턴하고 종료시킨다.
>
> 윤곽선의 색을 hue 변수를 이용해 실시간으로 변경해준다.
>
> beginPath() : 선의 시작점
>
> moveTo(lastX, lastY) : 그리기 시작할 좌표
>
> lineTo(e.offsetX, e.offsetY) : 그리기 종료 지점 좌표
>
> stroke() : 시작부터 종료까지 선을 이어준다.
>
> 선의 굵기가 100이상 or 1이하일 때 direction을 true, false로 변경해 조건문으로 direction이 true이면 굵기가 두꺼워지고 false이면 굵기가 얇아지게 만든다.

#### 4. 이벤트 연결

```javascript
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

> 마우스를 누르면 그리기 시작
>
> 마우스가 움직이면 draw함수 실행
>
> 마우스를 떼거나 뷰포트를 벗어나면 그리기 종료.

