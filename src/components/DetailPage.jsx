import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
const TopConatiner = styled.div`
  height: 150px;
  width: 630px;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50vw;
  border-radius: 100px;
  gap: 25px;
  margin: auto;
  height: 100vh;
  flex-direction: column;
  background: black;
  -webkit-box-shadow: -67px 28px 11px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -67px 28px 11px 10px rgba(0, 0, 0, 0.75);
  box-shadow: -67px 28px 11px 10px rgba(0, 0, 0, 0.75);
`;
const Container = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const Container2 = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const DetailPage = () => {
  const { id } = useParams();
  const [SpaceDetail, setSpaceDetail] = useState({});
  const URL = `https://api.spacexdata.com/v4/launchpads/${id}`;
  const GetSpaceDetail = () => {
    axios.get(URL).then((response) => {
      setSpaceDetail(response.data);
    });
  };
  useEffect(() => {
    GetSpaceDetail();
  }, []);

  console.log("whhhhhhhh", SpaceDetail);
  return (
    <MainContainer>
      <Container>Name:{SpaceDetail.name}</Container>
      <Container2>Details:{SpaceDetail.details}</Container2>
      <Container>Region:{SpaceDetail.region}</Container>
    </MainContainer>
  );
};

export default DetailPage;
