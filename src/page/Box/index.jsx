import React from 'react'
import { Menu } from 'antd'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'

const Box = () => {

    const menuList = [
        { label: '首页', key: 'home' },
        { label: '热门', key: 'hot' },
        { label: '技术', key: 'technology' },
        { label: '生活', key: 'life' },
    ]

    return (
        <div className="Box">
            <header>
                <Menu mode="horizontal" items={menuList} />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
}

export default Box;
