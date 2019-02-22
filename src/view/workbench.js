import React ,{Component} from "react";
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class WorkBench extends Component{
    render(){
        return(
            <Card
                style={{ width: 300 }}
                title="Inner Card title"
                extra={<a href="#">More</a>}
            >
                <Card
                    type="inner"
                >
                    <Meta
                        avatar={<Icon type="sound" theme="twoTone" twoToneColor="#eb2f96" style={{fontSize:'50px',lineHeight:'100%'}}/>}
                        title="公告管理"
                        description="已发布：3"
                    />
                </Card>

            </Card>
        )
    }
}