'use client';

import React, { useState } from 'react';
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Tag,
  Card,
  Collapse,
  Modal,
  Dropdown,
  Upload,
  Form,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Table,
  Tabs,
  Typography,
  Space,
  Flex,
  Progress,
  Skeleton,
  Divider,
  Pagination,
  Spin,
  notification,
  message,
} from 'antd';
import {
  DownloadOutlined,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
  InboxOutlined,
  UserOutlined,
  CheckOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

const HomePage = () => {
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();
  const [modalVisible, setModalVisible] = useState(false);
  const [slideModalVisible, setSlideModalVisible] = useState(false);
  const [checkedTags, setCheckedTags] = useState<string[]>([]);
  const [form] = Form.useForm();

  // Sample data for table
  const tableData = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
    },
  ];

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  const showToast = () => {
    api.success({
      message: '',
      description: 'Toast message shown!',
      placement: 'topRight',
      duration: 5,
    });
  };

  const showNotification = () => {
    api.success({
      message: 'Success Notification',
      description: 'This is a success notification message.',
      duration: 3,
    });
  };

  const dropdownItems = [
    {
      key: '1',
      label: 'Menu Item 1',
    },
    {
      key: '2',
      label: 'Menu Item 2',
    },
    {
      key: '3',
      label: 'Menu Item 3',
    },
  ];

  const uploadProps = {
    name: 'file',
    multiple: true,
    accept: '.png,.jpg,.jpeg',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        messageApi.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        messageApi.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      {contextHolder}
      {messageContextHolder}
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Title level={2} style={{ marginBottom: '20px' }}>
          Ant Design Components
        </Title>

        {/* Alert Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Alert
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space
            direction="vertical"
            style={{ width: '100%', marginBottom: '20px' }}
          >
            <Alert message="Primary Alert" type="info" />
            <Alert message="Warning Alert" type="warning" />
            <Alert message="Danger Alert" type="error" />
            <Alert message="Success Alert" type="success" />
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Toast
          </Title>
          <Button
            type="primary"
            onClick={showToast}
            style={{ marginBottom: '20px' }}
          >
            Show Toast
          </Button>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '28px' }}>
            Close Button
          </Title>
          <Alert
            message="Dismissible Alert"
            type="info"
            closable
            style={{ marginBottom: '20px' }}
          />
        </div>

        {/* Badge Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Badge
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>

          <Badge count={8} color="blue" size="small" />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '28px' }}>
            No Count
          </Title>

          <Badge dot color="blue" />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Truncated count
          </Title>

          <Badge count="99+" color="blue" size="small" />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Kind
          </Title>

          <Badge count={8} color="blue" size="small" />
          <Badge count={8} color="yellow" size="small" />
          <Badge count={8} color="red" size="small" />
          <Badge count={8} color="green" size="small" />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Placement
          </Title>
          <Badge count="99+" color="blue" size="small">
            <div
              style={{
                width: 40,
                height: 40,
                background: '#f0f0f0',
                borderRadius: 4,
              }}
            />
          </Badge>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Other components, like button
          </Title>
          <Button>
            <span>Label</span>
            <Badge
              count={8}
              color="blue"
              size="small"
              style={{ marginLeft: '8px' }}
            />
          </Button>
        </div>

        {/* Breadcrumb Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Breadcrumb
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Breadcrumb
            style={{ marginBottom: '20px' }}
            items={[
              { title: 'Dashboard' },
              { title: 'Quotes' },
              { title: 'Q82-2746-9645' },
            ]}
          />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Current page
          </Title>
          <Breadcrumb
            style={{ marginBottom: '20px' }}
            items={[{ title: 'Home' }, { title: 'You are here' }]}
          />
        </div>

        {/* Button Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Button
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
            <Button danger>Danger</Button>
            <Button type="primary" danger>
              Primary Danger
            </Button>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Disabled
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Button type="primary" disabled>
              Disabled
            </Button>
            <Button disabled>Disabled</Button>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Loading
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button loading>Loading</Button>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Size
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Button type="primary" size="small">
              Small
            </Button>
            <Button type="primary">Medium</Button>
            <Button type="primary" size="large">
              Large
            </Button>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            With Icon
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button icon={<EditOutlined />}>Edit</Button>
            <Button type="primary" icon={<SearchOutlined />} />
          </Space>
        </div>

        {/* Tag Section (Similar to Chip) */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Tag (Chip)
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Tag>Default</Tag>
            <Tag color="blue">Blue</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="red">Red</Tag>
            <Tag color="orange">Orange</Tag>
            <Tag color="purple">Purple</Tag>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Close Button
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Tag closable color="blue">
              Closable Blue
            </Tag>
            <Tag closable color="green">
              Closable Green
            </Tag>
            <Tag closable color="red">
              Closable Red
            </Tag>
          </Space>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Choice
          </Title>
          <Space wrap style={{ marginBottom: '20px' }}>
            <Tag.CheckableTag
              checked={checkedTags.includes('choice1')}
              onChange={checked => {
                if (checked) {
                  setCheckedTags([...checkedTags, 'choice1']);
                } else {
                  setCheckedTags(checkedTags.filter(tag => tag !== 'choice1'));
                }
              }}
            >
              Choice 1
            </Tag.CheckableTag>
            <Tag.CheckableTag
              checked={checkedTags.includes('choice2')}
              onChange={checked => {
                if (checked) {
                  setCheckedTags([...checkedTags, 'choice2']);
                } else {
                  setCheckedTags(checkedTags.filter(tag => tag !== 'choice2'));
                }
              }}
            >
              Choice 2
            </Tag.CheckableTag>
            <Tag.CheckableTag
              checked={checkedTags.includes('choice3')}
              onChange={checked => {
                if (checked) {
                  setCheckedTags([...checkedTags, 'choice3']);
                } else {
                  setCheckedTags(checkedTags.filter(tag => tag !== 'choice3'));
                }
              }}
            >
              Choice 3
            </Tag.CheckableTag>
          </Space>
        </div>

        {/* Card Section (Container/Panel) */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Card (Container/Panel)
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Card style={{ marginBottom: '20px' }}>
            <p>This is content inside a card component.</p>
          </Card>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            With Title
          </Title>
          <Card title="Card Title" style={{ marginBottom: '20px' }}>
            <p>Content in a card with title.</p>
          </Card>
        </div>

        {/* Collapse Section (Details/Accordion) */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Collapse (Details)
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Accordion
          </Title>
          <Collapse
            accordion
            style={{ marginBottom: '20px' }}
            items={[
              {
                key: '1',
                label: 'Title 1',
                children: (
                  <>
                    <Button>Content button</Button>
                    <br />
                    <a href="/">Content link</a>
                  </>
                ),
              },
              {
                key: '2',
                label: 'Title 2',
                children: (
                  <>
                    <Button>Content button</Button>
                    <br />
                    <a href="/">Content link</a>
                  </>
                ),
              },
            ]}
          />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Collapse
          </Title>
          <Collapse
            style={{ marginBottom: '20px' }}
            items={[
              {
                key: '1',
                label: 'Label',
                children: (
                  <>
                    <Button>Button</Button>
                    <br />
                    <a href="/">Link</a>
                  </>
                ),
              },
            ]}
          />
        </div>

        {/* Modal Section (Dialog) */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Modal (Dialog)
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space style={{ marginBottom: '20px' }}>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              Open Modal
            </Button>
            <Button type="primary" onClick={() => setSlideModalVisible(true)}>
              Open Drawer Style
            </Button>
          </Space>

          <Modal
            title="Basic Modal"
            open={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>Press ESC key or click outside to close</p>
          </Modal>

          <Modal
            title="Slide Modal"
            open={slideModalVisible}
            onOk={() => setSlideModalVisible(false)}
            onCancel={() => setSlideModalVisible(false)}
            width={600}
          >
            <p>This is a wider modal that slides in</p>
          </Modal>
        </div>

        {/* Dropdown Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Dropdown
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Dropdown menu={{ items: dropdownItems }} placement="bottomLeft">
            <Button type="primary">Open Dropdown</Button>
          </Dropdown>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Menu Options
          </Title>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Button',
                },
                {
                  type: 'divider',
                },
                {
                  key: '2',
                  label: 'Link',
                },
                {
                  key: '3',
                  label: 'Link',
                },
              ],
            }}
            placement="bottomLeft"
          >
            <Button type="primary">Open Menu</Button>
          </Dropdown>
        </div>

        {/* Upload Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            File Upload
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '20px' }}>
            Drag & Drop
          </Title>
          <Dragger {...uploadProps} style={{ marginBottom: '20px' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Accepts .png, .jpg files.
            </p>
          </Dragger>
        </div>

        {/* Form Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Form
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Form
            layout="vertical"
            style={{ maxWidth: 400, marginBottom: '20px' }}
          >
            <Form.Item label="Label" name="input">
              <Input />
            </Form.Item>
          </Form>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            With message
          </Title>
          <Form
            layout="vertical"
            style={{ maxWidth: 400, marginBottom: '20px' }}
          >
            <Form.Item label="Label" name="input" help="Form message">
              <Input />
            </Form.Item>
          </Form>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Checkbox and Radio
          </Title>
          <Form
            layout="vertical"
            style={{ maxWidth: 400, marginBottom: '20px' }}
          >
            <Form.Item name="single" valuePropName="checked">
              <Checkbox>Single with label</Checkbox>
            </Form.Item>
            <Form.Item label="Multiple inline">
              <Checkbox.Group>
                <Checkbox value="a">Label</Checkbox>
                <Checkbox value="b">Label</Checkbox>
                <Checkbox value="c">Label</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label="Multiple stacked">
              <Checkbox.Group
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Checkbox value="a">Label</Checkbox>
                <Checkbox value="b">Label</Checkbox>
                <Checkbox value="c">Label</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Form>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Validation
          </Title>
          <Form
            layout="vertical"
            style={{ maxWidth: 400, marginBottom: '20px' }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ type: 'email', message: 'Please enter a valid email' }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Must be greater than 10"
              name="minimum"
              rules={[
                { type: 'number', min: 10, message: 'Must be greater than 10' },
              ]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Form>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Kitchen Sink
          </Title>
          <Form
            form={form}
            layout="vertical"
            style={{ maxWidth: 600, marginBottom: '20px' }}
          >
            <Form.Item label="Text Input" name="text">
              <Input placeholder="Enter text" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input type="email" placeholder="Enter email" />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item label="Number" name="number">
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Enter number"
              />
            </Form.Item>

            <Form.Item label="Date" name="date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Time" name="time">
              <TimePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Select" name="select">
              <Select placeholder="Select an option">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Textarea" name="textarea">
              <TextArea rows={4} placeholder="Enter multiple lines of text" />
            </Form.Item>

            <Form.Item name="checkbox" valuePropName="checked">
              <Checkbox>Checkbox option</Checkbox>
            </Form.Item>

            <Form.Item label="Radio Group" name="radio">
              <Radio.Group>
                <Radio value="a">Option A</Radio>
                <Radio value="b">Option B</Radio>
                <Radio value="c">Option C</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Switch" name="switch" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item label="Slider" name="slider">
              <Slider />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Table Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Table
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Table
            dataSource={tableData}
            columns={tableColumns}
            pagination={false}
            style={{ marginBottom: '20px' }}
          />
        </div>

        {/* Tabs Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Tabs
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: 'Tab 1',
                children: 'Content of Tab 1',
              },
              {
                key: '2',
                label: 'Tab 2',
                children: 'Content of Tab 2',
              },
              {
                key: '3',
                label: 'Tab 3',
                children: 'Content of Tab 3',
              },
            ]}
            style={{ marginBottom: '20px' }}
          />
        </div>

        {/* Typography Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Typography
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Headings
          </Title>
          <Title level={1}>Heading 1</Title>
          <Title level={2}>Heading 2</Title>
          <Title level={3}>Heading 3</Title>
          <Title level={4}>Heading 4</Title>
          <Title level={5}>Heading 5</Title>
          <Title level={5}>Heading 6</Title>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Page Title
          </Title>
          <Title level={1} style={{ fontSize: '2.5rem' }}>
            Page Title = Heading 1
          </Title>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Normal Text
          </Title>
          <Paragraph>
            Semantic text elements help maximize SEO and accessibility.
          </Paragraph>
          <blockquote
            style={{
              borderLeft: '4px solid #d9d9d9',
              paddingLeft: '16px',
              fontStyle: 'italic',
            }}
          >
            Blockquote
          </blockquote>
          <Text type="secondary" style={{ fontSize: '0.875rem' }}>
            Small
          </Text>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Utility Classes
          </Title>
          <Paragraph>Body = Paragraph</Paragraph>
          <Paragraph>
            This is a paragraph with <Text strong>strong text</Text>,{' '}
            <Text italic>italic text</Text>, and <Text code>inline code</Text>.
          </Paragraph>
          <Paragraph>
            <Text type="secondary">Secondary text</Text>
          </Paragraph>
          <Paragraph>
            <Text type="success">Success text</Text>
          </Paragraph>
          <Paragraph>
            <Text type="warning">Warning text</Text>
          </Paragraph>
          <Paragraph>
            <Text type="danger">Danger text</Text>
          </Paragraph>
        </div>

        {/* Progress Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Progress
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space
            direction="vertical"
            style={{ width: '100%', marginBottom: '20px' }}
          >
            <Progress percent={0} />
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
          </Space>
        </div>

        {/* Skeleton Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Skeleton
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Skeleton loading={true} active>
            <div>Content would go here</div>
          </Skeleton>

          <Title level={4} style={{ marginBottom: '20px', marginTop: '20px' }}>
            Advanced
          </Title>
          <Skeleton avatar paragraph={{ rows: 4 }} loading={true} active />
        </div>

        {/* Divider Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Divider
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Divider />
          <Divider>With Text</Divider>
          <Divider orientation="left">Left Text</Divider>
          <Divider orientation="right">Right Text</Divider>
        </div>

        {/* Pagination Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Pagination
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Pagination
            defaultCurrent={2}
            total={500}
            style={{ marginBottom: '20px' }}
          />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            With angle
          </Title>
          <Pagination
            defaultCurrent={2}
            total={500}
            showLessItems
            style={{ marginBottom: '20px' }}
          />

          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            With Range
          </Title>
          <Pagination
            showSizeChanger
            defaultCurrent={2}
            total={500}
            showQuickJumper
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          />
        </div>

        {/* Spin Section (Loader) */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Spin (Loader)
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space size="large">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </div>

        {/* Icon Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Icon
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space>
            <UserOutlined />
            <CheckOutlined />
            <DownloadOutlined />
            <EditOutlined />
            <SearchOutlined />
          </Space>
        </div>

        {/* Link Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Link
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space direction="vertical">
            <Text>
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ant Design
              </a>
            </Text>
            <Text>
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000' }}
              >
                Dark Link
              </a>
            </Text>
          </Space>
        </div>

        {/* Switch Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Switch
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Space direction="vertical">
            <Switch />
            <Switch defaultChecked />
            <Switch disabled defaultChecked />
          </Space>
        </div>

        {/* Flex Section */}
        <div style={{ marginBottom: '40px' }}>
          <Title level={3} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Flex
          </Title>
          <Title level={4} style={{ marginBottom: '20px', marginTop: '40px' }}>
            Basic
          </Title>
          <Flex wrap="wrap" gap="small" style={{ maxWidth: '300px' }}>
            {['A', 'B', 'C', 'D', 'E'].map(item => (
              <div
                key={item}
                style={{
                  border: '1px solid #d9d9d9',
                  borderRadius: '4px',
                  padding: '8px 16px',
                }}
              >
                {item}
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default HomePage;
