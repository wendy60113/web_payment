import { useRef,useState } from "react";
import CreditCard from "../components/CreditCard";
import Input from "../components/Input";
function Home() {
  const [numbersarray,setNumbersarray] = useState({
    num1:'',
    num2:'',
    num3:'',
    num4:''
  })
  //自動跳下一格
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
  const [CHName,setCHName] = useState('')
  const [ExpMonth,setExpMonth] = useState('')
  const [ExpYear,setExpYear] = useState('')
  const [CVC,setCVC] = useState('')
  const handleChangeInput = (el)=>{
    const {name,value} = el.target
    switch(name){
      case 'CHName':
        setCHName(value.toUpperCase())
        break;
      case 'ExpMonth':
        setExpMonth(value)
        break; 
      case 'ExpYear':
        setExpYear(value)
        break; 
      case 'CVC':
        setCVC(value)
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <div className="bg"></div>
      <div className="outField">
        <div className="cardField">
          <CreditCard 
            numbers={numbersarray}
            CHName={CHName}
          />
        </div>
        <div className="inputField">
          <label className="title">Payment Detail</label><br/>
          <div className="inputcomponent">
            <Input
              title={'Cardholder Name'}
              name={'CHName'}
              content={CHName}
              changeEvent={handleChangeInput}
            />
          </div>
          <div className="inputcomponent">
            <input id="0" onChange={handleChange} value={numbersarray.num1} name="num1" ref={num[0]} maxLength='4'></input>
            <input id="1" onChange={handleChange} value={numbersarray.num2} name="num2" ref={num[1]} maxLength='4'></input>
            <input id="2" onChange={handleChange} value={numbersarray.num3} name="num3" ref={num[2]} maxLength='4'></input>
            <input id="3" onChange={handleChange} value={numbersarray.num4} name="num4" ref={num[3]} maxLength='4'></input>
            
          </div>
          <div className="inputcomponent multiComponent">
            <Input
              title={'Expiry Month'}
              content={ExpMonth}
              name={'ExpMonth'}
              changeEvent={handleChangeInput}
            />
            <Input
              title={'Expiry Year'}
              content={ExpYear}
              name={'ExpYear'}
              changeEvent={handleChangeInput}
            />
          </div>
          <div className="inputcomponent multiComponent">
            <Input
              title={'CVC'}
              name={'CVC'}
              content={CVC}
              changeEvent={handleChangeInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
