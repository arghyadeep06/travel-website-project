const mongoose = require('mongoose');
const Destination = require('./models/Destination');

mongoose.connect('mongodb://localhost:27017/travelDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const destinations = [
  {
    name: "Paris",
    description: "7 Days 6 Nights – ₹120,000 per person",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Bali",
    description: "5 Days 4 Nights – ₹95,000 per person",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "New York",
    description: "6 Days 5 Nights – ₹150,000 per person",
    img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D"
  }
];


Destination.deleteMany({})
  .then(() => {
    return Destination.insertMany(destinations);
  })
  .then(() => {
    console.log('✅ Fresh data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Error during seeding:', err);
  });

