### day-15

* JavaScript30
  * 결과물 : [15. MouseMoveShadow](https://jjh106.github.io/saturdayJS/day-15/16-MouseMoveShadow/index.html)

#### 1. shadow 함수

```javascript
function shadow(e){
  cnost { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  
  if( this !== e.target ){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
}
```

> width는 hero의 가로길이, height는 hero의 세로길이
>
> x, y는 마우스 위치
>
> 마우스가 hero안의 h1 태그 위에 있을 때 true를 반환 즉, 마우스가 어디서든 x, y는 전체 뷰포트를 기준.

#### 2. 그림자 위치와 색상

```javascript
const xWalk = Math.round( (x / width * walk) - (walk / 2) );
const yWalk = Math.round( (y / height * walk) - (walk / 2) );

text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
`
```





