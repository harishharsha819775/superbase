import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);

async function handleBooking() {

        if (!name || !tickets || !stand || !venue || !place) {
            alert("Please fill all the details");
            return;
        }

        const { data, error } = await supabase
            .from("bookings")
            .insert([
            {
                name: name,
                tickets: Number(tickets),
                stand: stand,
                venue: venue,
                place: place
            }
            ]);

        if (error) {
            console.error(error);
            alert("Booking failed");
            return;
        }

        alert("Ticket booked successfully!");

        }
  return (
    <main className="history-page">

      <h1>Booking History</h1>

      <button className="history-button" onClick={getBookings}>
        View Bookings
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Stand</th>
              <th>Venue</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr key={booking.id}>

                <td>{booking.name}</td>
                <td>{booking.tickets}</td>
                <td>{booking.stand}</td>
                <td>{booking.venue}</td>

              </tr>

            ))}
          </tbody>

        </table>
      </div>

    </main>
  );
}

export default BookingHistory;