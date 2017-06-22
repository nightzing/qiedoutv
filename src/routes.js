import Home from './components/Home.vue'
import Index from './components/index/Index.vue'
import Process from './components/process/Process.vue'
import Type from './components/type/Type.vue'
import About from './components/about/About.vue'
import VideoList from './components/commonLayout/VideoList.vue'
const routes = [
    {
        path: '/',
        component: Home,
        name: '',
        children: [
            {
                path: '/index',
                component: Index,
                name: 'Index',
                hidden: true
            },
            {
                path: '/process',
                component: Process,
                name: '',
                hidden: true
            }, {
                path: '/type',
                component: Type,
                name: '',
                hidden: true
            }
            , {
                path: '/about',
                component: About,
                name: '',
                hidden: false
            },
             {
                path: '/commonLayout',
                component:  VideoList,
                name: '',
                hidden: false
            },
             {
                path: '/', 
                redirect: { 
                	path: '/index',
	                component: Index,
	                name: 'Index',
	                hidden: true
                }
            },
        ]
    }
]

export default routes