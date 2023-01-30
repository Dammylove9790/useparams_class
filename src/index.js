// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';



import React from 'react';
import ReactDOM from 'react-dom/client';

// const divImg= {
//  width:'30%',
//  backgroundColor: 'white',
//  margin: '20px',
// }

const products =[
  {productname : "Wrist Watch", productImage : "/images/1.jpg", price : "1200"},
  {productname : "Pen Drive", productImage : "/images/2.jpg", price : "5400"},
  {productname : "Andriod", productImage : "/images/3.jpg", price : "4100"},
  {productname : "T-Shirt", productImage : "/images/4.jpg", price : "600"},
  {productname : "Adidas", productImage : "/images/5.jpg", price : "7050"},
  {productname : "Canvas", productImage : "/images/6.jpg", price : "1450"},
  {productname : "Clipper", productImage : "/images/7.jpg", price : "2800"},
  {productname : "Iron", productImage : "/images/8.jpg", price : "420"},
  {productname : "Hand Bag", productImage : "/images/9.jpg", price : "590"},
  {productname : "Samsung", productImage : "/images/10.jpg", price : "10000"},
  {productname : "Blender", productImage : "/images/11.jpg", price : "7180"},
  {productname : "Plasma TV", productImage : "/images/12.jpg", price : "1020"},
  {productname : "Earpod", productImage : "/images/13.jpg", price : "3700"},
  {productname : "Powerbank", productImage : "/images/14.jpg", price : "2500"},
  {productname : "Earpod", productImage : "/images/13.jpg", price : "3700"},
  {productname : "Powerbank", productImage : "/images/14.jpg", price : "2500"},
]

 const newProducts = products.map((value, index)=>{
  const {productname, productImage, price} = value;
  return (
    <div key={index} className='divImg'>
    {productname}
    <br />
    <img src= {productImage} alt='' />
    <br />
   ${price}
    <br />
    </div>
  )
 })
 // console.log(newProducts)

//  function App(){
//      return (
//        <div className='productview'>
//         {newProducts}   
//        </div>
//       )
//  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
