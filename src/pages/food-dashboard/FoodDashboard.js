import React, { useEffect, useState } from 'react';
import { Modal, TextInput, Label, Checkbox, Button, Spinner } from "flowbite-react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase-setup';
import Header from '../components/Header';
import FoodComponent from './components/FoodComponent';

function FoodDashboard() {
  const [foodItems, setFoodItems] = useState({
    data: [],
    loader: false
  })

  const coll = collection(db, "cities");

  useEffect(() => {
    const initialFetchData = async () => {

      setFoodItems(prevState => {
        return {
          ...prevState,
          loader: true,
        }
      })

      let temp = []
      const querySnapshot = await getDocs(collection(db, "cities"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        temp.push(doc.data())
      });

      setFoodItems(prevState => {
        return {
          ...prevState,
          data: temp,
          loader: false,
        }
      })
    }
    initialFetchData();
  }, []);

  console.log({ foodItems });
  return (
    <>
      <Header />
      <div>
        {foodItems.loader ?
          <Spinner /> :
          null
        }

        {
          foodItems.data.map(item => {
            console.log(item);
            return (
              <FoodComponent item={item} />
            )
          })
        }
      </div>
    </>
  )
}

export default FoodDashboard;