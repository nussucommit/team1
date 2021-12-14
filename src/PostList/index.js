import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: '#',
        title: `test title ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Created by developer on Dec 8th, 2021',
        content:
            'Testing.',
    });
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const PostList = () => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 10,
        }}
        dataSource={listData}
        renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                }
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />
);

export default PostList