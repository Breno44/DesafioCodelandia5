import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(130.02deg, #628e75 0.66%, #1a4855 83.32%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 1440px;
  margin-top: 41px;
  margin-bottom: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  width: 100px;
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 30px;
`;

export const Main = styled.main`
  width: 1440px;
  display: flex;
`;

export const MainContainerRight = styled.div`
  width: 50%;
`;

export const SubTitle = styled.h3`
  color: #f9f9f9;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  width: 450px;
  color: #f9f9f9;
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 25px;
  line-height: 109%;
`;

export const Text = styled.p`
  color: #f9f9f9;
  font-size: 16px;
  font-weight: normal;
  line-height: 180%;
  margin-bottom: 46px;
`;

export const ButtonPlay = styled.button`
  color: #f9f9f9;
  width: 225px;
  height: 45px;
  background: #658e76;
  margin-right: 25px;
  border: none;
`;

export const ButtonTrailer = styled.button`
  color: #f9f9f9;
  width: 225px;
  height: 45px;
  background-color: transparent;
  border: 2px solid #658e76;
`;

export const MainContainerLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  width: 500px;
`;
