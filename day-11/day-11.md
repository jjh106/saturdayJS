### day-11

* JavaScript30
  * 결과물 : [11. Custom Video Player](https://jjh106.github.io/saturdayJS/day-11/11-CustomVideoPlayer/index.html)

#### 1. Get Our Elements

```javascript
const player      = document.querySelector('.player'),
      video       = player.querySelector('.viewer'),
      progress    = player.querySelector('.progress'),
      progressBar = player.querySelector('.progress__filled'),
      toggle      = player.querySelector('.toggle'),
      skipButtons = player.querySelectorAll('[data-skip]'),
      ranges      = player.querySelectorAll('.player__slider');
```

#### 2. togglePlay

```javascript
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

video.addEventListener('click', togglePlay);
```

> video가 멈춰 있으면 play하고 실행중이면 pause하는 함수
>
> 뷰포트 클릭 시 togglePlay함수가 실행되도록 이벤트 연결

#### 3. updateButton

```javascript
function updateButton(){
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContext = icon;
}

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
```

> 재생과 일시정지 버튼 클릭 시 이미지 토글하는 상수를 만들고 textContext로 삽입
>
> play와 pause시 실행되도록 이벤트 연결

#### 4. skip

```javascript
function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach(button => button.addEventListener('click', skip));
```

> 버튼 클릭 시 앞으로 25초 뒤로 10초 이동하는 함수

#### 5. handleRangeUpdate

```javascript
function handleRangeUpdate() { 
  video[this.name] = this.value; 
} 

ranges.forEach(range => range.addEventListener('click'), handleRangeUpadate); ranges.forEach(range => range.addEventListener('change'), handleRangeUpadate);
```

> 볼륨과 재생속도를 조절하는 range bar 함수

#### 6. handleProgress

```javascript
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`; 
} 

video.addEventListener('timeupdate', handleProgress);
```

> 재생 시간에 맞게 progress bar의 css를 변경하는 함수

#### 7. scrub

```javascript
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime; 
} 

let mousedown = false; progress.addEventListener('click', scrub); progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); progress.addEventListener('mousedown', () => mousedown = true); progress.addEventListener('mouseup', () => mousedown = false);
```

> progress bar를 이용해 재생 구간을 조절하는 함수