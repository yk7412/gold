import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Headers from '@/components/Headers'
import { menuList } from '@/config/menuList'
import './index.less'

const Box = () => {

    return (
        <div className="box">
            <header>
                <Headers />
            </header>
            <main>
                <Routes>
                    {
                        menuList.map(item => {
                           return <Route path={item.key} element={item.component} />
                        })
                    }
                </Routes>
            </main>
        </div>
    );
}

export default Box;
