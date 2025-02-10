import "../styles.css";
import "../sample.css";
import CourseComponent from "./courses/CourseComponent";
import NumberRangeCheckerComponent from "./courses/NumberRangeCheckerComponent";
import TicketDetailComponent from "./courses/TicketDetailComponent";
import TicketComponent from "./courses/TicketComponent";
import TodosComponent from "./courses/ReducerComponent";
import UseEffectComponent from "./courses/UseEffectComponent";
import HookContext from "./courses/HookContextComponent";
import ReactRouter from "./courses/ReactRouteComponent";
import OrderBurger from "./courses/OrderBurgerComponent";
import ProductList from "./courses/ProductListComponent";
import MultiComponent from "./courses/MutiComponent";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface Course {
  title: string;
}


const MainContentComponent = () => {
const [count, setCount] = useState(0);
  useEffect(() => console.log("Hello World"),[count]);

  const courses: Course[] = [
    { title: "JavaScript" },
    { title: "TypeScript" },
    { title: "Angular" },
    { title: "React" },
  ];
  const navigate = useNavigate();
  const goToHome=()=>{
      navigate('/')
  };

  return (
    <div id="mainContent">
      <button onClick={goToHome}>Go to Home Page</button>
      <span>Login to Access Classroom Courses</span>
      <span className="separator"></span>
      {courses.map((course, i) => (
        <CourseComponent key={i} title={course.title} />
      ))}reac
      <NumberRangeCheckerComponent title="hello" />
      <TicketDetailComponent title="Ticket Detail" name="john smith" destination="New York" gender="Mr" seat="14A" />
      <TicketComponent name="john smith" destination="New York" gender="m" seat={14} />
      <TodosComponent/>

      <span>UseEffect</span>
      <UseEffectComponent/>
      <span>HookContextCom</span>
      <HookContext/>
      <p>{count}</p>
      <button onClick={() => setCount((count)=>count-1)}>
          set count -1
      </button>
      <button onClick={() => setCount((count)=>count+1)}>
          set count +1
      </button>
      {count}
        <button onClick={() => setCount(count + 1)}>
            Click Me
        </button>

   
     
    </div> 
  );
};

export default MainContentComponent;
/* <span>Exercise 16-17</span>
<ReactRouter/>
<span>Exercise 18</span>
<OrderBurger/>
<span>Exercise 19</span>
  <ProductList/>
  <span>Exercise 21</span>
  <MultiComponent/>
  */