import React, { Component } from 'react';
import ChooseGender from "./ChooseGender";
import "../css/general.css";
import BarneyPhoto from "../img/avatars/424431.svg";
import RobinPhoto from "../img/avatars/949666.svg";
import AnonPhoto from "../img/avatars/anonymous.svg";
import LidaPhoto from "../img/avatars/921082.svg";
import MarchenPhoto from "../img/avatars/921110.svg";
import TeodorPhoto from "../img/avatars/145859.svg";
import Contact from "./Contact";


const contactsList = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    photo: BarneyPhoto
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    photo: RobinPhoto
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    photo: AnonPhoto
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    photo: LidaPhoto
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    photo: MarchenPhoto
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    photo: TeodorPhoto
}];

class CreatePostPage extends Component {
    state = {
        contacts: contactsList,
        checkMale: true,
        checkFemale: true,
        checkOther: true,
        search: true
    };

    findGender = () => {
        let arrayChoose = [], arrayAllGenders = [];
        let resultArray= [];
        if (this.state.checkFemale) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender === "female"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }

        if (this.state.checkMale) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender === "male"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }

        if (this.state.checkOther) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender !== "male" && contact.gender !== "female"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }
        
        contactsList.map(contact => {
            arrayAllGenders.map(item => {
                if (contact === item)  resultArray.push(contact);
            })
        })
        this.setState({ contacts: resultArray });

    }
    filterGenders = (event) => {
        this.setState({ contacts: contactsList });
        this.setState({ [event.target.name]: event.target.checked }, this.findGender);
    };

    filterSearch(event) {
        const enterValue = event.target.value.toLowerCase();
        const newArray = [];
        const neededKeys = ["firstName", "lastName", "phone"];
        if (!enterValue) {
            this.filterGenders(event);
            this.setState({search: true})
        } else {
            this.state.contacts.forEach((el, index) => {
                neededKeys.map(item => {
                    if (this.state.contacts[index][item].toLowerCase().indexOf(enterValue) !== -1) {
                        if (!newArray.includes(el)) {
                            newArray.push(el);
                        };
                        this.setState({search: true});
                    } 
                });
            });
            (!newArray.length) ? this.setState({search : false}) :       
                                this.setState({ contacts: newArray });
        };
    };

    createList() {
        return (this.state.search) ? this.state.contacts.map(contact => <Contact {...contact} />)
            :(<div className = "no-contacts">Контактів немає</div>)  
    };
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="head-page">
                        <p>ContactsBook</p>
                    </div>
                    <div className="active-action">
                        <ChooseGender funcG={this.filterGenders} checkMale={
                            this.state.checkMale
                        }
                            checkFemale={this.state.checkFemale}
                            checkOther={this.state.checkOther} />
                        <div className="search-place">
                            <input placeholder="Пошук" onChange={(event) => this.filterSearch(event)} />
                        </div>
                    </div>
                    <div className="contacts-list">
                        {
                        this.createList()}
                    </div>
                </div>
                <div className="footer" />
            </div>
        )
    }
}

export default CreatePostPage;