'use client';

import React, { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Upload,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Tabs,
  Row,
  Col,
  message,
} from 'antd';
import {
  DownloadOutlined,
  PlayCircleOutlined,
  UploadOutlined,
  MessageOutlined,
  ToolOutlined,
  PrinterOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  RocketOutlined,
  HeartOutlined,
  CarOutlined,
  LaptopOutlined,
  InboxOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

export default function LandingPage() {
  const [quoteModalVisible, setQuoteModalVisible] = useState(false);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [quoteForm] = Form.useForm();
  const [contactForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleQuoteSubmit = (values: any) => {
    messageApi.success('Quote request submitted successfully!');
    setQuoteModalVisible(false);
    quoteForm.resetFields();
  };

  const handleContactSubmit = (values: any) => {
    messageApi.success('Message sent successfully!');
    setContactModalVisible(false);
    contactForm.resetFields();
  };

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info: any) {
      const { status } = info.file;
      if (status === 'done') {
        messageApi.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        messageApi.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const capabilityTabItems = [
    {
      key: '1',
      label: 'Materials',
      children: (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Title level={5}>Metals</Title>
            <Space wrap>
              <Badge count="Aluminum 6061" />
              <Badge count="Stainless Steel 316" />
              <Badge count="Titanium Ti-6Al-4V" />
              <Badge count="Brass C360" />
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={5}>Plastics</Title>
            <Space wrap>
              <Badge count="ABS" color="blue" />
              <Badge count="Nylon 6/6" color="blue" />
              <Badge count="PEEK" color="blue" />
              <Badge count="Polycarbonate" color="blue" />
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={5}>Advanced Materials</Title>
            <Space wrap>
              <Badge count="Carbon Fiber" color="purple" />
              <Badge count="Inconel 718" color="purple" />
              <Badge count="Hastelloy X" color="purple" />
            </Space>
          </Col>
        </Row>
      ),
    },
    {
      key: '2',
      label: 'Tolerances',
      children: (
        <div>
          <Paragraph>
            We maintain industry-leading tolerance capabilities across all
            manufacturing processes:
          </Paragraph>
          <ul>
            <li>CNC Machining: ±0.001" (±0.025mm)</li>
            <li>3D Printing: ±0.005" (±0.127mm)</li>
            <li>Sheet Metal: ±0.010" (±0.254mm)</li>
            <li>Injection Molding: ±0.002" (±0.051mm)</li>
          </ul>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Finishes',
      children: (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={5}>Surface Finishes</Title>
              <ul>
                <li>Anodizing (Type II & III)</li>
                <li>Powder Coating</li>
                <li>Plating (Chrome, Nickel, Zinc)</li>
                <li>Passivation</li>
              </ul>
            </Col>
            <Col span={12}>
              <Title level={5}>Mechanical Finishes</Title>
              <ul>
                <li>Bead Blasting</li>
                <li>Tumbling</li>
                <li>Polishing</li>
                <li>Brushing</li>
              </ul>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: '4',
      label: 'Certifications',
      children: (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={5}>Quality Standards</Title>
              <ul>
                <li>ISO 9001:2015</li>
                <li>AS9100D (Aerospace)</li>
                <li>ISO 13485 (Medical)</li>
                <li>IATF 16949 (Automotive)</li>
              </ul>
            </Col>
            <Col span={12}>
              <Title level={5}>Compliance</Title>
              <ul>
                <li>RoHS Compliant</li>
                <li>REACH Compliant</li>
                <li>FDA 21 CFR Part 820</li>
                <li>NIST 800-171</li>
              </ul>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      {contextHolder}

      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={1}
            style={{ color: 'white', fontSize: '3.5rem', marginBottom: '24px' }}
          >
            Precision Manufacturing On Demand
          </Title>
          <Paragraph
            style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Transform your designs into reality with our advanced manufacturing
            capabilities. From rapid prototyping to production runs, we deliver
            quality parts when you need them.
          </Paragraph>

          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              icon={<UploadOutlined />}
              onClick={() => setQuoteModalVisible(true)}
              style={{ height: '50px', fontSize: '16px', padding: '0 30px' }}
            >
              Get Instant Quote
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              style={{
                height: '50px',
                fontSize: '16px',
                padding: '0 30px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
              }}
            >
              Watch Demo
            </Button>
          </Space>

          {/* Key Stats */}
          <Row gutter={[48, 24]} style={{ marginTop: '60px' }}>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <Title
                  level={2}
                  style={{
                    color: 'white',
                    fontSize: '3rem',
                    marginBottom: '8px',
                  }}
                >
                  10,000+
                </Title>
                <Text
                  style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}
                >
                  Parts Manufactured
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <Title
                  level={2}
                  style={{
                    color: 'white',
                    fontSize: '3rem',
                    marginBottom: '8px',
                  }}
                >
                  2-5 Days
                </Title>
                <Text
                  style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}
                >
                  Average Lead Time
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <Title
                  level={2}
                  style={{
                    color: 'white',
                    fontSize: '3rem',
                    marginBottom: '8px',
                  }}
                >
                  99.5%
                </Title>
                <Text
                  style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}
                >
                  Quality Rating
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Manufacturing Services
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={6}>
              <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                <ToolOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#1890ff',
                    marginBottom: '20px',
                  }}
                />
                <Title level={3}>CNC Machining</Title>
                <Paragraph>
                  Precision machining for complex geometries with tight
                  tolerances. Materials include aluminum, steel, titanium, and
                  plastics.
                </Paragraph>
                <Space wrap style={{ marginTop: '16px' }}>
                  <Badge count="±0.001 Tolerance" color="blue" />
                  <Badge count="50+ Materials" color="blue" />
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                <PrinterOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#52c41a',
                    marginBottom: '20px',
                  }}
                />
                <Title level={3}>3D Printing</Title>
                <Paragraph>
                  Rapid prototyping and low-volume production using advanced
                  additive manufacturing technologies.
                </Paragraph>
                <Space wrap style={{ marginTop: '16px' }}>
                  <Badge count="SLA/SLS/FDM" color="green" />
                  <Badge count="Same Day" color="green" />
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                <ThunderboltOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#faad14',
                    marginBottom: '20px',
                  }}
                />
                <Title level={3}>Sheet Metal</Title>
                <Paragraph>
                  Laser cutting, bending, and forming services for sheet metal
                  parts with excellent surface finishes.
                </Paragraph>
                <Space wrap style={{ marginTop: '16px' }}>
                  <Badge count="Laser Cutting" color="orange" />
                  <Badge count="CNC Bending" color="orange" />
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                <ExperimentOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#722ed1',
                    marginBottom: '20px',
                  }}
                />
                <Title level={3}>Injection Molding</Title>
                <Paragraph>
                  High-volume plastic part production with custom tooling and
                  material selection expertise.
                </Paragraph>
                <Space wrap style={{ marginTop: '16px' }}>
                  <Badge count="Custom Tooling" color="purple" />
                  <Badge count="Volume Production" color="purple" />
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Process Section */}
      <div style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            How It Works
          </Title>

          <Row gutter={[24, 48]}>
            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 auto 24px',
                  }}
                >
                  1
                </div>
                <Title level={3}>Upload Design</Title>
                <Paragraph>
                  Upload your CAD files or drawings. Our system provides instant
                  feedback on manufacturability and pricing.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 auto 24px',
                  }}
                >
                  2
                </div>
                <Title level={3}>Review Quote</Title>
                <Paragraph>
                  Get instant pricing and lead times. Our engineers review
                  complex parts and provide optimization suggestions.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 auto 24px',
                  }}
                >
                  3
                </div>
                <Title level={3}>Production</Title>
                <Paragraph>
                  Your parts enter production immediately. Track progress in
                  real-time through our customer portal.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 auto 24px',
                  }}
                >
                  4
                </div>
                <Title level={3}>Quality & Delivery</Title>
                <Paragraph>
                  Rigorous quality inspection and fast, tracked shipping to get
                  your parts delivered on time.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Capabilities Section */}
      <div style={{ padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Manufacturing Capabilities
          </Title>

          <Tabs
            defaultActiveKey="1"
            items={capabilityTabItems}
            centered
            size="large"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            What Our Customers Say
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#1890ff',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginRight: '16px',
                    }}
                  >
                    JD
                  </div>
                  <div>
                    <Text strong>John Davis</Text>
                    <br />
                    <Text type="secondary">
                      Lead Engineer, AeroTech Industries
                    </Text>
                  </div>
                </div>
                <Paragraph italic>
                  "The quality and speed of delivery exceeded our expectations.
                  The parts fit perfectly and the surface finish was
                  outstanding. This partnership has been crucial for our
                  prototyping timeline."
                </Paragraph>
                <Badge count="Verified Customer" color="green" />
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#52c41a',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginRight: '16px',
                    }}
                  >
                    SM
                  </div>
                  <div>
                    <Text strong>Sarah Martinez</Text>
                    <br />
                    <Text type="secondary">
                      Product Manager, MedDevice Corp
                    </Text>
                  </div>
                </div>
                <Paragraph italic>
                  "Working with this team has streamlined our entire product
                  development process. The instant quoting system and real-time
                  updates give us the agility we need in a competitive market."
                </Paragraph>
                <Badge count="Verified Customer" color="green" />
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#faad14',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginRight: '16px',
                    }}
                  >
                    RC
                  </div>
                  <div>
                    <Text strong>Robert Chen</Text>
                    <br />
                    <Text type="secondary">Founder, RoboTech Innovations</Text>
                  </div>
                </div>
                <Paragraph italic>
                  "As a startup, we needed a manufacturing partner who could
                  scale with us. From single prototypes to production runs,
                  they've supported our growth every step of the way."
                </Paragraph>
                <Badge count="Verified Customer" color="green" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Industries Section */}
      <div style={{ padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Industries We Serve
          </Title>

          <Row gutter={[24, 48]}>
            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <RocketOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#1890ff',
                    marginBottom: '20px',
                  }}
                />
                <Title level={4}>Aerospace</Title>
                <Paragraph>
                  AS9100 certified manufacturing for critical aerospace
                  components
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <HeartOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#f5222d',
                    marginBottom: '20px',
                  }}
                />
                <Title level={4}>Medical</Title>
                <Paragraph>
                  ISO 13485 compliant production for medical devices and
                  equipment
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <CarOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#faad14',
                    marginBottom: '20px',
                  }}
                />
                <Title level={4}>Automotive</Title>
                <Paragraph>
                  IATF 16949 certified manufacturing for automotive components
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div style={{ textAlign: 'center' }}>
                <LaptopOutlined
                  style={{
                    fontSize: '4rem',
                    color: '#52c41a',
                    marginBottom: '20px',
                  }}
                />
                <Title level={4}>Electronics</Title>
                <Paragraph>
                  Precision components for consumer and industrial electronics
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ color: 'white', marginBottom: '24px' }}>
            Ready to Start Manufacturing?
          </Title>
          <Paragraph
            style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Join thousands of engineers and designers who trust us with their
            most critical projects. Upload your files today and experience the
            future of on-demand manufacturing.
          </Paragraph>

          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              icon={<UploadOutlined />}
              onClick={() => setQuoteModalVisible(true)}
              style={{ height: '50px', fontSize: '16px', padding: '0 30px' }}
            >
              Get Started Now
            </Button>
            <Button
              size="large"
              icon={<MessageOutlined />}
              onClick={() => setContactModalVisible(true)}
              style={{
                height: '50px',
                fontSize: '16px',
                padding: '0 30px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
              }}
            >
              Talk to an Engineer
            </Button>
          </Space>

          <div style={{ marginTop: '40px' }}>
            <Alert
              message={
                <span>
                  <strong>New Customer Offer:</strong> Get 15% off your first
                  order. Use code WELCOME15 at checkout.
                </span>
              }
              type="info"
              showIcon
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <Modal
        title="Get Your Instant Quote"
        open={quoteModalVisible}
        onCancel={() => setQuoteModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form form={quoteForm} layout="vertical" onFinish={handleQuoteSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <Input />
          </Form.Item>

          <Form.Item name="files" label="Upload CAD Files">
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Drag and drop your files or click to browse
              </p>
              <p className="ant-upload-hint">
                Support for STEP, STP, IGES, IGS, DWG, PDF files
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item name="notes" label="Project Details">
            <TextArea
              rows={4}
              placeholder="Quantity, material preferences, timeline, etc."
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={() => setQuoteModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit for Quote
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Contact Modal */}
      <Modal
        title="Contact Our Engineering Team"
        open={contactModalVisible}
        onCancel={() => setContactModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={contactForm}
          layout="vertical"
          onFinish={handleContactSubmit}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>

          <Form.Item name="subject" label="Subject">
            <Select placeholder="Select a subject">
              <Option value="general">General Inquiry</Option>
              <Option value="quote">Request Quote</Option>
              <Option value="technical">Technical Support</Option>
              <Option value="partnership">Partnership Opportunity</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea
              rows={5}
              placeholder="Tell us about your project or question..."
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={() => setContactModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
