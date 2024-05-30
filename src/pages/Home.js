import carImage from '../assets/images/jorg-buntrock';

export default function Home({ children }) {
  return <>
      

    <div className="profile-container">
        <h2>Welcome to the Westside Car Show!</h2>
        <img src={carImage} alt="Cake" className="car-image" /> 
                       
    </div>    
  </>

}