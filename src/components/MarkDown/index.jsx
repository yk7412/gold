import { Input } from "antd"
import { useEffect, useState } from "react"
import './index.less'

const MarkDown = () => {

    const [value, setValue] = useState('')

    return <div className="markDown" >
        <div className="left" >
            <Input.TextArea onChange={event => setValue(event.target.value)} />
        </div>
        <div className="right" >
            {renderFn(stringFormat(value))}
        </div>
    </div>
}

const blockRule = (data) => {
    if(/^>\s/.test(data)) {
        return {
            tag: 'tip',
            children: data.replace(/^>\s/, '')
        }
    }else {
        return inlineRule(data)
    }
}

const inlineRule = (data) => {
    if (/^#{1}\s/.test(data)) {
        return {
            tag: `h1`,
            children: data.replace(/^#{1}\s/, '')
        }
    } else if (/^#{2}\s/.test(data)) {
        return {
            tag: `h2`,
            children: data.replace(/^#{2}\s/, '')
        }
    } else if (/^#{3}\s/.test(data)) {
        return {
            tag: `h3`,
            children: data.replace(/^#{3}\s/, '')
        }
    } else if (/^#{4}\s/.test(data)) {
        return {
            tag: `h4`,
            children: data.replace(/^#{4}\s/, '')
        }
    } else if (/^#{5}\s/.test(data)) {
        return {
            tag: `h5`,
            children: data.replace(/^#{5}\s/, '')
        }
    } else if (/^#{6}\s/.test(data)) {
        return {
            tag: `h6`,
            children: data.replace(/^#{6}\s/, '')
        }
    } else if (/^#{7}\s/.test(data)) {
        return {
            tag: `h7`,
            children: data.replace(/^#{7}\s/, '')
        }
    } else {
        return {
            tag: 'p',
            children: data
        }
    }
}


const stringFormat = (data = '') => {
    const result = []
    console.log(data.split('\n'))
    let blockItem = {}
    data.split('\n').forEach(item => {
        if(/^>\s/.test(data)) {
            result.push({
                tag: 'tip',
                children: [
                    
                ]
            })
        }
        result.push(blockRule(item))

    })
    return result
}


const renderFn = (data) => {
    return data && data.map(item => {
        if (item.tag === 'h1') {
            return <h1>{item.children}</h1>
        } else if (item.tag === 'h2') {
            return <h2>{item.children}</h2>
        } else if (item.tag === 'h3') {
            return <h3>{item.children}</h3>
        } else if (item.tag === 'h4') {
            return <h4>{item.children}</h4>
        } else if (item.tag === 'h5') {
            return <h5>{item.children}</h5>
        } else if (item.tag === 'h6') {
            return <h6>{item.children}</h6>
        }else if (item.tag === 'tip') {
            return <div className="tip">{item.children}</div>
        } else {
            return <p>{item.children}</p>
        }

    })
}

export default MarkDown