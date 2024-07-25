import Card from "./Card.jsx"
import pic1 from './assets/profilepic.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'



function App(){
   return(
    <div className="flexy"> 
    <Card profilepic={pic1} name="Muhammad Masab" text="I am studing Computer Science"/>
    <Card profilepic={pic2} text="I am studing MBBS"/>
    <Card profilepic={pic3} name="Hassan Khan" text="I am studing MBA"/>
    <Card  name="Muhammad Arqam" text="I am studing PRE-Eng"/>
    </div>
   );
}
 export default App