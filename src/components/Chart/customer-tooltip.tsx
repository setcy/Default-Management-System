import React from 'react';
import {Badge, Typography} from '@arco-design/web-react';
import styles from './style/index.module.less';

const {Text} = Typography;

interface TooltipProps {
    title: string;
    data: {
        name: string;
        value: string;
        color: string;
    }[];
    color?: string;
    name?: string;
    formatter?: (value: string) => React.ReactNode;
}

function CustomTooltip(props: TooltipProps) {
    const {formatter = (value) => value, color, name} = props;
    return (
        <div className={styles['customer-tooltip']}>
            <div>
                <Text bold>{props.title}</Text>
            </div>
            <div>
                {props.data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Badge color={color || item.color}/>
                            {name || item.name}
                        </div>
                        <div>
                            <Text bold>{formatter(item.value)}</Text>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomTooltip;
