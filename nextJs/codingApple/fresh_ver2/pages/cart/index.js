import {age,name} from './data.js'
import hello from './hello.js'
console.log(name)
export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']
    return (
      <div>
        {hello}
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem item={장바구니[0]}/>
        <CartItem item={장바구니[1]}/>
        <Banner cardName='현대' />
        <Banner cardName='롯데' />
        <Btn color='blue'/>
      </div>
    )
  } 

function Banner(props){
    return <h5>{props.cardName}카드 결제 행사중</h5>;
}

function Btn(props){
    return <button style={{background:props.color}}>버튼임</button>
}

function CartItem(props){
    return (
        <div className="cart-item">
          <p>{props.item}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
}