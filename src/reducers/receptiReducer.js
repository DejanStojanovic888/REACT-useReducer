const receptiReducer = (state, action) => {
    // dispatch postavlja type i payload u action 
    switch(action.type) { // kada ima mnogo if statementa onda ide switch
        case "UPDATE_LIKES":
            const current = state.find(r => r.id === action.payload.id)
            // current.likes++;    
            return state.map(r => {    // uvek na kraju reducer f-je mora "return state" da bi promenio state(da bi se rerenderovalo)
                if(r.id === action.payload.id) {
                    // return current
                    return {...current, likes: current.likes + 1}
                } else {
                    return r
                }
            })
            break;
        case "UPDATE_DISLIKES":
            const current2 = state.find(r => r.id === action.payload.id)
            return state.map(r => {    
                if(r.id === action.payload.id) {
                    return {...current2, dislikes: current2.dislikes + 1}
                } else {
                    return r
                }
            })
            break;
        case "UPDATE_COMMENTS":
            const newComment = {
                id: Math.random(),
                user: action.payload.user,
                text: action.payload.comment
            }
            const current3 = state.find(r => r.id === action.payload.id)
            return state.map(r => {    
                if(r.id === action.payload.id) {
                    return {...current3, comments: [newComment, ...current3.comments] }
                } else {
                    return r
                }
            })
            break;
            default:
            break;
    }
}

export default receptiReducer