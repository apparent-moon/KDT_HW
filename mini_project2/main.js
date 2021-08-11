// 상품 데이터
const data = [
  { name: "초콜렛", price: 2000 },
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 }
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
const amount = Number(line);

console.log(isNaN(amount));

if (isNaN(amount)) {
  alert("잘못된 금액입니다. 다시 입력해주세요");
} else {
  // 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
  const item = getItemByAmount(data, amount);

  const msg = item
    ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.`
    : "살 수 있는 상품이 없습니다.";

  // 결과 출력
  alert(msg);

  // 아래에 getItemByAmount 함수를 작성하세요.
  function getItemByAmount(productlist, money) {
    //상품 가격을 기준으로 data 배열을 오름차순 정렬
    let price = "price";

    productlist.sort(function (a, b) {
      return a[price] - b[price];
    });

    //만약 제일 저렴한 상품보다 사용자의 입력값이 작다면 null값을 return
    if (money < productlist[0].price) {
      return null;
    } else {
    //for문을 마지막배열(제일 비싼 상품)부터 돌면서 사용자의 입력값과 비교하여 배열을 return
      for (let i = productlist.length - 1; i >= 0; i--) {
        if (productlist[i].price <= money) {
          console.log(productlist[i].price);
          return productlist[i];
        }
      }
    }
  }
}
