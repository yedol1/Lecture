/\* ### css 단위
1.px 2.% 3.em - 지정된 사이즈를 기반으로 배수로 계산된 크기 (중첩O)4.rem - 최상위요소 (HTML) 사이즈를 기준 (중첩X , 중첩적용안되어서 자주쓰임)

### Viewport 단위

1. vw 2. vh 3. vmin 4. vmax ( 간단히 퍼센테이지로 이해하는게 좋음 )

\*{
전체 selector
}

[속성=값] : 값 이 정확히 속성 을 가지는 모든 태그
[속성~=값] : 값 이 속성(공백으로 분리) 을 단어로 포함하는 모든 태그
[속성|=값] : 값 이 속성 이거나 속성으로 시작하면서 - 문자가 곧바로 뒤에 붙는 모든 태그
[속성^=값] : 태그 의 요소중 속성 의 값이 값 으로 시작하는 모든 태그
[속성$=값] : 태그 의 요소중 속성 의 값이 값 으로 끝나는 모든 태그
[속성*=값] : 태그 의 요소중 속성 의 값이 값 을 포함하는 모든 태그

후손 셀렉터 : 스페이스 로 표시
자식 셀렉터 : >
인접 형제 셀렉터 : +
일반 형제 셀렉터 : ~

### 가상 클래스

- :link - 방문하지 않은 링크가 적용된 요소
- :visited - 방문한 링크가 적용된 요소
- :hover - 마우스커서가 올라간 상태
- :active - 링크요소를 클릭한 상태
- :focus - 특정요소에 포커스가 있는상태

### 구조 가상 클래스 셀렉터

- :first-child : 부모의 첫번째 자식요소 (중간에 다른태그가 있더라도 카운팅)
- :last-child : 부모의 마지막 자식인 요소 선택 (중간에 다른태그가 있더라도 카운팅)
- :nth-child(n) : 부모의 첫번째 자식요소 부터시작 n번째 요소 선택 ( 0 이 첫번째가 아니라 1이 첫번째) (중간에 다른태그가 있더라도 카운팅)
- :nth-last-child(n) : 부모의 마지막 자식요소 부터시작 n번째 요소 선택 ( 0 이 첫번째가 아니라 1이 첫번째) (중간에 다른태그가 있더라도 카운팅)
- :first-of-type : :first-child 와 비슷하지만 다른태그가 있으면 카운팅 X
- :last-of-type : :last-child 와 비슷하지만 다른태그가 있으면 카운팅 X
- :nth-of-type(n) : :nth-child(n) 와 비슷하지만 다른태그가 있으면 카운팅 X
- :nth-last-of-type(n) : :nth-last-child(n) 와 비슷하지만 다른태그가 있으면 카운팅 X

### css 적용 시, 모든block 요소는 box-sizing : border-box 로 설정하는것이 일반적임

_,
_::before,
\*::after{
box-sizing: border-box;
}

background-repeat 을 사용시
background-repeat:repeat space; 와 같이 가로, 세로 를 따로 지정가능하다. 또한 여러개의 이미지 repeat을 설정할시에는 ','로 구분하여 설정가능하다.

### background 단축 프로퍼티

background: color image repeat attachment position 을 통하여 한번에 지정가능

### block 특성

- 항상 새로운 라인
- 화면 너비 전체 차지
- width height margin padding 프로퍼티 설정 가능
- block 요소 안에 inline
- div , h1 ~ h6 , p, ol, ul, li

### inline 특성

- 새로운라인으로 시작 X
- content 너비만큼 가로폭 차지
- 프로퍼티 지정 불가
- 요소 뒤에 공백이 있는 경우, 정의하지 않은 공간이 자동 지정
- span a strong img br input select textarea button 등등

### display 프로퍼티로 서로의 특성 변경 가능

display: none; ( 해당요소가 차지하는 공간까지 사라짐) vs visibility : hidden; ( 해당 요소가 차지하는 공간은 남겨둠 )

font : font-style font-variant font-weight font-size(필수)/line-height font-family(필수)

