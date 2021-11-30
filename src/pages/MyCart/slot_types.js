const slot_types = [
  {
    key: "standard",
    delivery: "Standard Delivery",
    charge: "free",
    time_slots: [
      {
        key: "9am-12pm",
        timesloat: "9 AM - 12 PM",
      },
      {
        key: "12pm-3pm",
        timesloat: "12 PM - 3 PM",
      },
      {
        key: "3pm-6pm",
        timesloat: "3 PM - 6 PM",
      },
      {
        key: "6pm-9pm",
        timesloat: "6 PM - 9 PM",
      },
    ],
  },
  {
    key: "midnight",
    delivery: "Midnight Delivery",
    charge: "249",
    time_slots: [
      {
        key: "11-12",
        timesloat: "11 PM - 12 AM",
      },
    ],
  },
  {
    key: "fix",
    delivery: "Fixtime Delivery",
    charge: "150",
    time_slots: [
      {
        key: "10",
        timesloat: "10 AM - 11 AM",
      },
      {
        key: "11",
        timesloat: "11 AM - 12 PM",
      },
      {
        key: "12",
        timesloat: "12 AM - 1 PM",
      },
      {
        key: "13",
        timesloat: "1 PMs - 2 PM",
      },
      {
        key: "14",
        timesloat: "2 PM - 3 PM",
      },
      {
        key: "15",
        timesloat: "3 PM - 4 PM",
      },
      {
        key: "16",
        timesloat: "4 PM - 5 PM",
      },
      {
        key: "17",
        timesloat: "5 PM - 6 PM",
      },
      {
        key: "18",
        timesloat: "6 PM - 7 PM",
      },
      {
        key: "19",
        timesloat: "7 PM - 8 PM",
      },
      {
        key: "20",
        timesloat: "8 PM - 9 PM",
      },
      {
        key: "21",
        timesloat: "9 PM - 10 PM",
      },
      {
        key: "22",
        timesloat: "10 PM - 11 PM",
      },
    ],
  },
  {
    key: "early",
    delivery: "Early Morning",
    charge: "200",
    time_slots: [
      {
        key: "7-9",
        timesloat: "7 AM - 9 AM",
      },
    ],
  },
];

export default slot_types;
