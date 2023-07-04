import React from 'react';
import {Card, Input, Table} from '@arco-design/web-react';
import './mock';
import Title from '@arco-design/web-react/es/Typography/title';
import {BaseInfo} from "@/model/interface";
import {baseUrl} from "@/utils/useRequest";
import axios from "axios";

const InputSearch = Input.Search;
const columns = [
    {
        title: "违约客户编号",
        dataIndex: "cus_id"
    },
    {
        title: "违约客户名",
        dataIndex: "cus_name"
    },
    {
        title: "审核状态",
        dataIndex: "verify_condition"
    },
    {
        title: "认定违约原因",
        dataIndex: "reason"
    },
    {
        title: "认定人",
        dataIndex: "identify_name"
    },
    {
        title: "严重程度",
        dataIndex: "degree"
    },
    {
        title: "认定申请时间",
        dataIndex: "register_time"
    },
    {
        title: "审核时间",
        dataIndex: "verify_time"
    }
];

const App = () => {

    const [data, setData] = React.useState<BaseInfo[]>([]);
    const search = (value: string) => {
        axios
            .get(baseUrl + "/search?" + `name=${value}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }

    return (
        <Card>
            <Title heading={6}>{"违约信息表"}</Title>
            <InputSearch allowClear placeholder="Enter keyword to search" style={{width: 350}} onSearch={search}/>
            <p></p>
            <Table columns={columns} data={data}/>
        </Card>
    )
};
export default App;
