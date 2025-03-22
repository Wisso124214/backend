import axios from "axios";
import { SERVER_URL } from "./config.js";

import app from "./middleware.js";
import { dbConnection } from "./db.js";
import { createUserControllers } from "./controllers/userController.js";
import { createUserRoutes } from "./routes/userRoutes.js";
import { createMovieControllers } from "./controllers/movieController.js";
import { createMovieRoutes } from "./routes/movieRoutes.js";

import { encryptData } from "./logicFuntions/main.js";

// getIdDevice().then((id) => {
//   console.log(id);
// });

// encryptData("data");


dbConnection(app);

createUserControllers(app);
createUserRoutes(app);

createMovieControllers(app);
createMovieRoutes(app);

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=7917d74e7d96c5b9e2dadb0f13566b9a&language=en-US';
let page = 1;
let segmentList = [];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTE3ZDc0ZTdkOTZjNWI5ZTJkYWRiMGYxMzU2NmI5YSIsIm5iZiI6MTc0MTM5MTQxMS4zMDMsInN1YiI6IjY3Y2I4NjMzYTRkZjk3ZGI5NjRmNjg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eGIHpPLr1waotJ5nHWUTMIqqt4fKA3JGGkc9lq75wLs'
  },
  signal: AbortSignal.timeout(5000),
};

await fetch(`${url}&page=${page}`, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results)
    // segmentList = segmentList.concat(data.results);
    // page++;
  })
  .catch((err) => {
    console.error(err)
  });

// axios.post(SERVER_URL+'/post-genre', {title: "+19"})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.post(SERVER_URL+'/post-age', {title: "+18", description: "contenido para mayores de 18 años"})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.post(SERVER_URL+'/post-movie', {title: "Hellboy", synopsis: "basicamente, es el hijo del diablo", publish_date: "2004-04-02", cover_image: "", id_age: "", genres: ""})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.post(SERVER_URL+'/post-actor', {name: "Tom hanks", image: ""})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.post(SERVER_URL+'/post-movie_actor', {id_age: "56552", id_movie: "87456"})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.put(SERVER_URL+'/update-actor/67d7783fce9bf2cb1cef431f', {name: "Tom Hanks", image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg"})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.delete(SERVER_URL+'/delete-actor/67d750bd0e678c258e1de853')
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
// })

// axios.post(SERVER_URL+'/post-contact', {contact: "Miguel2025"})
// .then((res) => {
//   console.log('posted');
// })
// .catch((err) => {
//   console.log('error posting', JSON.stringify(err, null, 2));
//   })

// axios.get(SERVER_URL+'/get-actors')
// .then((res)=>{
//   for (let d of res.data){
//     if (d.name === "Tom Hanks"){
//       console.log(d)
//       axios.delete(SERVER_URL+'/delete-actor/'+d._id)
//     }
//   }
// })
// .catch((err)=>{
//   console.log(err)
// })

// axios.get(SERVER_URL+'/get-actors')
// .then((res)=>{
//   if (res.data.length === 2){
//     axios.post(SERVER_URL+'/post-actor', {name: "Tom Hanks", image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg"})
//   }
// })



// axios.get(SERVER_URL+'/get-genres')
// .then((res)=>{
//   console.log(res.data)
// })
// .catch((err)=>{
//   console.log(err)
// })




// axios.get(SERVER_URL+'/get-actors')
// .then((res)=>{
//   let name = "Mark Ruffalo";
//   let found = false;
//   for (let d of res.data){
//     if (d.name === name){
//       found = true;
//     }
// }
// if (found === false){
//   axios.post(SERVER_URL+'/post-actor', {name: "Mark Ruffalo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB4lE2en8edlY0WeVQm70ccncCZyP6IXLrg&s"})
// }
// })
// .catch((err)=>{
//   console.log(err)
// })