import AsyncStorage from '@react-native-async-storage/async-storage';

class UserStorage {
    static readonly KEY = '@UserInfoKey';

    public async get() {
        const json = await AsyncStorage.getItem(UserStorage.KEY);
        return json ? JSON.parse(json) : null;
    }

    public async save(info: any) {
        const json = JSON.stringify(info);
        await AsyncStorage.setItem(UserStorage.KEY, json);
    }

    public async remove() {
        await AsyncStorage.removeItem(UserStorage.KEY);
    }
}

export const userStorage = new UserStorage();