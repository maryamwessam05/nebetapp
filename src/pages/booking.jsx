import React, { useState } from "react";
import "./style.css";

import sidelogo from "../assets/sidelogo.svg";
import Nav from "../components/nav";
import Tickdet from "../components/tickdet";

import tick2 from "../assets/tickdet02.svg";
import tick3 from "../assets/tickdet03.svg";

import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

import Button from "../components/button";
import arrow from "../assets/arrw.svg";

import { Link } from "react-router-dom";

import { supabase } from "../supabase";

const Booking = () => {
  const [num, setNum] = useState(1);

  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");

  const [ticketType, setTicketType] = useState("Regular");

  const [loading, setLoading] = useState(false);

  const ticketPrices = {
    Regular: 150,
    "VIP Experience": 250,
    Elite: 400,
  };

  const timeSlots = ["09:00", "13:00", "16:00"];

  const ticketPrice = ticketPrices[ticketType];

  const total = ticketPrice * num;

  const increment = () => {
    setNum((prev) => prev + 1);
  };

  const decrement = () => {
    setNum((prev) => Math.max(1, prev - 1));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!visitDate || !visitTime) {
      alert("Please select date and time");
      return;
    }

    try {
      setLoading(true);

      // get authenticated user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("booking")
        .insert([
          {
            user_id: user?.id || null,

            exhibit_id: 1,

            first_name: "Maryam",
            first_name_ar: "مريم",

            last_name: "Wessam",
            last_name_ar: "وسام",

            email: user?.email || "maryam@email.com",

            num_tickets: num,

            visit_date: visitDate,
            visit_time: visitTime,

            ticket_price: ticketPrice,

            ticket_type: ticketType,

            booking_status: "pending",
          },
        ])
        .select();

      if (error) throw error;

      console.log("Booking Success:", data);

      alert("Booking Confirmed!");

      setNum(1);
      setVisitDate("");
      setVisitTime("");
      setTicketType("Regular");
    } catch (err) {
      console.error(err);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <div className="homescreen">
          <img src={sidelogo} alt="" />

          <div className="headercont">
            <Link to={"/home"}>
              <div className="back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="19"
                  viewBox="0 0 32 19"
                  fill="none"
                >
                  <path
                    d="M10.5593 18.4174C10.5593 17.4412 9.59179 15.9836 8.61242 14.7602C7.35322 13.1816 5.84853 11.8042 4.1234 10.7531C2.82989 9.9651 1.26183 9.20868 0 9.20868M0 9.20868C1.26183 9.20868 2.83121 8.45225 4.1234 7.66425C5.84853 6.61183 7.35322 5.23447 8.61242 3.65847C9.59179 2.43372 10.5593 0.973484 10.5593 -5.72205e-06M0 9.20868H31.6779"
                    stroke="#F0E1CE"
                    strokeWidth="1.90313"
                  />
                </svg>
              </div>
            </Link>

            <h1 className="header">Book Tickets</h1>

            <span>Follow Directions</span>
          </div>

          <form onSubmit={handleBooking}>

            <div className="datein">
              <Tickdet icon={tick2} info="Select Date" />

              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
              />
            </div>

            <div className="line"></div>


            <div className="datein">
              <Tickdet icon={tick3} info="Select Time" />

              <div className="boxes">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className={`time ${
                      visitTime === time ? "active" : ""
                    }`}
                    onClick={() => setVisitTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>


            <div className="datein">
              <h6>Ticket Type</h6>

              <div className="boxestt">
                {Object.entries(ticketPrices).map(([type, price]) => (
                  <div
                    key={type}
                    className={`type ${
                      ticketType === type ? "active" : ""
                    }`}
                    onClick={() => setTicketType(type)}
                  >
                    <h4>{type}</h4>

                    <span>{price} EGP</span>
                  </div>
                ))}
              </div>
            </div>


            <div className="datein">
              <h6>Quantity</h6>

              <div className="tick">
                <button
                  className="tickbtn"
                  type="button"
                  onClick={decrement}
                >
                  <img src={minus} alt="" />
                </button>

                <h1>{num}</h1>

                <button
                  className="tickbtn"
                  type="button"
                  onClick={increment}
                >
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>


            <div className="subtotal">
              <div className="rows">
                <h6>Ticket Price</h6>

                <span>{ticketPrice} EGP</span>
              </div>

              <div className="rows">
                <h6>Quantity</h6>

                <span>{num}</span>
              </div>

              <div className="rotot">
                <h4>Total</h4>

                <h1>{total} EGP</h1>
              </div>
            </div>

            <Button
              type="submit"
              style="beigebtn"
              rec="rec3"
              text={loading ? "Processing..." : "Confirm Booking"}
              icon={arrow}
            />
          </form>

          <div className="navcont">
            <Nav />
          </div>
        </div>
      </main>
    </>
  );
};

export default Booking;