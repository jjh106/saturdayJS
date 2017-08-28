### day-12

* JavaScript30
  * 결과물: [12. Slide in on Scroll](https://jjh106.github.io/saturdayJS/day-12/13-SlideinonScroll/index.html)

#### 1. 이미지 요소 찾기

```javascript
const sliderImages = document.querySelectorAll('.slide-in');
```

#### 2. checkSlide 함수

```javascript
function checkSlide(e){
  sliderImages.forEach(sliderImage => {
	  // half way through the image
	  const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
	  // bottom of the image
	  const imageBottom = sliderImage.offsetTop + sliderImage.height;
	  const isHalfShown = slideInAt > sliderImage.offsetTop;
	  const isNotScrolledPast = window.scrollY < imageBottom;
	  if(isHalfShown && isNotScrolledPast) {
		sliderImage.classList.add('active');
	  } else {
		sliderImage.classList.remove('active');
	  }
   });
}
```

> slideInAt : 현재 뷰포트 기준으로 세로길이와 스크롤한 길이의 합에서 이미지 길이의 절반을 뺀 값.
>
> imageBottom : 이미지의 최상단 위치 좌표에 이미지 높이를 더한 값, 즉 이미지의 최하단 값이다.
>
> 이미지의 중간부터 맨 아래부분 사이에 스크롤을 할 때 이미지가 나오고 사라진다.

#### 3. 함수 호출

```javascript
window.addEventListener('scroll', debounce(checkSlide));
```

