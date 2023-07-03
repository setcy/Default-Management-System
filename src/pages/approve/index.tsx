import React from 'react';
import {Button, Card, Table, Typography} from '@arco-design/web-react';
import './mock';

const empty = () => {
};
const enter = () => {
};
const columns = [
  {
    title: "违约客户编号",
    dataIndex: 'number'
  },
  {
    title: '违约客户名',
    dataIndex: 'name'
  },
  {
    title: '审核状态',
    dataIndex: 'state'
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
    number: "",
    name: '',
    state: "",
    reason: "",
    level: '',
    apply: '',
    applytime: "",
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

const {Title} = Typography;

