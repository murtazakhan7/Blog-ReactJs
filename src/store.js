import { createStore, thunk, action, computed } from 'easy-peasy'
import api from './api/posts.js'

export default createStore({
    posts: [],
    setPosts: action( (state,payload) => { state.posts = payload }),
    NewTitle: '',
    setNewTitle: action( (state, payload) => {
        state.NewTitle = payload
    }),
    isLoading: false,
    setIsLoading: action( (state,payload) => {
    state.isloading = payload
    }),
    NewBody: '',
    setNewBody: action( (state, payload) => {
        state.NewBody = payload
    }),
    editTitle: '',
    seteditTitle: action( (state, payload) => {
        state.editTitle = payload
    }),
    editBody: '',
    seteditBody: action( (state, payload) => {
        state.editBody = payload
    }),
    Search: '',
    setSearch: action( (state, payload) => {
        state.Search = payload
    }),
    searchResults: [],
    SetSearchResults: action((state, payload) => {
        state.SearchResults = payload
    }),
    postCount: computed( (state) => state.posts.length),
    getPostById: computed( (state) => {
        return (id) => state.posts.find(post => post.id === id)
    }),
    savePost: thunk(async (actions, newPost, headers) => {
        const { posts } = headers.getState()

        try {
            const response = await api.post('/posts', newPost)
            actions.setPosts([...posts, response.data])
            actions.setNewTitle('')
            actions.setNewBody('')
        }
        catch (error) {
            console.log(error.message)
        }

    }),
    deletePost: thunk(async (actions, id, headers) => {
        const { posts } = headers.getState()
         try {
              const response = await api.delete(`/posts/${id}`)
              actions.setPosts(posts.filter(post => post.id !== id))
              console.log('Resource deleted successfully:', response.status)
              actions.setReload(prev => !prev);
            }
            catch (error) {
              console.log(error.message)
            }

    }),
    updatedPost: thunk(async (actions, editPost, headers) => {
        const { posts } = headers.getState()
        const {id} = editPost
         try {
              const response = await api.put(`/posts/${id}`, editPost)
             actions.SetPosts(posts.map(post => (post.id) === id ? {...response.data} : post))
             actions.seteditBody('')
             actions.seteditBody('')
             
            }
            catch (error) {
              console.log(error.message)
            }
    })

})