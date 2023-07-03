import React from 'react';
import {Button, Card, Table, Typography} from '@arco-design/web-react';
import './mock';

const {Title} = Typography;
const empty = () => {
};
const enter = () => {
};
const columns = [
    {
        title: '违约客户名',
        dataIndex: 'name'
    },
    {
        title: '认定违约原因',
        dataIndex: 'reason'
    },
    {
        title: "严重程度",
        dataIndex: "level"
    },
    {
        title: "认定申请人",
        dataIndex: "apply"
    },
    {
        title: "认定申请时间",
        dataIndex: "applytime"
    },
    {
        title: "重生原因",
        dataIndex: "renewreason"
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
const data = [
    {
        key: '1',
        name: '',
        reason: "",
        level: '',
        apply: '',
        applytime: "",
        renewreason: "",
        operation: ""
    }
];
const App = () => {
    return (
        <Card>
            <Title heading={6}>{""}</Title>
            <Table columns={columns} data={data}/>
        </Card>)
};

export default App;


