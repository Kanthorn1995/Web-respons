import React from "react";
import { Row, Col } from 'antd';
import styled from "styled-components";
// import Buttontest from "./index.styled.js";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Card } from 'antd';
import { EyeOutlined,ArrowRightOutlined } from '@ant-design/icons';
import Img1 from '../../assets/images/Img1.jpg';
import Img2 from '../../assets/images/Img2.jpg';
import Img3 from '../../assets/images/Img3.jpg';
import Img4 from '../../assets/images/Img4.jpg';
import Img5 from '../../assets/images/Img5.jpg';


const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0' };
const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Homepage = () => {
  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "blue" }}>Homepage</h1>
      <div className="container">
        <div className="slide" style={{ "marginBottom": '60px' }}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}><img src={Img1} alt="" style={{ "width": '1760px', "height": "500px" }} /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Img2} alt="" style={{ "width": '1760px', "height": "500px" }} /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Img3} alt="" style={{ "width": '1760px', "height": "500px" }} /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Img4} alt="" style={{ "width": '1760px', "height": "500px" }} /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Img5} alt="" style={{ "width": '1760px', "height": "500px" }} /></h3>
            </div>
          </Carousel>
        </div>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={18}>
            <div style={style}><div className="newsall">
              <div className="news_politics">
                {/* <Divider orientation="left" style={{ "fontSize": '30px' }}>ข่าวล่าสุด</Divider> */}
                <div style={{ "display": 'flex' }}>
                  <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าวล่าสุด</p>
                  <hr color="gray" style={{ "width": '84%', "marginLeft": '0px', "marginTop": '45px' }} />
                  <p orientation="left" style={{ "fontSize": '15px', "marginTop": '33px' }}>ดูทั้งหมด <ArrowRightOutlined/></p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgBig src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{"borderRadius":'20px'}}/>}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat" />
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="news_sport">
                <div style={{ "display": 'flex' }}>
                  <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าวกีฬา</p>
                  <hr color="gray" style={{ "width": '85.5%', "marginLeft": '0px', "marginTop": '45px' }} />
                  <p orientation="left" style={{ "fontSize": '15px', "marginTop": '33px' }}>ดูทั้งหมด <ArrowRightOutlined/></p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgBig src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{"borderRadius":'15px'}}/>}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="news_entertainment">
                <div style={{ "display": 'flex' }}>
                  <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าวบันเทิง</p>
                  <hr color="gray" style={{ "width": '83.2%', "marginLeft": '0px', "marginTop": '45px' }} />
                  <p orientation="left" style={{ "fontSize": '15px', "marginTop": '33px' }}>ดูทั้งหมด <ArrowRightOutlined/></p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgBig src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""style={{"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="news_political">
                <div style={{ "display": 'flex' }}>
                  <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าวการเมือง</p>
                  <hr color="gray" style={{ "width": '81.5%', "marginLeft": '0px', "marginTop": '45px' }} />
                  <p orientation="left" style={{ "fontSize": '15px', "marginTop": '33px' }}>ดูทั้งหมด <ArrowRightOutlined/></p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgBig src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""style={{"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="news_esport">
                <div style={{ "display": 'flex' }}>
                  <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าว Esport</p>
                  <hr color="gray" style={{ "width": '82.5%', "marginLeft": '0px', "marginTop": '45px' }} />
                  <p orientation="left" style={{ "fontSize": '15px', "marginTop": '33px' }}>ดูทั้งหมด <ArrowRightOutlined/></p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgBig src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""style={{"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                    <div style={style}>
                      <Card
                        hoverable
                        cover={<ImgSmall src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} />}>
                        <Meta title="Europe Street beat"/>
                        <div>
                          <EyeOutlined />
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div></div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <div className="news_topten">
                <p orientation="left" style={{ "fontSize": '30px', "marginTop": '20px' }}>ข่าวยอดฮิต</p>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px" ,"borderRadius":'15px'}} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <div style={style}>
                      <div style={{ "display": 'flex' }}>
                        <Col className="gutter-row" span={14}>
                          <div style={style}><img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" style={{ "width": '180px', "height": "101px","borderRadius":'15px' }} /></div>
                        </Col>
                        <Col className="gutter-row" span={10}>
                          <div style={style}>col-6</div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>


      {/* <Buttontest color="red">Testcustomstyle</Buttontest>
      <Buttontest color="pink">Testcustomstyle</Buttontest> */}
    </React.Fragment>
  );
};

export default Homepage;


const ImgBig = styled.img`
  width: 98%;
  height:315px;
  margin-left: 10px;
`;

const ImgSmall = styled.img`
  width: 180px;
  height:101px;
  margin-left: 55px;
`;


