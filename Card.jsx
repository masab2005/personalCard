import profilepic from './assets/profilepic.png'
function Card(){
  return(
    <div className="card">
    <img className="pic" src={profilepic}></img>
    <div className='separate'>
    <h2 className='name'>Muhammad Masab</h2>
    <p className='text'>I am currently enrolled in Computer Science degree.</p>
    </div>
    </div>
  );
}

export default Card