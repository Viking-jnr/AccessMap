//Demo Users
export const demoUsers = [
  {
    id: 1,
    name: "Amina Mwangi",
    email: "amina@accessmap.ke",
    role: "PWD User",
    status: "active"
  },
  {
    id: 2,
    name: "David Otieno",
    email: "david@county.gov.ke",
    role: "Government Official",
    status: "active"
  },
  {
    id: 3,
    name: "Grace Kimani",
    email: "grace@inclusivehotels.co.ke",
    role: "Service Provider",
    status: "suspended"
  },
  {
    id: 4,
    name: "Admin Bot",
    email: "admin@accessmap.ke",
    role: "Admin",
    status: "active"
  }
];


//Demo Reports
export const demoReports = [
  {
    id: 101,
    description: "No wheelchair ramp at main entrance",
    barrierType: "Mobility",
    locationType: "Public Building",
    gps: [-1.2921, 36.8219],
    mediaUrl: "https://via.placeholder.com/150",
    status: "Pending"
  },
  {
    id: 102,
    description: "No braille signage in hospital",
    barrierType: "Visual",
    locationType: "Health Facility",
    gps: [-1.2833, 36.8167],
    mediaUrl: "https://via.placeholder.com/150",
    status: "Flagged"
  },
  {
    id: 103,
    description: "No interpreter at service desk",
    barrierType: "Hearing",
    locationType: "Government Office",
    gps: [-1.3000, 36.8000],
    mediaUrl: "https://via.placeholder.com/150",
    status: "Resolved"
  }
];

//Demo Analytics
export const demoAnalytics = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Barrier Reports",
      data: [12, 19, 8, 15, 22, 17],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1
    }
  ]
};

//Demo Feedback
export const demoFeedback = [
  {
    id: 201,
    location: "KICC",
    rating: 4,
    comment: "Good wheelchair access but signage could improve",
    flagged: false
  },
  {
    id: 202,
    location: "Nairobi Hospital",
    rating: 2,
    comment: "No interpreter available",
    flagged: true
  },
  {
    id: 203,
    location: "City Hall",
    rating: 5,
    comment: "Excellent service and accessibility",
    flagged: false
  }
];


