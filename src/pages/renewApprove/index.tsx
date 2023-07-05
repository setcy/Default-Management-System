import React from 'react';
import {Button, Card, Message, Table, Typography} from '@arco-design/web-react';
import useRequest, {baseUrl} from "@/utils/useRequest";
import {RenewApproveInfo} from "@/model/interface";
import axios from "axios";

const {Title} = Typography;
const submitRenewApprove = (id: number, isApprove: boolean) => {
    axios
        .get(baseUrl + '/renewApprove/change?cus_id=' + id + '&isApprove=' + isApprove)
        .then((res) => {
            if (res.status === 200 || res.status === 204) {
                Message.success('提交成功!')
            } else {
                Message.error('提交失败!')
            }
        });
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
                <Button onClick={() => submitRenewApprove(record.cus_id, false)}
                        type="primary"
                        status="danger">拒绝</Button>
                <Button onClick={() => submitRenewApprove(record.cus_id, true)}
                        type="primary"
                        status="success"
                >通过</Button>
            </>
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


