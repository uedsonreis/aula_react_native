import React from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import SignOutButton from '../../components/SignOutButton';
import PostItem from '../../components/PostItem';
import { userStorage } from '../../storage';
import styles from './styles';

const URL = 'https://social-network-for-class.herokuapp.com/posts';

export default function HomePage() {

    const navigation = useNavigation();

    // const route = useRoute();
    // const { token } = route.params as any;

    const [posts, setPosts] = React.useState<any[]>([]);

    async function fetchPosts() {
        const { token } = await userStorage.get();
        const response = await axios.get(URL, { headers: { 'Authorization': `Bearer ${token}`} });
        setPosts(response.data);
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => <SignOutButton />
        });
        fetchPosts();
    });

    return (
        <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={elem => <PostItem description={elem.item.description} />}
        />
    );
}