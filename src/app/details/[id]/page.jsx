'use client'
import Image from "next/image"
import styles from '../../style/detail.module.scss'
import React from "react";

async function getProducts(params) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const prod = await res.json()
  return prod
}
export default async function Page({ params }) {
  const product = await getProducts(params);

  return  <div className="container p-4">
  <div className="row">
      <div className="col-lg-5 col-md-6">
          <div className="detail-img">
              <Image src={product.image} width={450} height={450} className={styles.img_des}></Image>
          </div>
      </div>
      <div className="col-lg-7 col-md-6">
          <div className="detail-description">
              <h3>{product.title}</h3>
              <p className="">${product.price}</p>
              <p className="text-capitalize text-secondary">{product.category}</p>
              <p>{product.description}</p>
              <div>
                  <button className={`${styles.add_to_cart} me-2`}>Add to Cart</button>
                  <button className={styles.count}>+</button>
                  <span className={styles.count} >1</span>
                  <button className={styles.count}>-</button>
              </div>
          </div>
      </div>
  </div>
  
</div>
}

