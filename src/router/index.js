import { createRouter, createWebHistory } from 'vue-router';

import Structure from "../view/Structure/Structure"
import dashboard from "../components/dashboard/dashboard"
import secondDashboard from "../components/secondDashboard/secondDashboard"


export const routes = [
    {
		path: '/main',
		name: 'Structure-Vue',
		component: Structure,
        children: [
            {
                path: '/main/dashboard',
                name: 'dashboard',
                component: dashboard,
            },

            {
                path: '/main/secondDashboard',
                name: 'secondDashboard',
                component: secondDashboard,
            }
        ]
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;