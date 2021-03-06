import React, { useReducer } from "react";

export const favContext = React.createContext();

const INIT_STATE = {
  fav: null,
  count: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        fav: action.payload,
        // count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addToFav(shoe) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
        totalPrice: 0,
      };
    }
    let newShoe = {
      item: shoe,
      count: 1,
      subPrice: shoe.price,
    };

    const isShoeInFav = fav.shoes.some(
      item => item.item.id === newShoe.item.id
    );

    if (isShoeInFav) {
      fav.shoes = fav.shoes.filter(item => item.item.id !== newShoe.item.id);
    } else {
      fav.shoes.push(newShoe);
    }
    localStorage.setItem("fav", JSON.stringify(fav));

    getFav();
  }
  function getFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
        totalPrice: 0,
      };
    }
    fav.totalPrice = fav.shoes.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);

    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  }
  function deleteFromFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
        totalPrice: 0,
      };
    }
    fav.shoes = fav.shoes.filter(item => item.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }

  function changeCount(count, id) {
    if (count <= 0) {
      return;
    }
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.shoes = fav.shoes.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  function checkShoeInFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
        totalPrice: 0,
      };
    }
    const isShoeInFav = fav.shoes.some(item => item.item.id === id);
    return isShoeInFav;
  }
  return (
    <favContext.Provider
      value={{
        fav: state.fav,
        count: state.count,
        addToFav,
        getFav,
        deleteFromFav,
        changeCount,
        checkShoeInFav,
      }}>
      {children}
    </favContext.Provider>
  );
};
export default FavContextProvider;
