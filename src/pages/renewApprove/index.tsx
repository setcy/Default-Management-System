import React from 'react';
import {Button, Card, Table, Typography} from '@arco-design/web-react';
import './mock';
import useRequest from "@/utils/useRequest";
import {RenewApproveInfo} from "@/model/interface";

const {Title} = Typography;
const empty = () => {
};
const enter = () => {
};
const columns = [
    {
        title: '违约客户名',
        dataIndex: 'cus_name'
    },
    {
        title: '认定违约原因',
        dataIndex: 'reason'
    },
    {
        title: "严重程度",
        dataIndex: "degree"
    },
    {
        title: "认定申请人",
        dataIndex: "identify_name"
    },
    {
        title: "认定申请时间",
        dataIndex: "request_time"
    },
    {
        title: "重生原因",
        dataIndex: "rebirth_reason"
    },
    {
        title: "审核操作",
        dataIndex: "operation",
        render: (_, record) => (
            <>
                <Button onClick={() => empty()}
                        type="primary"
                        status="danger">拒绝</Button>&nbsp;
                <Button onClick={() => empty()}
                        type="primary"
                        status="success"
                >通过</Button></>
        )

    }
];

const App = () => {

    const [loading, data] = useRequest<RenewApproveInfo[]>('/renewApprove', []);

    return (
        <Card>
            <Title heading={6}>{""}</Title>
            <Table loading={loading} columns={columns} data={data}/>
        </Card>)
};

export default App;


