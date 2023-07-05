import React from 'react';
import {Button, Card, DatePicker, Form, Input, Message, Select, Space, Typography,} from '@arco-design/web-react';
import styles from './style/index.module.less';
import axios from "axios";
import useRequest, {baseUrl} from "@/utils/useRequest";
import {ReasonInfo} from "@/model/interface";

const {Title, Paragraph} = Typography;

function StepForm() {
    const [form] = Form.useForm();

    const [loading, data] = useRequest<ReasonInfo[]>('/reason', []);

    const submit = async () => {
        await form.validate();
        axios
            .get(baseUrl + "/request?" + objectToQueryString(form.getFieldsValue()))
            .then((res) => {
                if (res.status === 200 || res.status === 204) {
                    Message.success('提交成功！')
                } else {
                    Message.error('提交失败！')
                }
            })
    };
    return (
        <div className={styles.container}>
            <Card loading={loading}>
                <Title heading={5}>{"创建认定申请表"}</Title>
                <div className={styles.wrapper}>
                    <Form form={form} className={styles.form}>
                        <Form.Item noStyle>
                            <Form.Item
                                label={"违约客户编号"}
                                required
                                field="id"
                                rules={[
                                    {
                                        required: true,
                                        message: "违约客户编号不能为空！",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder={"请输入违约客户编号！"}
                                />
                            </Form.Item>
                            <Form.Item
                                label={"客户名称"}
                                required
                                field="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "客户名称不能为空！",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder={"请输入客户名称！"}
                                />
                            </Form.Item>
                            <Form.Item
                                label={"违约原因"}
                                field="reason"
                                required
                                rules={[
                                    {
                                        required: true,
                                        message: "违约原因不能为空！",
                                    },
                                ]}
                            >
                                <Select>
                                    {
                                        data?.map((item) => (
                                            <Select.Option value={item.id}>{item.reason}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={"备注信息"}
                                field="remarks"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input
                                    placeholder={"可填写备注信息"}
                                />
                            </Form.Item>
                            <Form.Item
                                label={"严重程度"}
                                required
                                initialValue="低"
                                field="degree"
                                rules={[
                                    {
                                        required: true,
                                        message: "严重程度不能为空！",
                                    },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="低">低</Select.Option>
                                    <Select.Option value="中">中</Select.Option>
                                    <Select.Option value="高">高</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={"认定申请人"}
                                required
                                field="identify_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "认定申请人不能为空！",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder={"请输入认定申请人！"}
                                />
                            </Form.Item>
                            <Form.Item
                                label={"认定申请时间"}
                                required
                                field="request_time"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入认定申请时间",
                                    },
                                ]}
                            >
                                <DatePicker style={{width: '100%'}}/>
                            </Form.Item>

                        </Form.Item>
                    </Form>
                    <div style={{width: "100%"}}>
                        <Space size="large" className={styles.Button}>
                            <Button type="primary" onClick={submit}>申请</Button>
                        </Space>
                    </div>
                </div>
            </Card>
        </div>
    );
}

function objectToQueryString(obj) {
    return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}

export default StepForm;
