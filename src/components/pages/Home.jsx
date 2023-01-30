import React from "react";
import ReactDOM from "react-dom/client";
import EachProduct from "./EachProduct";

const products = [
  {
    title: "Wrist Watch",
    image: "/images/1.jpg",
    price: 1200,
    discountPrice: "20%",
    description:
      "Shop for Men Wrist Watches online on Jumia Nigeria. Discover a great selection of Wrist Watches for Man ✓ Best prices in Nigeria",
  },
  {
    title: "Pen Drive",
    image: "/images/2.jpg",
    price: 5400,
    discountPrice: "20%",
    description:
      "A USB flash drive is a data storage device that includes flash memory with an integrated USB interface. It is typically removable, rewritable and much more",
  },
  {
    title: "Andriod",
    image: "/images/3.jpg",
    price: 4100,
    discountPrice: "20%",
    description:
      "Explore the newest Android smartphones, all with helpful features from Google, plus non-stop data protection.",
  },
  {
    title: "T-Shirt",
    image: "/images/4.jpg",
    price: 600,
    discountPrice: "20%",
    description:
      "A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves.",
  },
  {
    title: "Adidas",
    image: "/images/5.jpg",
    price: 7050,
    discountPrice: "20%",
    description:
      "adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create.",
  },
  {
    title: "Canvas",
    image: "/images/6.jpg",
    price: 1450,
    discountPrice: "20%",
    description:
      "Canvs AI is the easiest, fastest and most accurate insights platform for analyzing open-ended text from virtually any source",
  },
  {
    title: "Clipper",
    image: "/images/7.jpg",
    price: 2800,
    discountPrice: "20%",
    description:
      "Shop for Hair Clippers online on Jumia Nigeria. Discover a great selection of Hair Clippers ✓ Best prices in Nigeria",
  },
  {
    title: "Pressing Iron",
    image: "/images/8.jpg",
    price: 420,
    discountPrice: "20%",
    description:
      "Shop for pressing irons online on Konga.com at the best prices in Nigeria from top brands such as Binatone, Siasho, Polystar",
  },
  {
    title: "Hand Bag",
    image: "/images/9.jpg",
    price: 590,
    discountPrice: "20%",
    description:
      "Shop a wide selection of styles and brands of women's handbags at Amazon.com. Free shipping and free returns on eligible items.",
  },
  {
    title: "Samsung",
    image: "/images/10.jpg",
    price: 10000,
    discountPrice: "20%",
    description:
      "Discover the latest Samsung Galaxy smartphone and explore the full line of mobile phones including the Galaxy Z Fold4 and Galaxy Z Flip4.",
  },
  {
    title: "Blender",
    image: "/images/11.jpg",
    price: 7180,
    discountPrice: "20%",
    description:
      "Cycles Render Engine. Cycles is Blender's built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.",
  },
  {
    title: "Plasma TV",
    image: "/images/12.jpg",
    price: 1020,
    discountPrice: "20%",
    description:
      "A plasma display panel (PDP) is a type of flat panel display that uses small cells containing plasma: ionized gas that responds to electric fields.",
  },
  {
    title: "Earpod",
    image: "/images/13.jpg",
    price: 3700,
    discountPrice: "20%",
    description:
      "Earpods are mobile phone accessories that enable you to make or end calls, listen to your favourite FM stations on the go on your mobile phone",
  },
  {
    title: "Powerbank",
    image: "/images/14.jpg",
    price: 2500,
    discountPrice: "20%",
    description:
      "Discover power banks online at Jumia Nigeria | Large selection of reliable power banks & accessories from top brands: Tecno, Samsung, New Age",
  },
  {
    title: "Wrist Watch",
    image: "/images/1.jpg",
    price: 1200,
    discountPrice: "20%",
    description:
      "Shop for Men Wrist Watches online on Jumia Nigeria. Discover a great selection of Wrist Watches for Man ✓ Best prices in Nigeria",
  },
  {
    title: "Pen Drive",
    image: "/images/2.jpg",
    price: 5400,
    discountPrice: "20%",
    description:
      "A USB flash drive is a data storage device that includes flash memory with an integrated USB interface. It is typically removable, rewritable and much more",
  },
  {
    title: "Andriod",
    image: "/images/3.jpg",
    price: 4100,
    discountPrice: "20%",
    description:
      "Explore the newest Android smartphones, all with helpful features from Google, plus non-stop data protection.",
  },
  {
    title: "T-Shirt",
    image: "/images/4.jpg",
    price: 600,
    discountPrice: "20%",
    description:
      "A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves.",
  },
  {
    title: "Adidas",
    image: "/images/5.jpg",
    price: 7050,
    discountPrice: "20%",
    description:
      "adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create.",
  },
  {
    title: "Canvas",
    image: "/images/6.jpg",
    price: 1450,
    discountPrice: "20%",
    description:
      "Canvs AI is the easiest, fastest and most accurate insights platform for analyzing open-ended text from virtually any source",
  },
  {
    title: "Clipper",
    image: "/images/7.jpg",
    price: 2800,
    discountPrice: "20%",
    description:
      "Shop for Hair Clippers online on Jumia Nigeria. Discover a great selection of Hair Clippers ✓ Best prices in Nigeria",
  },
  {
    title: "Pressing Iron",
    image: "/images/8.jpg",
    price: 420,
    discountPrice: "20%",
    description:
      "Shop for pressing irons online on Konga.com at the best prices in Nigeria from top brands such as Binatone, Siasho, Polystar",
  },
  {
    title: "Hand Bag",
    image: "/images/9.jpg",
    price: 590,
    discountPrice: "20%",
    description:
      "Shop a wide selection of styles and brands of women's handbags at Amazon.com. Free shipping and free returns on eligible items.",
  },
  {
    title: "Samsung",
    image: "/images/10.jpg",
    price: 10000,
    discountPrice: "20%",
    description:
      "Discover the latest Samsung Galaxy smartphone and explore the full line of mobile phones including the Galaxy Z Fold4 and Galaxy Z Flip4.",
  },
  {
    title: "Blender",
    image: "/images/11.jpg",
    price: 7180,
    discountPrice: "20%",
    description:
      "Cycles Render Engine. Cycles is Blender's built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.",
  },
  {
    title: "Plasma TV",
    image: "/images/12.jpg",
    price: 1020,
    discountPrice: "20%",
    description:
      "A plasma display panel (PDP) is a type of flat panel display that uses small cells containing plasma: ionized gas that responds to electric fields.",
  },
  {
    title: "Earpod",
    image: "/images/13.jpg",
    price: 3700,
    discountPrice: "20%",
    description:
      "Earpods are mobile phone accessories that enable you to make or end calls, listen to your favourite FM stations on the go on your mobile phone",
  },
  {
    title: "Powerbank",
    image: "/images/14.jpg",
    price: 2500,
    discountPrice: "20%",
    description:
      "Discover power banks online at Jumia Nigeria | Large selection of reliable power banks & accessories from top brands: Tecno, Samsung, New Age",
  },
];

function Home() {
  return (
    <>
      {products.map((value, index) => {
        return <EachProduct productIndex={index} productValue={value} />;
      })}
    </>

    // <div style={container_style}>
    //   <img src='/images/12.jpg' alt='12.jpg' style={imgstyle}/>
    //   <h4> Product Name: kamil{} </h4>
    //   <h6> Price:123, discountPrice : "20%", description : ""{} </h6>
    // </div>
  );
}

export default Home;
