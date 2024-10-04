import { create } from 'zustand';

if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({ id: null, role: '' }));
}

const authInitialState = JSON.parse(localStorage.getItem('user'));

const useUserStore = create((set) => ({
  id: authInitialState.id,
  role: authInitialState.role,
  
  login: (user) => {
    set({ id: user._id, role: user.role });
    localStorage.setItem('user', JSON.stringify({ id: user._id, role: user.role }));
  },

  logout: () => {
    set({ id: null, role: '' });
    localStorage.setItem('user', JSON.stringify({ id: null, role: '' }));
  },
}));

export default useUserStore;
