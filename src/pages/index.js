import React, { useState, useContext, useEffect, } from 'react';
import Head from "next/head";
import Header from '../components/Header';
import ProductFeed from "../components/ProductFeed";
import axios from "axios";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>DoorStepp</title>
      </Head>

      <Header />
      <ProductFeed products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
  return {
    props: { products }, // will be passed to the page component as props
  }
}
