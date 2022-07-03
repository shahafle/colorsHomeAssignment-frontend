import { About } from "./pages/About";
import { ColorApp } from "./pages/ColorApp";

export const routes = [
    {
        path: '/',
        component: <ColorApp />,
    },
    {
        path: '/about',
        component: <About />,
    }
]