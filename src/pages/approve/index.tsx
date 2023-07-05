import React from 'react';
import {Button, Card, Message, Table, Typography} from '@arco-design/web-react';
import useRequest, {baseUrl} from "@/utils/useRequest";
import {ApplyInfo} from "@/model/interface";
import axios from "axios";

const App = () => {

    const [loading, data, refresh] = useRequest<ApplyInfo[]>('/approve', []);

    const columns = [
        {
            title: "违约客户编号",
            dataIndex: 'cus_id'
        },
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
      title: "审核操作",
      dataIndex: "operation",
      render: (_, record) => {
          switch (record.verify_condition) {
              case "true":
                  return "已通过";
              case "false":
                  return "已拒绝";
              default:
                  return (
                      <>
                          <Button onClick={() => {
                              audit(record.cus_id, false).then(() => refresh())
                          }}
                                  type="primary"
                                  status="danger">拒绝</Button>
                          <Button onClick={() => {
                              audit(record.cus_id, true).then(() => refresh())
                          }}
                                  type="primary"
                                  status="success"
                          >通过</Button>
                      </>
                  )
          }
      }

    }
    ];

    const audit = async (id: number, info: boolean) => {
        await axios
            .get(baseUrl + "/approve/change?" + `cus_id=${id}&verify_condition=${info}`)
            .then((res) => {
                if (res.status === 200 || res.status === 204) {
                    Message.success('提交成功！')
                } else {
                    Message.error('提交失败！')
                }
            })
    };

  return (
      <Card>
        <Title heading={6}>{""}</Title>
        <Table loading={loading} columns={columns} data={data}/>
      </Card>)
};

export default App;

const {Title} = Typography;

