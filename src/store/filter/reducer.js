const Actions = {
  TOGGLE_FILTER: "TOGGLE_FILTER",
};

export default function filterReducer(state = false, { type }) {
  switch (type) {
    case Actions.TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const toggleFilterAction = () => ({type: Actions.TOGGLE_FILTER});