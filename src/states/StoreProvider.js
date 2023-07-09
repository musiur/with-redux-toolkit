"use client";

const { Provider } = require("react-redux")
const { default: store } = require("./store")

const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider;