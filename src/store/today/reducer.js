import { getCollectionAx } from "../../axios/axios";

const Actions = {
  COLLECTION_LOADED: "COLLECTION_LOADED",
  APPEND_TODAY_TASK: "APPEND_TODAY_TASK",
  REMOVE_TODAY_TASK: "REMOVE_TODAY_TASK",
};

export default function todayTaskReducer(state = [], { type, payload }) {
  switch (type) {
    case Actions.COLLECTION_LOADED:
      return payload;
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const loadCollectionAction = (dispatch) => {
  getCollectionAx().then((collection) =>
    dispatch({
      type: Actions.COLLECTION_LOADED,
      payload: collection,
    })
  );
};
