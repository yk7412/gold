import { Input } from "antd"
import { useEffect, useState } from "react"

const Latest = () => {

    const [value, setValue] = useState('')
    return <div className="latest" style={{display: 'flex', height: '100%'}}  >
        <div className="left" style={{height: '100%', width: '50%', border: '1px solid #000'}} >
            <Input.TextArea style={{height: '100%'}} onChange={event => setValue(event.target.value)} />
        </div>
        <div className="right" style={{height: '100%', width: '50%', border: '1px solid #000'}} >
            <RenderHtml data={value} />
        </div>
    </div>
}

const RenderHtml = ({data = ''}) => {
    useEffect(() => {
        if(data) {

        }
    }, [data])
    return <div className="renderHtml">
        {data}
    </div>
}

export default Latest