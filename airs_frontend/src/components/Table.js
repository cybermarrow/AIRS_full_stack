import React from 'react';
import { Table } from 'antd';

// const columns = [{
//   title: 'Title',
//   dataIndex: 'title',
// }, {
//   title: 'Content',
//   dataIndex: 'content',
// }];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

class TableView extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/aws/instances`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        data: data
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return(
        <Table columns={columns} dataSource={data} rowKey='id' size="middle" />
    );
  }
}
export default TableView;