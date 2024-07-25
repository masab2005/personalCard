import pic from './assets/user.png'
function Card(props){
  return(
    <div className="card">
    <img className="pic"  src={props.profilepic}></img>
    <div className='separate'>
    <h2  className='name'>{props.name}</h2>
    <p   className='text'>{props.text}</p>
    </div>
    </div>
  );
}
Card.defaultProps = {
    profilepic: pic,
    name: 'Anonymous',
    text: 'Information about your current studies',
}

export default Card