import { create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import userSlice from './slice/user';

export const useStore = create(devtools((set) => ({
  ...userSlice(set),
})));
