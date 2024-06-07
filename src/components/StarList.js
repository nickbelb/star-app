import React, { useState } from 'react'
import Star from './Star';

/*


function StarList () {
  const [rate,setRate] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);


  const showRating =(index)=>{
    setText (rating.at(index));

  }
  
  return (
    <section>
        <div className="star-list">
          {Array.from({length:5},(_,index)=>(
            <Star  key={index} rate={rate} index={index} onClick={()=>{ 
              showRating(index)
              setRate(index+1);}}/>
          ))}
        </div>


    </section>
  )
}

export default StarList;*/

function StarList() {
  const rating =['Very Bad','Bad','Acceptable' ,'Good','Excelent'];
  const [rate, setRate] = useState(0);
  const [text,setText] = useState(' ');
  const showRating =(index)=>{
    setText (rating.at(index));

  }

  return (
    <section>
      <div className="star-list">
        {Array.from({ length:5}, (_, index) => (
          <Star
            key={index}
            index={index}
            rating={rate}
            onClick={() => {
              setRate(index+1);
              showRating(index);
            }}
          />
        ))}
      </div>
      <p className='rating-text'>{text}</p>
    </section>
  );
};

export default StarList;

