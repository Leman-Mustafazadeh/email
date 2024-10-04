import { create } from 'zustand';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { authApi } from './authApi';
import { removeToken, setToken } from '../../utils/token';
import { useNavigate } from 'react-router-dom';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (navigate) => {
    return useMutation({
      mutationFn: (payload) => authApi.login(payload),
      onSuccess: (response) => {
        setToken(response.token);
        set({ user: response.user, isAuthenticated: true }); 
        Swal.fire({
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/contact-us'); 
      },
      onError: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: error.message || 'An error occurred during login.',
        });
      },
    });
  },

  register: (navigate) => {
    return useMutation({
      mutationFn: (payload) => authApi.register(payload),
      onSuccess: (response) => {
        setToken(response.token);
        Swal.fire({
          icon: 'success',
          title: 'Registration successful',
          text: 'You have successfully registered.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/login'); 
      },
      onError: (error) => {
        removeToken();
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: error.message || 'An error occurred during registration.',
        });
      },
    });
  },

  logout: (navigate) => {
    removeToken();
    set({ user: null, isAuthenticated: false });
    navigate('/login'); 
  },
}));

export default useAuthStore;
