import React from 'react';
import {Button, Card, Select, Table, Typography} from '@arco-design/web-react';
import './mock';
import useRequest, {baseUrl} from "@/utils/useRequest";
import {RenewInfo} from "@/model/interface";
import axios from "axios";

const empty = () => {
    axios
        .get(baseUrl + '/renew/change')
        .then((res) => {
            console.log(res);
        });
}
const {Title} = Typography;
const columns = [
    {
        title: '违约客户名',
        dataIndex: 'cus_name',
    },
    {
        title: '认定违约原因',
        dataIndex: 'reason',
    },
    {
        title: '严重程度',
        dataIndex: 'degree',
    },
    {
        title: '认定人',
        dataIndex: 'identify_name',
    },
    {
        title: "认定申请时间",
        dataIndex: "request_time",
    },
    {
        title: "重生原因",
        dataIndex: "op",
        render: (_, record) => (
            <Select
                placeholder='Please select'
                style={{width: 154}}
            >
                {[1, 2, 3].map((option, index) => (
                    <Select.Option key={option} disabled={index === 3} value={option}>
                        {option}
                    </Select.Option>
                ))}
            </Select>
        )
    },
    {
        title: "操作",
        dataIndex: "operation",
        render: (_, record) => (
            <Button
                onClick={() => empty()}
                type='primary'
                status='danger'
            >提交审核
            </Button>
        )
    }
];

const App = () => {

    const [loading, data] = useRequest<RenewInfo[]>('/renew', []);

    return (
        <Card>
            <Title heading={6}>{"重生表"}</Title>
            <Table loading={loading} columns={columns} data={data}/>
        </Card>)
};

export default App;