letter-spacing : 글자마다
word-spacing : 단어마다

z-index 값이 클수록 먼저보임

### 주요 transition-timing-function 프로퍼티 값

- ease
- linear
- ease-in
- ease-out
- ease-in-out
- step-start
- step-end
- steps(n,start|end): n 단계로 나누어서 변화
- cubic-bezier(n,n,n,n) ![참고사이트](https://dbaron.org/css/timing-function-graphs)

@keyframes ball {
0% {
/_ keyframe _/
top: 0;
}
100% {
/_ keyframe _/
top: 300px;
}
}
/\*

### animation 단축 프로퍼티

animation: name duration timing-function delay iteration-count direction fill-mode play-state _/
/_
css float

float:left - 왼쪽 수평정렬
float:right - 오른쪽으로 수평정렬

이는 높이를 잘 인지를 못하여 겹치는 현상 발생 -> 이러한 현상을 clear 를 사용하여 해결

float 특성

- display 가 flex 로 설정이 되어있지 않는다면 기본적으로 block 특성으로 변경
- 요소의 크기만큼 width 가 설정되어, display를 마치 inline-block 으로 선언해준것과 동일하게 동작

주요 프로퍼티 상속 여부

- 가능 : text-align , line-height , color , font , visibility , opacity
- 불가능 : width, height, margin, padding border, display, box-sizing , background, vertical-align, position, z-index, overflow, float

css 우선순위 : !important ( 복잡도를 더 높일 수 있어서, 현업에서는 사용제한 ) > inline style > id > class > tag

css 우선순위 점수 : 첫번째 자리 ( style ) , 두번째 자리 ( id 갯수 ) , 세번째 자리 ( class 등 의 갯수) , 네번째 자리 ( tag 등 의 갯수 )

viewport - 디스플레이 크기에 따라 해상도 (pixel) 이 달라지는 현상을 해결하기위해 도입이 되었다.

PPI - 1인치에 있는 픽셀의 갯수
device-width = 디스플레이 해상도 너비 / pixel density ( density : 40픽셀에 보여질 이미지를 제작하기 위해, 80픽셀로 제작을 한다면, 이를 density 2.0 혹은 200% 라고 한다.)

미디어 쿼리 ( @media )
@media media-type and (media-feature-rule) {
/_ css rules go here _/
}
/\* media-type : 보통 all 혹은 screen ( all , print, screen, speech)
media-feature-rule : width, height, device-width, device-height, orientation, aspect-ratio

논리 연산자 : and, not, only(구형 브라우저에서 공백 같은 경우를 인지못하고 적용이 안되어있는 경우가 있는데, 이를 방지하기 위해 사용), or(',')

flexbox - 상위부모요소 인 flex container 와, 하위 부모 요소 인 flex item 들로 고성되어 있다.

text박스 가 수직으로 정렬 되기 위한 팁 - class 에 적용된 height 과 line-height 을 동일하게 설정하면 수직정렬됨
ㄴflexbox를 활용하면, justify-content:center; align-content:center; 를 활용하여 정렬 가능

flex-wrap : flex 아이템들을 1줄에 배치 할지, 아니면 여러줄에 걸쳐서 배치할지

flex-flow(단축 프러퍼티) : flex-direction flex-wrap;

justify-content : 주축을 기반으로 한 정렬 방법

align-items : 교차 축 기반 정렬 방법 ( 주축의 반대 )
align-content : 교차 축 기반 정렬 방법 ( 주축의 반대 )

order : flex-item 의 배치 순서 ( 높을수록 우선순위 )
flex-grow : 동일한 라인에 있는 아이템들이 설정한 비율로 늘어남 ( 비율에 따라 크기설정 )
flex-shrink : 동일한 라인에 있는 아이템들이 설정한 비율로 줄어듬 ( 비율에 따라 크기설정 )
flex-basis : 초기 크기
flex : flex-grow flex-shrink flex-basis ( 인터넷 호환 이슈로 잘 사용되지 않음 )

align-self (개별 수직/수평 정렬 설정) : flex-start | flex-end | center | baseline | stretch

\*/
