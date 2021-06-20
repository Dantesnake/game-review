import React, {useEffect} from 'react';
import {DATOS, mostrarReviewAdmin, mostrarReviewHome} from "../service/review";
import {MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle} from "mdbreact";
import axios from "axios";

const ReviewHome = () => {

    useEffect(() => {
        consulta()
    });

    const consulta = () => {
        mostrarReviewHome()

    }
    return (
        <div className="container">
            {
                DATOS.map((elemento) => {
                    return (
                        <div>
                            <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{elemento.videojuego}</MDBCardTitle>
                                        <MDBCardText>
                                            {elemento.review}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Usuario: {elemento.usuario}
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default ReviewHome;
