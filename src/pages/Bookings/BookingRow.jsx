
import React from 'react';

const BookingRow = ({booking,handelDelete}) => {
    const {_id,date,price,service,img}=booking
   
    return (
        <div>
            <tr>
        <th>
         <button onClick={()=>handelDelete(_id)} className=" btn btn-lg">X</button>
        </th>
        <td>
          
            <div className="avatar">
              <div className=" h-24 w-24">
            { img && <img
                src={img}
                alt="Avatar Tailwind CSS Component"
            />}
              </div>
            
          </div>
        </td>
        <td>
          {service}
         
         
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;