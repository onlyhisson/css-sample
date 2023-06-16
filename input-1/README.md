![Project thumbnail](./mov.gif)

#### placeholder 스타일 적용

- input focus시 placeholder 숨김

```
.input-group input::placeholder {
  transition: opacity 0.25;
}

.input-group input:focus::placeholder {
  opacity: 0;
}
```

<br>

#### 선택자: focus-within

- 예제에서는 input tag(자식 요소)에 포커스 된 경우 부모 요소에 스타일이 적용

<br>

#### 선택자: valid

- input 이나 form 요소들의 유효성 여부

```
<input name="age" type="number" value="5" min="18">
```

- 위의 경우 숫자이면서 18 이상이면 input:valid 선택자에 해당 됨
- https://developer.mozilla.org/en-US/docs/Web/CSS/:valid

<br>

#### 형제 선택자: a ~ b

- a 와 b가 같은 계층일 경우 a 태그 뒤의 모든 b 태그를 지정

<br>

#### 참조

[Julio Github](https://github.com/juliocodes-sm/Reels/tree/main/Inputs/02)
