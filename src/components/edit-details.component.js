import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

toast.configure()

const notify = ()=>{

    // Calling toast method by passing string
    toast('Your Details Updated Successfully ! ')
}



export default class EditDetail extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDosage = this.onChangeDosage.bind(this);
        this.onChangePnumber = this.onChangePnumber.bind(this);
        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeDivision = this.onChangeDivision.bind(this);
        this.onChangeGrama = this.onChangeGrama.bind(this);
        this.onChangeNearest = this.onChangeNearest.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            name: '',
            nic: '',
            age: '',
            vtype: '',
            vdosage: '',
            pnumber: '',
            district: '',
            division: '',
            grama: '',
            nearest: '',
            divi:[],
            nila:[],
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/details/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    name: response.data.name,
                    nic: response.data.nic,
                    age: response.data.age,
                    vtype: response.data.vtype,
                    vdosage: response.data.vdosage,
                    pnumber: response.data.pnumber,
                    district: response.data.district,
                    division: response.data.division,
                    grama: response.data.grama,
                    nearest: response.data.nearest,

                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        })
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            vtype: e.target.value
        })
    }

    onChangeDosage(e) {
        this.setState({
            vdosage: e.target.value
        })
    }
    onChangePnumber(e) {
        this.setState({
            pnumber: e.target.value
        })
    }

    onChangeDistrict(e) {
        this.setState({
            district: e.target.value
        })
        if(e.target.value === '2'){
            let a = ['Benthota', 'Balapitiya', 'Elpitiya','Karandeniya']
            this.setState({divi:a})
        }
        if(e.target.value === '3'){
            let a = ['Pitabaddara', 'Kotapola', 'Pasgoda','Athuraliya']
            this.setState({divi:a})
        }
    }

    onChangeDivision(e) {
        this.setState({
            division: e.target.value
        })
        if(e.target.value === 'Benthota'){
            let a = ['Pahurumulla', 'Sinharoopagama', 'Kommala','Dope']
            this.setState({nila:a})
        }
        if(e.target.value === 'Balapitiya'){
            let a = ['Wathurawela', 'Hegalla', 'Duwemodara','Boraluketiya']
            this.setState({nila:a})
        }
    }
    onChangeGrama(e) {
        this.setState({
            grama: e.target.value
        })
    }

    onChangeNearest(e) {
        this.setState({
            nearest: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const detail = {
            username: this.state.username,
            name: this.state.name,
            nic: this.state.nic,
            age: this.state.age,
            vtype: this.state.vtype,
            vdosage: this.state.vdosage,
            pnumber: this.state.pnumber,
            district: this.state.district,
            division: this.state.division,
            grama: this.state.grama,
            nearest: this.state.nearest
        }

        console.log(detail);

        axios.post('http://localhost:5000/details/update/' + this.props.match.params.id, detail)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {

        return (

            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Covid-19 Vaccine Registration Form</Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <h5>Update Your Details</h5>
                            <hr/>
                            <Form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Username: </label>
                                    <select ref="userInput"
                                            required
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}>

                                        {
                                            this.state.users.map(function(user) {
                                                return <option
                                                    key={user}
                                                    value={user}>{user}
                                                </option>;
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Full Name: </label>
                                    <input  type="text"
                                            required
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>NIC: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.nic}
                                        onChange={this.onChangeNIC}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Age Range: </label>
                                    <select ref="ageRange"
                                            required
                                            className="form-control"
                                            value={this.state.age}
                                            onChange={this.onChangeAge}>
                                        <option selected>Select Age Range</option>
                                        <option value="1">12 - 30 Years</option>
                                        <option value="2">31 - 60 Years</option>
                                        <option value="3">60 + Years</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Vaccine Type: </label>
                                    <select ref="vType"
                                            required
                                            className="form-control"
                                            value={this.state.vtype}
                                            onChange={this.onChangeType}>
                                        <option selected>Select Vaccine Type</option>
                                        <option value="1">None</option>
                                        <option value="2">Astrazenecz</option>
                                        <option value="3">Sinopharm</option>
                                        <option value="4">Sputnik</option>
                                        <option value="5">Pfizer</option>

                                    </select>
                                </div>


                                <div className="form-group">
                                    <label>Vaccine Dosage: </label>
                                    <select ref="vDosage"
                                            required
                                            className="form-control"
                                            value={this.state.vdosage}
                                            onChange={this.onChangeDosage}>
                                        <option selected>Select Vaccine Dosage</option>
                                        <option value="1">None</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Phone Number: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.pnumber}
                                        onChange={this.onChangePnumber}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>District: </label>
                                    <select ref="vDistrict"
                                        // id="objectType"
                                            required
                                            className="form-control"
                                            value={this.state.district}
                                            onChange={this.onChangeDistrict}>
                                        <option selected>Select Your District</option>
                                        <option value="2">Galle</option>
                                        <option value="3">Matara</option>
                                        <option value="4">Hambantota</option>
                                        <option value="5">Colombo</option>
                                        <option value="6">Gampaha</option>
                                        <option value="7">Kaluthara</option>
                                        <option value="8">Mahanuwara</option>
                                        <option value="9">Matale</option>
                                        <option value="10">Jaffna</option>
                                        <option value="11">Nuwaraeliya</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Division: </label>
                                    <select ref="vDistrict"
                                        // id="objectSubtype"
                                            required
                                            className="form-control"
                                            value={this.state.division}
                                            onChange={this.onChangeDivision}>
                                        <option selected>Select Your Division</option>
                                        {
                                            this.state.divi.map((val) => {
                                                return <option value={val}>{val}</option>
                                            })
                                        }
                                        {/*<option value="1">Akmeemana</option>*/}
                                        {/*<option value="2">Galle</option>*/}
                                        {/*<option value="3">Matara</option>*/}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Grama Niladhari: </label>
                                    <select ref="vGrama"
                                            required
                                            className="form-control"
                                            value={this.state.grama}
                                            onChange={this.onChangeGrama}>
                                        <option selected>Select Your Grama Niladhari</option>

                                        {
                                            this.state.nila.map((val) => {
                                                return <option>{val}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Nearest Vaccination Centers: </label>
                                    <select ref="vNearest"
                                            required
                                            className="form-control"
                                            value={this.state.nearest}
                                            onChange={this.onChangeNearest}>
                                        <option selected>Select 3 nearest vaccination centers</option>
                                        <option value="1">Akmeemana</option>
                                        <option value="2">Galle</option>
                                        <option value="3">Matara</option>
                                    </select>
                                </div>



                                <div className="form-group">
                                    <input onClick={notify} type="submit" value="Update Details Log" className="btn btn-primary" />
                                </div>

                            </Form>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}