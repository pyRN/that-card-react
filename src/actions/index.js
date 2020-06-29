import {
    SET_USER_COLLECTION, 
    GET_CURRENT_USER, 
    GET_EXPANSIONS_LIST, 
    GET_DISPLAYED_CARDS, 
    SET_DIRTY_FLAG, 
    SET_DYNAMIC_TITLE } from './types'

export const getExpansionsList = () => {
    return{type: 'GET_EXPANSIONS_LIST'}
}

export const getDisplayedCards = () => {
    return {type: 'GET_DISPLAYED_CARDS'}
}

export const getCurrentUser = user => {
    return {type: 'GET_CURRENT_USER'}
}

// export const setUserCollection = collection => ({
//     type: 'SET_USER_COLLECTION',
//     currentUserCollection: collection
// })

// export const setCurrentUser = user => ({
//     type: 'SET_CURRENT_USER',
//     currentUser: user
// })



// export const setDirtyFlag = dirty => ({
//     type: 'SET_DIRTY_FLAG',
//     dirtyFlag: dirty
// })

// export const setDynamicTitle = title => ({
//     type: 'SET_DYNAMIC_TITLE',
//     currentTitle: title
// })