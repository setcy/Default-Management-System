import React from 'react';
import {Card, Input, Table} from '@arco-design/web-react';
import './mock';
import Title from '@arco-design/web-react/es/Typography/title';

const InputSearch = Input.Search;
const columns = [
    {
        title: "违约客户编号",
        dataIndex: "number"
    },
    {
        title: "违约客户名",
        dataIndex: "name"
    },
    {
        title: "审核状态",
        dataIndex: "state"
    },
    {
        title: "认定违约原因",
        dataIndex: "reason"
    },
    {
        title: "认定人",
        dataIndex: "main"
    },
    {
        title: "严重程度",
        dataIndex: "level"
    },
    {
        title: "认定申请时间",
        dataIndex: "applytime"
    },
    {
        title: "审核时间",
        dataIndex: "verifytime"
    }
];
const data = [
    {
        key: "1",
        number: "",
        name: "",
        state: "",
        reason: "",
        main: "",
        level: "",
        applytime: "",
        verifytime: ""
    }
];
const App = () => {
    return (
        <Card>
            <Title heading={6}>{"违约信息表"}</Title>
            <InputSearch allowClear placeholder="Enter keyword to search" style={{width: 350}}/>
            <p></p>
            <Table columns={columns} data={data}/>
        </Card>
    )
};
export default App;
