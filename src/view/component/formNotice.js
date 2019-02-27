import React ,{Component} from "react"
import { Form ,Input } from "antd"

export default class FormNotice extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form>
                <Form.Item
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
            </Form>
        )
    }
}