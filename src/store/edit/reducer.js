const Actions = {
  SET_EDIT: "SET_EDIT",
  CLEAR_EDIT: "CLEAR_EDIT",
};

export default function editReducer(state = null, { type, task }) {
  switch (type) {
    case Actions.SET_EDIT:
      return task;
    case Actions.CLEAR_EDIT:
      return null;
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const setEditAction = (task) => ({ type: Actions.SET_EDIT, task });

export const clearEditAction = () => ({ type: Actions.CLEAR_EDIT });
