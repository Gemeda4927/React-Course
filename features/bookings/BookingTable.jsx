import Menus from "../../ui/Menus"
import Table from "../../ui/Table"
import BookingRow from "../bookings/BookingRow"
import Header from "../../ui/Header"

function BookingTable() {
  const bookings = [];
  return (
    

    <Menus>
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>
      //https://github.com/Gemeda4927/React-Course

      <Table.Body
        data={bookings}
        render={(booking) => (
          <BookingRow key={booking.id} booking={booking} />
        )}
      />
    </Table>
  </Menus>
);



}

export default BookingTable
