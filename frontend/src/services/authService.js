// src/services/authService.js
export const loginAPI = async (email, password) => {
    // Mock login API
    if (email === 'test@user.com' && password === 'password') {
      return {
        id: 1,
        name: 'Test User',
        email: 'test@user.com',
        token: 'mock-jwt-token',
      };
    }
    throw new Error('Invalid email or password');
  };
  
  export const signupAPI = async (name, email, password) => {
    // Mock signup API
    return {
      id: 2,
      name,
      email,
      token: 'mock-signup-token',
    };
  };  