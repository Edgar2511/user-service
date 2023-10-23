interface RootReducerState {
  count: number;
}
interface RootReducerAction {
  type: string;
  payload: unknown;
}
enum RootReducerActionTypes {
  INCREMENT = "increment",
}

const initialState: RootReducerState = {
  count: 0,
};
export const rootReducer = (
  state = initialState,
  action: RootReducerAction
): RootReducerState => {
  switch (action.type) {
    case RootReducerActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
