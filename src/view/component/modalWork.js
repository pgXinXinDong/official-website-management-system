import React,{Component} from "react";
import {Modal,Tooltip,Icon} from "antd"
import FormNotice from "./formNotice"

export default class ModelWork extends Component{
    constructor(props){
        super(props)

    }
    state = {
        visible:false
    }

   showModal = ()=>{
        this.setState({
            visible:true
        })
   }

   handleCancel = (e) =>{
        this.setState({
            visible:false
        })
   }

    handleOk = (e) =>{
        this.setState({
            visible:false
        })
   }

    render(){
        return(
            <Tooltip  placement="top" title={this.props.title} style={{padding:'10px'}}>
                <Icon type={this.props.type} style={{fontSize:"24px",padding:'10px'}}
                      theme="twoTone" twoToneColor={this.props.color}
                      onClick = {this.showModal}

                ></Icon>
                <Modal
                    title={this.props.title+"公告"}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    okText="确认"
                    cancelText="取消"
                >
                    <FormNotice rowValue={this.props}/>
                </Modal>
            </Tooltip>

        )
     }
}