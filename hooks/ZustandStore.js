import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Zustand store
const useAuthStore = create((set, get) => ({
    token: null, // Initial token state

    // Action to set the token (store it in state and AsyncStorage)
    setToken: async (newToken) => {
        try {
            await AsyncStorage.setItem('jwtToken', newToken); // Save token to AsyncStorage
            set({ token: newToken }); // Update state in the store
            console.log("Updated")
        } catch (error) {
            console.error('Error saving token to AsyncStorage', error);
        }
    },

    // Action to remove the token (logout)
    clearToken: async () => {
        try {
            await AsyncStorage.removeItem('jwtToken'); // Remove token from AsyncStorage
            set({ token: null }); // Clear token from state
            console.log("Cleared")
        } catch (error) {
            console.error('Error clearing token from AsyncStorage', error);
        }
    },

    // Load token from AsyncStorage on app startup
    loadToken: async () => {
        try {
            const storedToken = await AsyncStorage.getItem('jwtToken');
            if (storedToken) {
                set({ token: storedToken }); // Set token in state
            }
        } catch (error) {
            console.error('Error loading token from AsyncStorage', error);
        }
    },
}));

export default useAuthStore;
