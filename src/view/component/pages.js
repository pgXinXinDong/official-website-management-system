import React ,{Component} from "react";
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
    console.log(1111,current)
    console.log(1111,type)
    console.log(1111,originalElement)
    if (type === '前一页') {
        return <a>Previous</a>;
    } if (type === '后一页') {
        return <a>Next</a>;
    }
    return originalElement;
}

const Pages = ()=>{
    return(
        <Pagination total={500} itemRender={itemRender} />
    )
}

export default Pages