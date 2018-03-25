export const calendarData = {
  months: ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  mockEvents: [
    {
      date: "03/12",
      start: '8:30am',
      end: '9:30am'
    }
  ],
  holidays: [
    { date: "03/11",
      name: "Daylight Savings" 
    },
    { date: "03/17",
      name: "St. Patrick's Day" 
    },
    { date: "03/25",
      name: "Palm Sunday" 
    },
    { date: "03/30",
      name: "Good Friday" 
    },
    { date: "03/31",
      name: "Passover" 
    }, 
    { date: "04/01",
      name: "April Fools Day"
    },
    { date: "04/01",
      name: "Easter"
    },
    { date: "04/08",
      name: "Orthodox Easter"
    },
    { date: "04/17",
      name: "Tax Day"
    },
    { date: "04/22",
      name: "Earth Day"
    }
  ]
}

// Each object contains a start time and an end time for the event.