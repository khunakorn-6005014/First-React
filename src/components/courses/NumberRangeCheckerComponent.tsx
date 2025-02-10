import "../../styles.css";

import { useState } from "react"
interface NumberRangeCheckerProps {
  title:string
}
const NumberRangeCheckerComponent = (props: NumberRangeCheckerProps) => {
  let user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 14,
};
  const [num,setNum] = useState(10)

  let isLoading = false

  function onChangeCallback(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (value) {
      setNum(parseInt(value))
    }
  }
 

  return (
    
    <div className="leadingColumn">
      {props.title}
      <input type="text" onChange={onChangeCallback} />
      <div className="leadingColumn">
        <span>{num}</span>
        {
          /*
          // Under 50
          // 50-100
          // Over 100
          */
          (num < 50) ?
           (<span>less than 50</span>) : (num >= 50 && num <= 100) ?
            (<span>in range</span>) : (<span>more than 100</span>)
        }
        {
            //!isLoading && <p>Loading...</p>
       isLoading && <p>Loading...</p>
        }
        {
          <>
          <span style={{fontSize:'10px'}}>email:{user.email}</span> 
         <span style={{fontSize:'10px'}}>mname:{user.name}</span> 
         </>
        }
        
         
        {
          (user.age>18) && (<span>cant view this info</span>)
          //(user.age>=18) && (<span>cant view this info</span>)
        }
        {
        (user.age<=18) && (<span>can view this info</span>)
        }
      </div>
    </div>
  )

}

export default NumberRangeCheckerComponent