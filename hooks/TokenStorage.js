import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('jwtToken', token);
        console.log('Token stored successfully');
    } catch (error) {
        console.error('Error storing the token', error);
    }
};

const logout = async () => {
    try {
        await AsyncStorage.removeItem('jwtToken');
    } catch (error) {
        console.error('Error removing the token', error);
    }
};

export default { storeToken, logout };