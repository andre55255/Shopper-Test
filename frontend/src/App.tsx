import { RouterProvider } from "react-router";
import Router from "./routes/router";
import { useTheme } from "./hooks/use-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const { getTheme } = useTheme();

    return (
        <ThemeProvider theme={() => getTheme()}>
            <GlobalStyles />
            <ToastContainer
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeOnClick
                hideProgressBar={false}
                newestOnTop={false}
                theme="light"
            />
            <RouterProvider router={Router} />
        </ThemeProvider>
    );
};

export default App;
