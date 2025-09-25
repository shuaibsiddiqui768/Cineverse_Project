import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppV2 from './AppV2';
// import AppV1 from './AppV1';

// import StarRating from "./StarRating"

// function Test(){
//   const[movieRating,setMovieRating]=useState(0);
//   return (
//     <div> 
//       <StarRating maxRating={10} color='blue' onSetRating={setMovieRating}/>
//       <p>The movie was Rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <AppV1 /> */}
    <AppV2 />
   
    {/* <StarRating maxRating={5} messages={['Terrible','Bad','Okay','Good','Amazing']}/>
    <StarRating maxRating={5} color='red' size={24} className="test" defaultRating={3}/>
   <Test/> */}

  </React.StrictMode>
);

