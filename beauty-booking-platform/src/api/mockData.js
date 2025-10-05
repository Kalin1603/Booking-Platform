export const salons = [
  {
    id: 1,
    name: 'Elegance Studio',
    city: 'Sofia',
    address: '123 Vitosha Blvd',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['hair', 'nails'],
  },
  {
    id: 2,
    name: 'Modern Curls',
    city: 'Plovdiv',
    address: '456 Kapana District',
    rating: 4.9,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1754047737435-e6ab9f80a0b6?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['hair'],
  },
  {
    id: 3,
    name: 'Nail Art Paradise',
    city: 'Varna',
    address: '789 Sea Garden Alley',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1711910382806-d341dcdd656f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['nails', 'pedicure'],
  }
];

export const bookings = [
  {
    id: 101,
    userId: 1, // Corresponds to our mock logged-in user
    salon: {
      id: 1,
      name: 'Elegance Studio',
      city: 'Sofia',
    },
    service: 'Women\'s Haircut',
    date: '2025-11-15T14:00:00Z', // ISO format for dates
    status: 'Confirmed'
  },
  {
    id: 102,
    userId: 1,
    salon: {
      id: 3,
      name: 'Nail Art Paradise',
      city: 'Varna',
    },
    service: 'Gel Manicure',
    date: '2025-11-20T11:30:00Z',
    status: 'Confirmed'
  },
  {
    id: 103,
    userId: 1,
    salon: {
      id: 2,
      name: 'Modern Curls',
      city: 'Plovdiv',
    },
    service: 'Coloring',
    date: '2025-10-28T09:00:00Z',
    status: 'Completed'
  }
];

export const services = [
  // Services for Elegance Studio 
  { id: 101, salonId: 1, name: "Women's Haircut & Style", duration: 60, price: 50, description: "Includes wash, cut, and professional blow-dry." },
  { id: 102, salonId: 1, name: "Full Color", duration: 120, price: 120, description: "Single-process color application from roots to ends." },
  { id: 103, salonId: 1, name: "Classic Manicure", duration: 45, price: 30, description: "Nail shaping, cuticle care, and polish." },
  
  // Services for Modern Curls 
  { id: 201, salonId: 2, name: "Curly Haircut", duration: 75, price: 80, description: "Specialized dry-cutting technique for curly hair." },
  { id: 202, salonId: 2, name: "Balayage", duration: 180, price: 250, description: "Hand-painted highlights for a natural, sun-kissed look." },
  
  // Services for Nail Art Paradise 
  { id: 301, salonId: 3, name: "Gel Manicure", duration: 60, price: 55, description: "Long-lasting gel polish with intricate nail art options." },
  { id: 302, salonId: 3, name: "Luxury Pedicure", duration: 75, price: 70, description: "Includes exfoliating scrub, hydrating mask, and massage." },
];