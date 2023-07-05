import React, {useEffect, useState} from 'react';
import {Card, Table, Typography,} from '@arco-design/web-react';
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

function App() {
    const [loading, data] = useRequest<ReasonInfo[]>('/reason', []);
    const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([]);

    useEffect(() => {
        if (data.length === 0) return;
        let selected = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].enabled === 'true') {
                selected.push(data[i].id);
            }
        }
        setSelectedRowKeys(selected)
    }, [data]);
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
                        onSelectAll: (selected, selectedRows) => {
                            for (let i = 0; i < data.length; i++) {
                                axios
                                    .get(baseUrl + `/reason/change?id=${data[i].id}&selected=${selected}`)
                                    .then((res) => {
                                        if (selected) {
                                            setSelectedRowKeys(data.map((item) => item.id));
                                        } else {
                                            setSelectedRowKeys([]);
                                        }
                                    })
                            }
                        }
                    }}
          />
        </div>

      </Card>
  );
}

export default App;


