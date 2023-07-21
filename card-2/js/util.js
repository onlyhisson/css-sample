var RandomText =
  RandomText ||
  (function () {
    // variable
    const interval = 10; // 문자 변경 속도
    let status = false; // setinterval 실행 상태
    let accumulatedTm = 0; // 누적 경과 시간
    let randomText = ""; // 새 문자열

    // 변수 초기화
    const init = () => {
      status = false;
      accumulatedTm = 0; // 누적 경과 시간
      randomText = ""; // 새 문자열
    };

    // 문자열 랜덤 생성
    const getRandomCharacters = (length) => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
      const emptyStrArr = Array(length).join(".").split(".");
      const result = emptyStrArr.map((el) => {
        return characters.charAt(Math.floor(Math.random() * characters.length));
      });
      return result.join("");
    };

    // 해당 html content 텍스트 변경
    const changeContent = (element) => {
      // 중복 실행 방지
      if (status) {
        return;
      }
      status = true;

      const originText = element.dataset.value.toUpperCase();
      const originLen = originText.length;

      const changeText = setInterval(() => {
        accumulatedTm += interval;

        // 초기에 변경
        randomText = getRandomCharacters(originLen);
        element.textContent = randomText;

        // origin content 문자열 길이
        const originSliceLen = Math.floor(accumulatedTm / 100);
        const sliceOrigin = originText.slice(0, originSliceLen);
        element.textContent = (sliceOrigin + randomText).slice(0, originLen);

        // 완료 후 초기화
        if (originSliceLen >= originLen) {
          clearInterval(changeText);
          init();
        }
      }, interval);
    };

    return {
      execute: function (element) {
        changeContent(element);
      },
    };
  })();
