import { Input } from "antd"
import { useEffect, useState } from "react"
import './index.less'
import MarkDown from "@/components/MarkDown"

const Latest = () => {

    return <div className="latest" style={{display: 'flex', height: '100%'}}  >
        <MarkDown/>
    </div>
}

export default Latest