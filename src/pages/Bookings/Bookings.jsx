import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../assets/Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

   const handelDelete=(id)=>{
        const proceed= confirm("Are you sure u want to delete")
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE"
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    alert("Delete successful")
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }
  return (
    <div>
      <h2 className="text-center text-4xl">Bookings:{bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow 
              key={booking._id} 
              handelDelete={handelDelete}
              booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
