import React , {Component} from "react";
import {Select} from "antd"
const Option = Select.Option
function  handleChange(value) {
    console.log(`selected ${value}`);
}

export default class User extends Component{

    render(){
        return(
            <Select defaultValue="管理员" style={{ width: 120,float:'right', marginTop:'2.6vh',marginRight:"30px"}} onChange={handleChange}>
                <Option value="Log out">Log out</Option>
            </Select>
        )
    }
}