import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
const CardStyle = styled.div`
  display: grid;
  row-gap: 25px;
  grid-template-columns: auto auto auto;
`;
const HomePage = () => {
  const [SpaceData, setSpaceData] = useState([]);
  const URL = "https://api.spacexdata.com/v4/launchpads";
  const GetSpaceData = () => {
    axios.get(URL).then((response) => {
      setSpaceData(response.data);
    });
  };
  useEffect(() => {
    GetSpaceData();
  }, []);

  return (
    <CardStyle>
      {SpaceData.map((spacedetail, index) => (
        <CardComponent data={spacedetail} key={index} />
      ))}
    </CardStyle>
  );
};

export default HomePage;
