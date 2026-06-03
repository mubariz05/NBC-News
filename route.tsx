import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/home";
import NewsDetail from "./src/pages/NewsDetail";
import App from "./src/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
               {
                path: "",
                element: <HomePage/>
               }, 
            {
                path: "news/:id",
                element: <NewsDetail/>
            },
        ]
    },



    
])

export default router