import styles from "./Products.module.css";

export default function Products(){

const products=[

{
img:"/images/product1.jpg",
name:"Bình chữa cháy CO₂",
price:"1.250.000đ"
},

{
img:"/images/product2.jpg",
name:"Chuông báo Cháy",
price:"15.900.000đ"
},

{
img:"/images/product3.jpg",
name:"Tủ chữa cháy",
price:"4.500.000đ"
},

{
img:"/images/product4.jpg",
name:"Đầu phun Sprinkler",
price:"320.000đ"
},

{
img:"/images/product5.jpg",
name:"Trung tâm báo cháy",
price:"9.800.000đ"
},

{
img:"/images/product6.jpg",
name:"máy bơm chữa cháy",
price:"450.000đ"
}

];

return(

<section
  className={styles.products}
  id="products"
  data-aos="zoom-in"
>

<div className={styles.title}>

<span>SẢN PHẨM</span>

<h2>Thiết bị nổi bật</h2>

</div>

<div className={styles.grid}>

{

products.map((item,index)=>(

<div className={styles.card} key={index}>

<img src={item.img} alt="" />

<div className={styles.info}>

<h3>{item.name}</h3>

<p>{item.price}</p>

<a href="#contact">
Liên hệ
</a>

</div>

</div>

))

}

</div>

</section>

)

}