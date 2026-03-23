import snow from './assets/Snow.png';
function Card(){
    return(
        <div className="card-st">
            <img className='card-image' src={snow} alt="Profile Picture" />
            <h2 className='card-title'>Snow</h2>
            <p className='card-text'>I am Snow who is learning react and I like to code</p>
        </div>
    );
}
export default Card