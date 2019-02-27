import React, {Component} from "react"
import {
    Form, Icon, Input, Button,DatePicker
} from 'antd';


const validateToText = (rule, value, callback) => {
    console.log("rule",rule)
    console.log("value",value)
    console.log("callback",callback)
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], {force: true});
    }
    callback();
}


class DynamiForm extends Component {


    render() {
        const {getFieldDecorator} = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        return (
            <Form layout="inline">
                <Form.Item
                    label="标题"
                >
                    {getFieldDecorator("title", {
                        rules: [
                            {
                                required: true,
                                message: "请输入标题",
                            },
                            {
                                validator: this.validateToText
                            }
                        ]
                    })(
                        <Input/>
                    )}

                </Form.Item>
                <Form.Item
                    label="链接"
                >
                    {
                        getFieldDecorator("link",{
                            rules:[{
                                required:true,
                                message:"链接"
                            }]
                        })(
                            <Input/>
                        )
                    }
                </Form.Item>
                <Form.Item
                    label="日期"
                >
                    {getFieldDecorator('date-time-picker', config)(
                        <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                </Form.Item>
            </Form>
        )

    }

}


const Dynami = Form.create({name: "Dynami"})(DynamiForm)

export default Dynami