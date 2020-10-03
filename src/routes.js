const { default: home } = require("./views/home");
const { default: about } = require("./views/about");
const { default: projects } = require("./views/projects");
const { default: skills } = require("./views/skills");

const routes = [
    {
        path: '/home',
        name: 'Home',
        layout: '/app',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        layout: '/app',
        component: about
    },
    {
        path: '/skills',
        name: 'Skills',
        layout: '/app',
        component: skills
    },
    {
        path: '/projects',
        name: 'Projects',
        layout: '/app',
        component: projects
    },
]

export default routes;