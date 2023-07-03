import React, {useState} from 'react';
import {Card, Table, Typography,} from '@arco-design/web-react';
import './mock';

const {Title} = Typography;


const columns = [
  {
    title: "序号",
    dataIndex: "number"
  },
  {
    title: "违约原因",
    dataIndex: "reason"
  },
  {
    title: "是否启用",
    dataIndex: "isTrigger"
  },

];
const data = [
  {
    id: '1',
    number: "1",
    reason: "6个月内，交易对手技术性或资金原因，给当天结算带来头寸缺口2次以上",
    isTrigger: "false"
  },
  {
    id: '2',
    number: "2",
    reason: "6个月内各种原因导致撤单两次以上",
    isTrigger: "false"
  },
  {
    id: '3',
    number: "3",
    reason: "未能按照规定在宽限期内完成交付义务",
    isTrigger: "false"
  },
  {
    id: '4',
    number: "4",
    reason: "关联违约",
    isTrigger: "false"
  },
  {
    id: '5',
    number: "5",
    reason: "发生消极债务置换",
    isTrigger: "false"
  },
  {
    id: '6',
    number: "6",
    reason: "处于破产保护状态",
    isTrigger: "false"
  }
];

function App() {
  const [type] = useState('checkbox');
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(['4']);
  return (
      <Card>
        <Title heading={6}>{"违约原因"}</Title>
        <div>
          <Table
              rowKey='id'
              columns={columns}
              data={data}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys,
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log('onChange:', selectedRowKeys, selectedRows);
                  setSelectedRowKeys(selectedRowKeys);
                },
                onSelect: (selected, record, selectedRows) => {
                  console.log('onSelect:', selected, record, selectedRows);
                },

              }}
          />
        </div>

      </Card>
  );
}

export default App;


