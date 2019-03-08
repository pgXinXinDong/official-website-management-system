import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card, Icon, Avatar, Row, Col} from 'antd';
const {Meta} = Card;



export default class WorkBench extends Component {
    render() {
        return (
            <div>
                <Row gutter={40}>
                    <Col className="gutter-row" span={10} offset={2}>
                        <Link to="javascript:;">
                            <Card
                                style={{position: 'relative'}}
                                type="inner"
                            >
                                <Meta
                                    avatar={<Icon type="sound" theme="twoTone" twoToneColor="#2589ff"
                                                  style={{fontSize: '50px', lineHeight: '100%'}}/>}
                                    title="公告管理"
                                    description="已发布：3"

                                />

                                <Icon type="setting"
                                      twoToneColor="#02aa31"
                                      style={{position: "absolute", right: '10px', fontSize: '40px', top: '20px'}}
                                      theme="twoTone"/>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={10}>
                        <Link to="javascript:;">
                            <Card
                                style={{position: 'relative'}}
                                type="inner"
                            >
                                <Meta
                                    avatar={<Icon type="box-plot"  theme="twoTone" twoToneColor="#00c0f1"
                                                  style={{fontSize: '50px', lineHeight: '100%'}}/>}
                                    title="动态管理"
                                    description="已发布：3"

                                />

                                <Icon type="setting"
                                      twoToneColor="#02aa31"
                                      style={{position: "absolute", right: '10px', fontSize: '40px', top: '20px'}}
                                      theme="twoTone"/>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                <Row gutter={40} style={{marginTop: '40px'}}>
                    <Col className="gutter-row" span={10} offset={2}>
                        <Link to="javascript:;">
                            <Card
                                style={{position: 'relative'}}
                                type="inner"
                            >
                                <Meta
                                    avatar={<Icon type="schedule" theme="twoTone" twoToneColor="#7266ba"
                                                  style={{fontSize: '50px', lineHeight: '100%'}}/>}
                                    title="商家案例管理"
                                    description="已发布：296"

                                />

                                <Icon type="setting"
                                      twoToneColor="#02aa31"
                                      style={{position: "absolute", right: '10px', fontSize: '40px', top: '20px'}}
                                      theme="twoTone"/>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}