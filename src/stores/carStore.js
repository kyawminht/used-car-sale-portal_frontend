
import { defineStore } from 'pinia';
import axios from '../axios';

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: []
  }),
  actions: {
    async fetchCars() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/car');
        console.log('API Response:', response.data.data);
        this.cars = response.data.data;
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    },
    
  }
});
