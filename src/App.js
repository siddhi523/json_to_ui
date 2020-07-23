import React, { Component } from 'react';
import NestedJsonTable from 'react-nested-json-table';
import { Sidebar } from "./sidebar.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
  "hotel_name": "Octave Bengaluru",
  "bookingId": "87654321",
  "status": "new",
  "booked_on": "2020-06-10 06:30:19",
  "source": "ezee",
  "check_in": "2020-06-11",
  "check_out": "2020-06-12",
  "channel": "Booking.com",
  "total_price": 3000,
  "total_tax": 300,
  "total_payment": 3300,
  "comment": [
    "I want tea bags",
    "Need breakfast"
  ],
  "booked_by": {
    "firstName": "Arun",
    "lastName": "S",
    "address": {
      "country": "India"
    },
    "email": "one@test.com",
    "phone": "+91-9999999999"
  },
  "rooms": [
    {
      "name": "Deluxe",
      "occupancy": {
        "adult": 2,
        "child": 0
      },
      "price": {
        "sell_rate": 1000.0,
        "tax": 100.0
      }
    },
    {
      "name": "Suite",
      "occupancy": {
        "adult": 2,
        "child": 2
      },
      "price": {
        "sell_rate": 2000.0,
        "tax": 200.0
      }
    }
  ]
}
      ]
    }
  }
 
  render() {
    return (
      <div> 
      <Sidebar />

        {this.state.data && (() =>
          <NestedJsonTable data={this.state.data} expandAll={false} />
        )()}
      </div>
    );
  }
}