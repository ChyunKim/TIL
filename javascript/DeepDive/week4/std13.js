// 비동기

// fetch
fetch("https://www.omdbapi.com/?apikey=error&s=frozen")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log("Error !", err));
// 위와 같이 API 키가 틀리면 Axios는 바로 catch 가능 하지만 fetch 함수는 불가
// fetch 함수는 로직을 만들어줘야함

// fetch 함수의 한계로 로직을 작성
// resolve => 이행 , reject => 거부
function http(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        if (res.Response === "False") {
          reject(res.Error);
        }
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}

http("https://www.omdbapi.com/?apikey=error&s=frozen")
  .then((res) => console.log("Resolved", res))
  .catch((err) => console.log("Rejected X", err))
  .finally(() => console.log("무조건실행"));
// finally 구문은 오류이든 아니든 무조건 실행하는 구문

// async await 예외처리
// try catch
(async () => {
  try {
    const res = await http("https://www.omdbapi.com/?apikey=error&s=frozen");
    console.log("Resolved", res);
  } catch (err) {
    console.log("Rejected X", err);
  } finally {
    console.log("무조건 실행");
  }
})();

// Promise.all()
function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("A");
    }, 1000);
  });
}

function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
}

(async () => {
  const aa = await a();
  const bb = await b();
  console.log(aa, bb);
})();

// 위와 같이 작성시 aa, bb를 await 하기 위해 총 3초를 기다려야 함
// Promise.all()을 사용시 최종적으로 한번만 반환하므로 제일 도달하는데 오래 걸리는 시간만 소요됨

// Promist all은 최종적으로 한번만 반환
(async () => {
  //   const res = await Promise.all([a(), b()]);
  const [aa, bb] = await Promise.all([a(), b()]);
  // 배열구조분해 할당

  console.log(aa, bb);
})();

// Promist race은 빨리 도착하는 promise만 반환
(async () => {
  const res = await Promise.race([a(), b()]);
  console.log(res);
})();

// forEach문과 for문의 비동기 처리 순서
// forEach문은 비동기문을 순차적으로 동작하지 않고 한번에 처리 => 콜백함수 이므로 순서 보장 안함

const arr = [a, b, c];

arr.forEach(async (item) => {
  console.log(await item());
});

// for문은 비동기를 순차적으로 동작하게 가능
(async () => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(await arr[i]());
  //   }

  for (const item of arr) {
    console.log(await item());
  }
})();
