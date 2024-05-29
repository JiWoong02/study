export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let 어레이 = [2, 3, 4];
  어레이.map(() => {
    console.log("안녕");
  });
  console.log(상품);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>{상품[0]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $40</h4>
      </div>
    </div>
  );
}
