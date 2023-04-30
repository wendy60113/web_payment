import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CreditCard from "../components/CreditCard";
function Home() {
  const [numbersarray,setNumbersarray] = useState({
    num1:'',
    num2:'',
    num3:'',
    num4:''
  })
  const num = [useRef(null),useRef(null),useRef(null),useRef(null)]
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNumbersarray({
      ...numbersarray,
      [name]:value
    })
    if(value.length===4&&event.target.id!=='3'){
      num[Number(event.target.id)+1].current.focus()
    }    
  };
  return (
    <div>
      <div className="bg"></div>
      <Row>
        <Col>
          <CreditCard 
            numbers={numbersarray}
          />
        </Col>
        <Col>
          <input id="0" onChange={handleChange} value={numbersarray.num1} name="num1" ref={num[0]} maxLength='4'></input>
          <input id="1" onChange={handleChange} value={numbersarray.num2} name="num2" ref={num[1]} maxLength='4'></input>
          <input id="2" onChange={handleChange} value={numbersarray.num3} name="num3" ref={num[2]} maxLength='4'></input>
          <input id="3" onChange={handleChange} value={numbersarray.num4} name="num4" ref={num[3]} maxLength='4'></input>
        </Col>
      </Row>
    </div>
  );
}
export default Home;
