import React, {Component} from "react"
import {
    Form, Icon, Input, Button, DatePicker, Select, Radio
} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from "moment"
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
    constructor(props){
        super(props)

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const config = {
            initialValue:moment(`${this.props.rowValue.value.date}`),
            rules: [{type: 'object', required: true, message: 'Please select time!'}],

        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 14 },
                sm: { span: 14 },
            },
        };


        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="标题"
                >
                    {getFieldDecorator("title", {
                        initialValue:this.props.rowValue.value.title,
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
                        <Input  allowClear  />
                    )}

                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="链接"
                >
                    {
                        getFieldDecorator("link", {
                            initialValue:this.props.rowValue.value.link,
                            rules: [{
                                required: true,
                                message: "链接"
                            }],
                        })(
                            <Input allowClear/>
                        )
                    }
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="日期"

                >
                    {getFieldDecorator('date-time-picker', config)(
                        <DatePicker  locale={locale} allowClear />
                    )}
                </Form.Item>
                <Form.Item
                    label="发布"
                    {...formItemLayout}
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