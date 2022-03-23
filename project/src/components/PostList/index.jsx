import React from "react";
import { List } from 'antd';
import { postData } from "../../posts.js";
import { Post } from '../Post';



const _PostList = () => {
  return (

    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={postData}
      pagination={{ pageSize: 9, }}
      style={{ marginBottom: '30px' }}
      renderItem={item => (
        <List.Item>
          <Post item={item} />

        </List.Item>
      )}
    />

  );
}

export default _PostList;