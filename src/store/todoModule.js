export const todoModule = {
    state: () => ({
        posts: [
            {id: 1, title: 'Hello', body: 'LKflefslmvlksdmglsdmlsdmgldr', isActive: false},
            {id: 2, title: 'Hello', body: 'LKflefslmvlksdmglsdmlsdmgldr', isActive: false},
            {id: 3, title: 'Hello', body: 'LKflefslmvlksdmglsdmlsdmgldr', isActive: false},
        ],
        fakeLogin: {
            username: 'Admin',
            password: 12345,
        },
        userData: {
            username: '',
            password: '',
        }
    }),
    mutations: {
        setPosts: (state, payload) => {
            state.posts = payload;
        },
        setUserData: (state, username, password) => {
           state.userData.username = username;
           state.userData.password = password;
        },
    },
}
