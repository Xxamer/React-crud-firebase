import React, { Component } from 'react'
import db from '../../config/Firebaseconfig';
import { Table, Button, Row, Col, InputGroup, Input } from 'reactstrap';

export default class Todos extends Component {


    state = {
        items: [],
        inputName: "",
        inputSurname: "",
        edit: false,
        id: ""
    };
    //Read data from Firebase
    componentDidMount() {
        db.collection('Todos').onSnapshot((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { id: doc.id, data: doc.data() }
                })
            })
        })
    }
    changeName = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }

    changeSurname = (e) => {
        this.setState({
            inputSurname: e.target.value
        })
    }

    addData = () => {
        var { inputName, inputSurname, edit } = this.state;
        !edit ?
            db.collection("Todos").add({
                Name: inputName,
                Surname: inputSurname,

            }).then(() => {
                console.log('Agregado');
                this.cleanValues();
            }).catch(() => {
                console.log('error');
            }) :
            this.update()
    }

    update = () => {
        const { id, inputName, inputSurname } = this.state;
        db.collection("Todos").doc(id).update({
            Name: inputName,
            Surname: inputSurname
        }).then(() => {
            console.log('actualizado');
            this.cleanValues();
        }).catch((error) => {
            console.log(error)
        })
    }
    //Edit button method 
    Edit = (id) => {
        let docRef = db.collection("Todos").doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    inputName: doc.data().Name,
                    inputSurname: doc.data().Surname,
                    edit: true,
                    id: doc.id,
                })
            } else {
                console.log("Document doesn't exist");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    Delete = (id) => {
        db.collection("Todos").doc(id).delete();
    }

    cleanValues() {
        this.setState({
            inputName: "",
            inputSurname: "",
            edit: false,
            id: ""
        })
    }
    render() {
        const { items, inputName, inputSurname, } = this.state;
        return (
            <div>
                <Row>
                    <Col xs="4" md="6" xl="8">
                        <InputGroup>
                            <Input
                                placeholder="Agregar Nombre"
                                value={inputName}
                                onChange={this.changeName}
                            />
                            <Input
                                placeholder="Agregar apellido"
                                value={inputSurname}
                                onChange={this.changeSurname}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs="2" md="3" xl="4">
                        <div className="text-right">
                            <Button color="info" onClick={this.addData}>
                                {this.state.edit ? 'Editar' : 'Agregar a la lista'}</Button>
                        </div>
                    </Col>
                </Row>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Nombre 2</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items !== undefined ? items.map((item, key) => (
                            <tr key={key}>
                                <td>{item.data.Name}</td>
                                <td>{item.data.Surname}</td>
                                <td><Button color="warning" onClick={() => this.Edit(item.id)} >Editar</Button></td>
                                <td><Button color="danger" onClick={() => this.Delete(item.id)}>Eliminar</Button></td>
                            </tr>
                        )) : null}
                    </tbody>
                </Table>
            </div>
        )
    }

}