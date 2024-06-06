import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let arr = Array(상품.length)
  for(let i=0;i<arr.length;i++){
    arr[i]=0;
  }
  let [수량, 수량변경] = useState([0,0,0])
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {/* <span>{수량[0]}</span>
      <button onClick={()=>{ 
        let arr = [1,2,3]
        let arrCopy = [...arr];
        arrCopy[0] = 3;
        console.log(arr[0])
        let copy = [...수량] // 값복사임 , 주소복사아니고
        //Object나 Array함수일경우 copy해서 해야함
        copy[0]++
        수량변경(copy)}}>+</button>
      <span>{수량[1]}</span>
      <button>+</button>
      <span>{수량[2]}</span>
      <button>+</button> */}
      {
        상품.map((a,i) => {
          return <div className="food" key={i}>
          <img src={`/food${i}.png`} className="food-img" />
          <h4>{a} $40</h4>
          <span> {수량[i]} </span>
          <button onClick={()=>{let copy = [...수량];copy[i]+=1;수량변경(copy) }}>+</button>
          <button onClick={()=>{ let copy = [...수량];copy[i]-=1;수량변경(copy)}}>-</button>
        </div>
        })
      }
    </div>
  );
}
