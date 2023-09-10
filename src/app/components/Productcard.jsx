'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../style/product.module.scss'

const Productcard = ({a}) => {
  return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <Image src={a.image} className='w-100 mb-3' width={100} height={300}></Image>
          </div>
          <div className={styles.product_des}>
            <h4 className='fs-6 fw-semibold text-center'><Link href={`/details/${a.id}`} className="text-decoration-none text-dark">{a.title}</Link></h4>
            <p className='m-0 text-start text-center'>${a.price}</p>
          </div>
        </div>
      </div>
  )
}

export default Productcard