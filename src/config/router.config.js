// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '我的主页分类', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: '未来的猫', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/monitor',
            name: 'Monitor',
            component: () => import('@/views/dashboard/Monitor'),
            meta: { title: 'DOTA2', keepAlive: true, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/workGo',
            name: 'workGo',
            component: () => import('@/views/dashboard/workGo'),
            meta: { title: '工作经验', keepAlive: true, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '关于我', keepAlive: true, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/data',
            name: 'data',
            component: () => import('@/views/dashboard/data'),
            meta: { title: '数据页', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      }

    //   // result
    //   {
    //     path: '/result',
    //     name: 'result',
    //     component: RouteView,
    //     redirect: '/result/success',
    //     meta: { title: 'menu.result', icon: 'check-circle-o', permission: ['result'] },
    //     children: [
    //       {
    //         path: '/result/success',
    //         name: 'ResultSuccess',
    //         component: () => import('@/views/result/Success'),
    //         meta: { title: 'menu.result.success', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
    //       },
    //       {
    //         path: '/result/fail',
    //         name: 'ResultFail',
    //         component: () => import('@/views/result/Error'),
    //         meta: { title: 'menu.result.fail', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
    //       }
    //     ]
    //   }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
//   {
//     path: '/user',
//     component: UserLayout,
//     redirect: '/user/login',
//     hidden: true,
//     children: [
//       {
//         path: 'login',
//         name: 'login',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
//       },
//       {
//         path: 'register-result',
//         name: 'registerResult',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
//       },
//       {
//         path: 'recover',
//         name: 'recover',
//         component: undefined
//       }
//     ]
//   },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
