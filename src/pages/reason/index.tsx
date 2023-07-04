import React, {useState} from 'react';
import {Card, Table, Typography,} from '@arco-design/web-react';
import './mock';
import useRequest, {baseUrl} from "@/utils/useRequest";
import {ReasonInfo} from "@/model/interface";
import axios from "axios";

const {Title} = Typography;


const columns = [
  {
    title: "序号",
    dataIndex: "id"
  },
  {
    title: "违约原因",
    dataIndex: "reason"
  }
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
  const [loading, data] = useRequest<ReasonInfo[]>('/reason', []);
  let selected = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].enabled == true) {
      selected.push(data[i].id);
    }
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(selected);
  return (
      <Card>
        <Title heading={6}>{"违约原因"}</Title>
        <div>
          <Table
              loading={loading}
              rowKey='id'
              columns={columns}
              data={data}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys,
                onSelect: (selected, record, selectedRows) => {
                  console.log('onSelect:', selected, record, selectedRows);
                  axios
                      .get(baseUrl + `/reason/change?id=${record.id}&selected=${selected}`)
                      .then((res) => {
                        setSelectedRowKeys(selectedRows.map((item) => item.id));
                      })
                },
              }}
          />
        </div>

      </Card>
  );
}

export default App;


