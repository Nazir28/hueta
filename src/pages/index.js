import { path } from "../consts";
import AboutDushanbe from "./about-dushanbe";
import Codeks from "./codeks";
import Main from "./main";
import Presintations from "./presintations";
import Projects from "./projects";
import Videos from "./videos";

export const pages = [
    {element: <Main/>, path: path.MAIN},
    {element: <Videos/>, path: path.VIDEOS},
    {element: <AboutDushanbe/>, path: path.ABOUT_DUSHANBE},
    {element: <Presintations/>, path: path.PRESINTATIONS},
    {element: <Projects/>, path: path.PROJECTS},
    {element: <Codeks/>, path: path.CODEKS}
]