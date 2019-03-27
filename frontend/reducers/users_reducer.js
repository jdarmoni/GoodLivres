
export const usersReducer = (state, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            debugger
            return merge({}, state, {[action.user.id]: action.user})
        default:
            return state;
    }
}