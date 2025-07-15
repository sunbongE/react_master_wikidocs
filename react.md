# JSX

JavaScript XML

<details>
<summary>렌더링</summary>

# 렌더링

> 컴포넌트의 상태나 props가 바뀔때, 그것을 바탕으로 UI를 만드는 작업

1. 리액트에서 함수 실행
2. 스냅샷 계산
3. DOM TREE 갱신

스냅샷이 뭐지..

> 리액트에서 스탭샷은 UI의 특정 시점의 상태를 나타내는 개념이다. <br/> **⚠️상태 변경은 비동기적으로 처리**

---

스냅샷의 역할

- 상태 관리: 스냅샷은 컴포넌트의 상태를 관리하고, 상태 변화에 따라 UI를 적절히 업데이트하는 데 중요한 역할을 합니다.
- 효율적인 업데이트: React는 이전 스냅샷과 새 스냅샷을 비교하여 필요한 부분만을 업데이트하여 성능을 최적화합니다.

아무튼 스냅샷 때문에

```JS
function increment() {
    setScore(score + 1);
  }
```

이런 함수가 있고, 이를 +3 처럼 하려고 3번 연속 호출하는 함수를 실행하면,
+1 만 된다고함.

왜냐면 스냅샷으로 이전 상태 그러니까, 0이었던 상태를 유지하고 있기 때문인데
이 문제를 해결하려면, 업데이트함수를 호출해야 한다고 함.
**업데이트 함수를 호출하면 가장 최신 상태값으로 업데이트하기 때문에 해결되는거임.**

```js
function increment() {
  setScore((s) => s + 1); // 이런식으로..
}
```

뭐 좋을게 있어서 스냅샷을 사용하는가?

- 상태 일괄 처리 최적화 때문이라고 함.
- 여러 setState가 모이면, 한 번만 리렌더링해서 성능을 높인다 함.
  아니 그러면, 처음 `setScore(score+1)` 이것도 3번 호출하면 쌓여서 됐어야하는거 아닌가?
- 아니요.. 쌓이기는 하지만, `score`값이 이전 상태인 0으로 고정되어 있어서 결국 1 증가하게 된 것이다.
  그럼 업데이트 함수만 많~이 쓰면, 성능 최적화는 없는거나 다름없나?
- 그건 또 아니라함... !?!?
- 리액트는 **여러 개의 setState(함수형/비함수형 모두 포함)를 "batch(일괄처리)"**해서
  한 번에 처리해줌. 그래서 렌더링 1번만 발생.. 그러니까 여기서 말하는 최적화는 렌더링을 필요이상으로 많이 하는걸 방지하는거라고 생각해도 될 것 같다.

참 어려운 개념이면서 재미는 있네여..ㅎ

</details>

<details>
<summary>useImmer을 사용한 객체 업데이트</summary>
https://github.com/immerjs/use-immer

설치 : `npm install immer use-immer`
사용 : `import {useImmer} from use-immer`

useState으로 객체를 업데이트할 때, 변경되기 전 객체를 복사해서 새로운 객체를 만들고, 덮어씌우는 형식으로 객체를 업데이트한다.
이 과정에서 코드가 길어지고 코드 가독성 저하로 이어진다.
이런 문제를 어느정도 해결할 수 있는 것이 useImmer이라고 생각하면 된다.
사용하든 안하든 자유다.

코드로 보는 차이

```js
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];
```

### useState 사용해서 배열에 있는 값 수정

```js
const [list, setList] = useState(initalList);

function handleToggle(id, nextSeen) {
  setList(
    list.map((obj) => {
      if (obj.id === id) {
        return { ...obj, seen: nextSeen };
      } else {
        return obj;
      }
    })
  );
}
```

### useImmer 사용해서 배열에 있는 값 수정

```js
const [list, updateList] = useImmer(initalList);
function handleToggle(id, nextSeen) {
  updateList((draft) => {
    const target = draft.find((a) => a.id === id);
    target.seen = nextSeen;
  });
}
```

</details>

---

<!-- 토글 템플릿 -->
<details>
<summary>토글</summary>

</details>
