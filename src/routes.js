import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import AuthLayout from "./pages/Auth";
import PrivateRoute from "components/privateRoute";
import MainLayout from "pages/layout";
import Home from "pages/home";
import ProfileLayout from "./pages/profile";
import ProfilePosts from "pages/profile/components/posts";
import ProfileTagged from "pages/profile/components/tagged";
import Logout from "pages/logout";
import InboxLayout from "pages/inbox";
import Inbox from "pages/inbox/inbox";
import Chat from "pages/inbox/chat";


const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        auth: true,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'logout',
                element: <Logout/>
            },
            {
                path: ':username',
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePosts/>
                    },
                    {
                        path: 'tagged',
                        element: <ProfileTagged/>
                    }
                ]
            },
            {
                path:'inbox',
                element: <InboxLayout/>,
                children: [
                    {
                        index:true,
                        element: <Inbox />
                    },
                    {
                        path: ':conversationId',
                        element: <Chat/>
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]

const AuthCheck = routes => routes.map(route => {
    if(route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = AuthCheck(route.children)
    }
    return route
})

export default AuthCheck(routes)