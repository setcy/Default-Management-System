import React, {useEffect, useState} from 'react';
import {Card, Grid, Radio, Space, Typography} from '@arco-design/web-react';
import axios from 'axios';
import MultiInterval from '@/components/Chart/multi-stack-interval';
import PeriodLine from '@/components/Chart/period-legend-line';
import {baseUrl} from "@/utils/useRequest";

const {Row, Col} = Grid;

function DataAnalysis() {
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState([]);

    const [rule1, setRule1] = useState('按行业');
    const [rule2, setRule2] = useState('违约');

    const getChartData = async (rule1: string, rule2: string) => {
        setLoading(true);
        const {data} = await axios
            .get(baseUrl + '/statistic?rule1=' + rule1 + '&rule2=' + rule2)
            .finally(() => setLoading(false));
        setChartData(data);
    };

    useEffect(() => {
        getChartData(rule1, rule2);
    }, [rule1, rule2]);

    return (
        <Space size={16} direction="vertical" style={{width: '100%'}}>
            <span style={{margin: "0 200px", display: "flex", justifyContent: "space-around"}}>
                <Radio.Group defaultValue={rule1} name='type' type='button' onChange={(value) => setRule1(value)}>
                    <Radio value='按行业'>按行业</Radio>
                    <Radio value='按区域'>按区域</Radio>
                </Radio.Group>
                <Radio.Group defaultValue={rule2} name='type' type='button' onChange={(value) => setRule2(value)}>
                    <Radio value='违约'>违约</Radio>
                    <Radio value='违约重生'>违约重生</Radio>
                </Radio.Group>
            </span>
            <Row>
                <Col>
                    <Card>
                        <Typography.Title heading={6}>
                            {"各行业主体个数"}
                        </Typography.Title>
                        <PeriodLine data={chartData} loading={loading}/>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Typography.Title heading={6}>
                            {"各行业占比"}
                        </Typography.Title>
                        <MultiInterval data={chartData} loading={loading}/>
                    </Card>
                </Col>
            </Row>
        </Space>
    );
}

export default DataAnalysis;
