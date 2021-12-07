export const todoModule = {
    state: () => ({
        posts: [
            {id: 1, title: 'Do something', body: 'eFEesgrfs ferfs erf', isActive: false},
            {id: 2, title: 'Do something else', body: 'fewsfgewg', isActive: false},
            {id: 3, title: 'Sleep', body: 'ADwfaf fgewgas rgedrg', isActive: false},
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
