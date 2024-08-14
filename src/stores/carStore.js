import { defineStore } from 'pinia';
import instance from '@/axios';

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
          response = await instance.get('/search', {
            params: { search: query },
          });
        } else {
          response = await instance.get('/car');
        }
        console.log('API Response:', response.data.data);
        this.cars = response.data.data;
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    },
    async fetchCarById (carId){
      try {
        const response = await instance.get(`/car/${carId}`);
        console.log("Car by ID:", response.data.data);
        this.car = response.data.data; 
      } catch (error) {
        console.log('Failed to fetch car details:');
      }
    },
  },
});
