import React from 'react';
import {Button, Card, Table, Typography} from '@arco-design/web-react';
import './mock';

const empty = () => {
}
const {Title} = Typography;
const columns = [
    {
        title: '违约客户名',
        dataIndex: 'name',
    },
    {
        title: '认定违约原因',
        dataIndex: 'reason',
    },
    {
        title: '严重程度',
        dataIndex: 'level',
    },
    {
        title: '认定人',
        dataIndex: 'main',
    },
    {
        title: "认定申请时间",
        dataIndex: "time",
    },
    {
        title: "重生原因",
        dataIndex: "renew"
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
const data = [
    {
        key: '1',
        name: '',
        reason: "",
        level: '',
        main: '',
        time: "",
        renew: "",
        operation: ""
    }
];
const App = () => {
    return (
        <Card>
            <Title heading={6}>{"重生表"}</Title>
            <Table columns={columns} data={data}/>
        </Card>)
};

export default App;
