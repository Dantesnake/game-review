import serviceApi from "./servicio";
import axios from "axios";
let DATOS = [];


function guardarReview(review) {
    axios({
        url: 'http://localhost:3001/review',
        method: 'post',
        data: {
            query: `mutation{
  createReview(reviewInput:{usuario:"${review.usuario}",videojuego:"${review.videojuego}",review:"${review.review}",token:"${sessionStorage.getItem('token')}"})
}`
        }
    })
        .then(res => {
            console.log(res.data.data.createReview)

        })
        .catch(err => {
            console.log(err.message);
        });

}

function mostarReview(username) {
    axios({
        url: 'http://localhost:3001/review',
        method: 'post',
        data: {
            query: `query{
  reviewsOneUser(reviewInput:{usuario:"${username}",videojuego:"",review:"",token:"${sessionStorage.getItem('token')}"}) {
    id,usuario,videojuego,review
  }
}`
        }
    })
        .then(res => {
            console.log(res.data.data.reviewsOneUser)
            DATOS = res.data.data.reviewsOneUser;
        })
        .catch(err => {
            console.log(err.message);
        });

}

function mostrarReviewAdmin() {

    axios({
        url: 'http://localhost:3001/review',
        method: 'post',
        data: {
            query: `query{
  reviews{
    usuario,videojuego,review
  }
  
}`
        }
    })
        .then(res => {
            console.log(res.data.data.reviews)
            DATOS = res.data.data.reviews;
        })
        .catch(err => {
            console.log(err.message);
        });

}

function mostrarReviewHome() {

    axios({
        url: 'http://localhost:3001/review',
        method: 'post',
        data: {
            query: `query{
  reviews{
    usuario,videojuego,review
  }
  
}`
        }
    })
        .then(res => {
            console.log(res.data.data.reviews)
            DATOS = res.data.data.reviews;
        })
        .catch(err => {
            console.log(err.message);
        });


}
function borrarReview(id){

    axios({
        url: 'http://localhost:3001/review',
        method: 'post',
        data: {
            query: `mutation{
  deleteReview(id:"${id}")
}`
        }
    })
        .then(res => {
            console.log(JSON.parse(res.data.data.deleteReview))
        })
        .catch(err => {
            console.log(err.message);
        });

}

export {guardarReview,borrarReview,mostarReview,mostrarReviewAdmin,DATOS,mostrarReviewHome}
