import React from 'react';
import {Button, Card, Message, Select, Table, Typography} from '@arco-design/web-react';
import useRequest, {baseUrl} from "@/utils/useRequest";
import {RenewInfo} from "@/model/interface";
import axios from "axios";

const submitChange = async (id, reason) => {
    await axios
        .get(baseUrl + '/renew/change?cus_id=' + id + '&reason=' + reason)
        .then((res) => {
            if (res.status === 200 || res.status === 204) {
                Message.success('提交成功!')
            } else {
                Message.error('提交失败!')
            }
        });
}
const {Title} = Typography;

const App = () => {

    const [loading, data, refresh] = useRequest<RenewInfo[]>('/renew', []);

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
            dataIndex: "rebirth_reason",
            render: (_, record) => (
                <Select
                    disabled={record.rebirth_reason !== ""}
                    style={{width: 154}}
                    triggerProps={{
                        autoAlignPopupWidth: false,
                        autoAlignPopupMinWidth: true,
                        position: 'br',
                    }}
                    defaultValue={record.rebirth_reason}
                    onChange={(value) => {
                        record.rebirth_reason = value
                    }}
                >
                    {[
                        "正常结算后解除",
                        "在其他金融机构违约解除，或外部评级显示为非违约级别",
                        "计提比例小于设置界限",
                        "连续 12 个月内按时支付本金和利息",
                        "客户的还款意愿和还款能力明显好转，已偿付各项逾期本金、逾期利息和其他费用（包括罚息等），且连续 12 个月内按时支付本金、利息",
                        "导致违约的关联集团内其他发生违约的客户已经违约重生，解除关联成员的违约设定"
                    ].map((option, index) => (
                        <Select.Option key={option} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
            )
        },
        {
            title: "操作",
            dataIndex: "operation",
            render: (_, record) => {
                if (record.rebirth_reason === "") {
                    return <Button
                        onClick={() => {
                            if (record.rebirth_reason === "") {
                                Message.error("请选择重生原因")
                                return
                            }
                            submitChange(record.cus_id, record.rebirth_reason).then(() => refresh())
                        }
                        }
                        type='primary'
                        status='danger'
                    >提交审核
                    </Button>
                } else {
                    return "审核已提交"
                }
            }
        }
    ];

    return (
        <Card>
            <Title heading={6}>{"重生表"}</Title>
            <Table loading={loading} columns={columns} data={data}/>
        </Card>)
};

export default App;
