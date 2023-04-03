import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
export default function FetchWithUpdate() {
  const [data, setData] = useState();
  // const item = { name: "Ben", description: "new" };
  // // Check if item exists in backend API

  // useEffect(() => {
  //   const checkItemExists = async (itemName) => {
  //     const response = await axios.get(`http://localhost:8001/Cart${itemName}`);
  //     const data = await response.json();
  //     return data.length > 0 ? data[0] : null;
  //   };

  //   // Add new item instance to backend API
  //   const addItemInstance = async (item, newItemInstance) => {
  //     item.instances.push(newItemInstance);
  //     const response = await axios.put(
  //       `http://localhost:8001/Cart/${item.name}`
  //       // {
  //       //   method: "PUT",
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       //   body: JSON.stringify(item),
  //       // }
  //     );
  //     return response.json();
  //   };

  //   // Example usage
  //   const newItemInstance = {
  //     name: "Item Name",
  //     description: "Item Description",
  //     // Additional item data here
  //   };

  //   const fetch = async () => {
  //     const existingItem = await checkItemExists(item.description);

  //     if (existingItem) {
  //       await addItemInstance(existingItem, newItemInstance);
  //     } else {
  //       // Item does not exist, create new record in backend API
  //       // ...
  //       const response = await axios.post(`http://localhost:8001/Cart/}`, {
  //         ...item,
  //       });
  //       console.log(response);
  //     }
  //   };
  //   fetch();
  // }, []);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:8000/Cart");
      setData(res?.data);
    };
    fetch();
    // console.log(data);
  }, [data]);
  const newData = { name: "Yakubu", description: "update", amount: 300 };
  const handlePut = async () => {
    const ifExist = data?.find((item) => item.name === newData.name);

    if (ifExist) {
      console.log(ifExist);
      const name = ifExist.name;
      const description = ifExist.description;
      const amount = ifExist.amount + newData.amount;
      const data = { name, description, amount };
      await axios.put(`http://localhost:8000/Cart/${ifExist.id}`, { ...data });
    } else {
      axios.post("http://localhost:8000/Cart", { ...newData });
    }
  };
  return (
    <div>
      <Button onClick={handlePut}>put</Button>
    </div>
  );
}
