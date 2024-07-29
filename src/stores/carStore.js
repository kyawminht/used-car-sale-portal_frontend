import { defineStore } from 'pinia';
import axios from 'axios';

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: [],
    car: {},

  }),
  actions: {
    async fetchCars(query = '') {
      try {
        let response;
        if (query) {
          response = await axios.get('http://127.0.0.1:8000/api/search', {
            params: { search: query },
          });
        } else {
          response = await axios.get('http://127.0.0.1:8000/api/car');
        }
        console.log('API Response:', response.data.data);
        this.cars = response.data.data;
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    },
    async fetchCarById (carId){
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/car/${carId}`);
        console.log("Car by ID:", response.data.data);
        this.car = response.data.data; 
      } catch (error) {
        console.error('Failed to fetch car details:', error);
      }
    },
  },
});
