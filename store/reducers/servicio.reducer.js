import { SEARCH_EMP } from '../actions/servicio.actions';

const INITIAL_STATE = {
  items: [],
  status: 'inactive',
};

const ServicioReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SEARCH_EMP:
      const index = state.items.findIndex(item => item.id === action.item.id);
      if (index === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateServ = [...state.items, item];

        return {
          ...state,
          items: updateServ,
        };
      }

      const items = state.items.map(item => {
        if (item.id === action.item.id) item.quantity ++
        return item;
      })

      return {
        ...state,
        items
      };
    default:
      return state;
  };
};

export default ServicioReducer;