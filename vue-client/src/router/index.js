import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router)


/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/student',
    component: Layout,
    redirect: '/student/table',
    name: 'Example',
    meta: { title: '学生信息管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'Table',
        component: () => import('@/views/student/list'),
        meta: { title: '学生管理', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/student/add'),
        meta: { title: '添加学生', icon: 'tree' }
      },
      {
        path: 'search',
        name: 'Tree',
        component: () => import('@/views/student/search'),
        meta: { title: '查找学生', icon: 'tree' }
      }
    ]
  },

  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/manage',
    name: 'Example',
    meta: { title: '教师信息管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'Table',
        component: () => import('@/views/teacher/list'),
        meta: { title: '教师管理', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/teacher/add'),
        meta: { title: '添加教师', icon: 'tree' }
      },
      {
        path: 'search',
        name: 'Tree',
        component: () => import('@/views/teacher/search'),
        meta: { title: '查找教师', icon: 'tree' }
      }
    ]
  },
  {
    path: '/clazz',
    component: Layout,
    redirect: '/class/table2',
    name: 'Example',
    meta: { title: '班级信息管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'Table',
        component: () => import('@/views/clazz/list'),
        meta: { title: '班级管理', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/clazz/add'),
        meta: { title: '添加班级', icon: 'tree' }
      }
    ]
  },
  {
      path: '/form',
      component: Layout,
      redirect: '/user/',
      name: 'Example',
      meta: { title: '个人中心', icon: 'user' },
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => import('@/views/user/update'),
          meta: { title: '修改个人信息', icon: 'tree' }
        },
        {
          path: 'add',
          name: 'Tree',
          component: () => import('@/views/user/updatePassword'),
          meta: { title: '修改密码', icon: 'tree' }
        }
      ]
    },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
