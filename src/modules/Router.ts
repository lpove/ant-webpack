import Loadable from "@loadable/component";
// import Loading from "./Loading";

const config = [
    {
        name: "/",
        path: "/",
        exact: true,
        component: Loadable(() => import("./Demo")),
    },
    {
        name: "live",
        path: "/live",
        exact: true,
        component: Loadable(() => import("./Live")),
    },
    {
        name: "404",
        path: "/404/:id",
        exact: false,
        component: Loadable(() => import("./Page404")),
    },
    {
        name: "ant",
        path: "/ant",
        exact: true,
        component: Loadable(() => import("./Ant")),
    },
    // {
    //     name: "about",
    //     path: "/about",
    //     exact: true,
    //     component: Loadable(
    //        () => import("../components/pc/pc_aboutme_index"),
    //
    //    ),
    // },
    // {
    //     name: "albumlList",
    //     path: "/albumList/:id",
    //     exact: false,
    //     component: Loadable(
    //        () => import("../components/pc/pc_album_list"),
    //
    //    ),
    // },
];

export default config;
