import React from 'react';
import {Card, Col, Row, Table} from "react-bootstrap";
// import district from "district.jpg";

class Dashboard extends React.Component {
    render() {
        return (
                <Row>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <br/>
                                <h5 className='mb-4'>Daily Cases</h5>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h2 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 3,469</h2>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">87%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '87%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <br/>
                                <h5 className='mb-4'>Monthly Cases</h5>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h2 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> 29,865</h2>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">69%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '69%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <br/>
                                <h5 className='mb-4'>Yearly Cases</h5>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h2 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 176,698</h2>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">76%</p>
                                    </div>
                                    <br/>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '76%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-pie-chart f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">205,696</h3>
                                        <span className="d-block text-uppercase">total Cases</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-pie-chart f-30 text-c-red"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">1,696</h3>
                                        <span className="d-block text-uppercase">total Deaths</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={12}>
                        <Card className='Covid-Status'>
                            <Card.Header>
                                <Card.Title as='h4'>Covid-19 Vaccination Status</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    <tr className="overall-status">
                                        <td><img className="rounded-circle" style={{width: '65px'}}  alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">District Vaccination Status</h6>
                                            <p className="m-0">View overall details in vaccination district wise</p>
                                        </td>
                                        <td><a className="label theme-bg2 text-white f-15">View More Details</a><a  className="label theme-bg text-white 18">Print Report     <i className="feather icon-printer f-15 text-c-black"/></a></td>
                                    </tr>
                                    <tr className="overall-status">
                                        <td><img className="rounded-circle" style={{width: '65px'}}  alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Divisional Vaccination Status</h6>
                                            <p className="m-0">View overall details in vaccination Divisional wise</p>
                                        </td>
                                        <td><a  className="label theme-bg2 text-white f-15">View More Details</a><a  className="label theme-bg text-white 18">Print Report     <i className="feather icon-printer f-15 text-c-black"/></a></td>
                                    </tr>
                                    <tr className="overall-status">
                                        <td><img className="rounded-circle" style={{width: '65px'}}  alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Grama Niladhari Vaccination Status</h6>
                                            <p className="m-0">View overall details in vaccination Grama Niladhari wise</p>
                                        </td>
                                        <td><a  className="label theme-bg2 text-white f-15">View More Details</a><a  className="label theme-bg text-white 18">Print Report     <i className="feather icon-printer f-15 text-c-black"/></a></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        );
    }
}

export default Dashboard;