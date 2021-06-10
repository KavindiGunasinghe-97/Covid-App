import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Content.css';

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Register</h1>
                        <h2>For Vaccination</h2>
                        <br />
                        <h6 className="bold-four">
                            Countries are beginning to deploy COVID-19 vaccines, bringing new hope to the fight against the global pandemic. WHO, UNICEF, Gavi and many other partners are working together to support countries in preparing for COVID-19 vaccine introduction. With careful planning, countries can ensure infrastructure is in place and the technical support available to safely deliver COVID-19 vaccines.
                    </h6>
                        <br />
                        <h6><a className="btn btn-dark start start-two" href="#">Get Started <FontAwesomeIcon icon="arrow-right"/></a></h6>
                    </div>
                    <div className="col-sm-9 showcase-img">
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <a href="https://hpb.health.gov.lk/covid19-dashboard/" target="_blank" rel="noopener noreferrer" className="links">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-chart m-auto text-primary icon-ails"></i>
                                </div>
                                <h4>Covid 19 Statistics</h4>
                                <p class="lead mb-0">Live Situational<br/>  Analysis Dashboard of <br/>Sri Lanka</p>
                            </div>
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" className="links">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-drop m-auto text-primary icon-ails"></i>
                                </div>
                                <h4>Prevent Covid-19
                                </h4>
                                <p class="lead mb-0">Protect yourself<br/> and others from <br/>COVID-19.</p>
                            </div>
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" target="_blank" rel="noopener noreferrer" className="links">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-info m-auto text-primary icon-ails"></i>
                                </div>
                                <h4>Vaccination Info</h4>
                                <p class="lead mb-0">Equitable access to safe and <br/>effective vaccines is critical <br/>to ending the COVID-19 pandemic</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;