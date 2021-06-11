import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './componentes/Formulario.vue'
import MultipleChoice from './componentes/MultipleChoice.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: Formulario },
        { path: '/multiplechoice', component: MultipleChoice }
    ]
})