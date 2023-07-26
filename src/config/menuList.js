import Article from '@/page/Article'
import Home from '@/page/Home'
import Latest from '@/page/Latest'
import Question from '@/page/Question'

export const menuList = [
    { label: '首页', key: '/', component: <Home/> },
    { label: '最新', key: '/latest', component: <Latest/> },
    { label: '提问', key: '/question', component: <Question/> },
    { label: '文章详情', key: '/article/:id', menuDisplay: false, component: <Article/> },
]