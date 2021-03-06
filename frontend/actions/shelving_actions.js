import * as APIUtil from '../util/shelving_api_utils';

export const RECEIVE_ALL_SHELVINGS = "RECEIVE_ALL_SHELVINGS";
export const RECEIVE_SHELVING = "RECEIVE_SHELVING";
export const REMOVE_SHELVING = "REMOVE_SHELVING";

export const receiveAllShelvings = (shelvings) => {
  return ({
    type: RECEIVE_ALL_SHELVINGS,
    shelvings
  });
};

export const receiveShelving = (payload) => {
  
  return {
    type: RECEIVE_SHELVING,
    payload: payload
  };
};

export const removeShelving = (shelving) => {
        
  return {

    type: REMOVE_SHELVING,
    shelvingId: shelving.id,
    bookId: shelving.book_id
  };
};


export const requestShelvings = () => (dispatch) => {
  
  return (
    APIUtil.fetchShelvings().then((shelvings) => {
      
      return dispatch(receiveAllShelvings(shelvings))
    })
  );
};

export const requestShelving = (id) => (dispatch) => {
  
  return (
    APIUtil.fetchShelving(id).then((shelving) => {
      
      return dispatch(receiveShelving(shelving))
    }

    )
  );
};

export const createShelving = (shelving) => (dispatch) => {
  
  return APIUtil.createShelving(shelving).then((shelving) => {
    
    dispatch(receiveShelving(shelving))
  }
  );
};

export const updateShelving = (id) => (dispatch) => {
  return APIUtil.updateShelving(id).then((shelving) => dispatch(receiveShelving(shelving)))
};

export const deleteShelving = (shelvingId) => (dispatch) => {
        
  return APIUtil.removeShelving(shelvingId).then((shelving) => {
    
    dispatch(removeShelving(shelving));
  }
  );

};