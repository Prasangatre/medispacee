import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`
  display: flex;
  background-color: black;
  color: floralwhite;
  flex-direction: column;
  width: 370px;
  box-sizing: border-box;
  border: 2px solid red;
  flex-grow: 1;
  webkit-box-shadow: 24px 28px 11px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 24px 28px 11px 10px rgba(0, 0, 0, 0.75);
  box-shadow: 24px 28px 11px 10px rgba(0, 0, 0, 0.75);
`;
const ImageBox = styled.div`
  display: flex;
  flex: 40%;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 60%;
  justify-content: space-around;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 25px;
  overflow: hidden;
`;
const Status = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
const Detail = styled.div`
  font-weight: 400;
  font-size: 15px;
`;
const Top = styled.div`
  font-weight: 400;
  font-size: 15px;
  overflow: hidden;
`;
const Boxs1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Boxs2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  justify-content: space-around;
`;
const CardComponent = ({ data }) => {
  console.log("data from yydyd is", data);
  const { full_name, details, status, launches, images, id } = data;
  console.log();
  // console.log("details areeeeee",full_name,details,status,launches)
  const Navigate = useNavigate();
  return (
    <MainContainer>
      <ImageBox>
        <img
          src={images.large[0]}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt=""
        />
      </ImageBox>
      <ContentBox>
        <Boxs1>
          <Name>Name:{full_name}</Name>
          <Status>Status:{status}</Status>
        </Boxs1>

        <Boxs2>
          <Detail>Details:{details}</Detail>
        </Boxs2>
        <Top> Top Launches:{launches ? launches[0] : "NA"}</Top>
      </ContentBox>
      <Button>
        {" "}
        <button onClick={() => Navigate(`/${id}`)}>Detail View</button>
      </Button>
    </MainContainer>
  );
};

export default CardComponent;
