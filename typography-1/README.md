![Project thumbnail](./mov.gif)

#### animation: reveal 1s var(--total) forwards;

- var(--total) 만큼 지연된 후에 1s 동안 reveal 키프레임 애니메이션 처리 후 키프레임의 to 상태를 유지
- 예제에서는 글씨가 배경화면과 같은 색에서 흰색(#fff)으로 바뀌고 이 상태를 유지
- forwards => animation-fill-mode
- reveal 애니메이션의 마지막 keyframe에 의해 설정된 계산 값을 유지
- https://developer.mozilla.org/ko/docs/Web/CSS/animation-fill-mode

<br>

#### 참조

[Julio Github](https://github.com/juliocodes-sm/Reels/tree/main/Typography/01)
