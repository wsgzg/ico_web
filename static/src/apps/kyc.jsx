import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Layout, Menu, Breadcrumb, Steps } from 'antd'
import FormGroup from './../components/form-group.jsx'
import HeadeNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout
const Step = Steps.Step

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <HeadeNav/>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>WhiteList</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div style={{}}>
              <Steps current={0}>
                <Step title="KYC信息" description="This is a description." />
                <Step title="允许投资" description="This is a description." />
              </Steps>
            </div>
            <FormGroup />
          </div>
        </Content>
        <FooterCommon />
      </Layout>
    )
  }
}


export default App
