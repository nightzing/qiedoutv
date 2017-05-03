import Home from './components/Home.vue'
import Index from './components/index/Index.vue'
import Model from './components/model/Model.vue'
import Rule from './components/rule/Rule.vue'
import Vari from './components/vari/Vari.vue'

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
                path: '/model',
                component: Model,
                name: 'MODEL',
                hidden: true
            }, {
                path: '/rule',
                component: Rule,
                name: '',
                hidden: true
            }
            , {
                path: '/vari',
                component: Vari,
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