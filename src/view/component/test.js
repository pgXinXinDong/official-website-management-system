import React, {Component} from "react"
import {
    Form, Icon, Input, Button, DatePicker, Select, Radio
} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';

const Option = Select.Option;
const children = [];


for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const validateToText = (rule, value, callback) => {
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
            rules: [{type: 'object', required: true, message: 'Please select time!'}],
        };
        return (
            <Form>
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
                        getFieldDecorator("link", {
                            rules: [{
                                required: true,
                                message: "链接"
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
                        <DatePicker locale={locale}/>
                    )}
                </Form.Item>
                <Form.Item
                    label="发布"
                >
                    {
                        getFieldDecorator("select", {
                            rules: [{
                                required: true,
                                message: "发布选择"
                            }]
                        })(
                            <Select
                                mode="tags"
                            >
                                {children}
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        )

    }

}


const Dynami = Form.create({name: "Dynami"})(DynamiForm)

export default Dynami