import React, {Component} from "react";
import {Table, Icon, Tooltip, Popconfirm} from "antd"
import ModalWork from "./component/modalWork"

const dataSource = [{
    key: '1',
    title: '孙涛勇：“小前台+大中台” 构建未来零售蓝图',
    link: 'javascript:;',
    release: '微盟官网(ID:9)',
    date: "时间",
    operation: "操作"
}, {
    key: '2',
    title: '孙涛勇：“小前台+大中台” 构建未来零售蓝图',
    link: 'javascript:;',
    release: '微盟官网(ID:9)',
    date: "时间",
    operation: "操作"
}];

const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '连接',
    dataIndex: 'link',
    key: 'link',
}, {
    title: '住址',
    dataIndex: 'release',
    key: 'release',
},
    {
        title: "时间",
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: "操作",
        dataIndex: 'operation',
        render: (text, record) => {
            return(
            <div>
                <ModalWork value={record} color="#24aa7d" title="编辑" type="edit"></ModalWork>
                <Popconfirm title="确定要删除吗?" okText="确定" cancelText="取消">
                    <Tooltip placement="top" title="删除">
                        <Icon type="delete" style={{fontSize: "24px", padding: '10px'}} theme="twoTone"
                              twoToneColor="#d81e06"></Icon>
                    </Tooltip>
                </Popconfirm>
            </div>)
        },
    }
];

const NoticeTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns}
                   pagination={{
                       total: 50,
                       hideOnSinglePage: true,
                       showQuickJumper: true,
                       showSizeChanger: true

                   }}/>
        </div>

    )
}


export default NoticeTable