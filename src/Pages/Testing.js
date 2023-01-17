import React, { useState } from "react";

function Testing() {
  //   const [imgVal, setImgVal] = useState([]);
  //   const handleIMG = (event) => {
  //     setImgVal(event.target.value);
  //   };
  const [res, setRes] = useState();
  const [me, setMe] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log([imgVal])
    const nums = document.getElementById("nums").value;
    // data.forEach((num) => console.log(num));
    const data1 = nums.split("");
    const data = [1, 2, 3, 4];
    console.log(data1);
    data1.forEach((element) => {
      console.log(element * 2);
      setRes(element * 2);
    });
    const data2 = res;
    console.log(data2);
    // console.log(data);
  };
  return (
    <div>
      <form>
        {/* <input type="text" value={imgVal} onChange={handleIMG} id="nums" /> */}
        <input type="text" id="nums" placeholder="Enter number" />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
      <p>{res}</p>
    </div>
  );
}

export default Testing;
