import { salons } from './mockData';

// This function simulates a network request.
export const fetchSalonsAPI = () => {
  console.log("Mock API: Fetching salons...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Mock API: Salons fetched successfully.");
      resolve({ data: salons });
    }, 500); // 500ms delay to simulate loading
  });
};

// This function simulates fetching a SINGLE salon by its ID.
export const fetchSalonByIdAPI = (salonId) => {
  console.log(`Mock API: Fetching salon with ID: ${salonId}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const salon = salons.find(s => s.id === parseInt(salonId));
      if (salon) {
        console.log("Mock API: Found salon:", salon.name);
        resolve({ data: salon });
      } else {
        console.error("Mock API: Salon not found!");
        reject(new Error("Salon not found"));
      }
    }, 500);
  });
};