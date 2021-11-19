import { AiFillYoutube, AiOutlineTwitter, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import {
  Container,
  Header,
  HeaderLogo,
  HeaderIcons,
  Main,
  MainContainerRight,
  SubTitle,
  Title,
  Text,
  ButtonPlay,
  ButtonTrailer,
  MainContainerLeft,
  Image,
} from "./appStyle";
import headerLogo from "./assets/img/logo.svg";
import imageIllus from "./assets/img/ilustracao.png";

export function App() {
  return (
    <Container>
      <Header>
        <HeaderLogo src={headerLogo} />
        <HeaderIcons>
          <AiOutlineFacebook color="#fff" size={28} />
          <AiFillInstagram color="#fff" size={28} />
          <AiOutlineTwitter color="#fff" size={28} />
          <AiFillYoutube color="#fff" size={28} />
        </HeaderIcons>
      </Header>
      <Main>
        <MainContainerRight>
          <SubTitle>HAYAO MIYAZAKI</SubTitle>
          <Title>A VIAGEM DE CHIHIRO</Title>
          <Text>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em
            animais.
          </Text>
          <ButtonPlay>Assistir agora</ButtonPlay>
          <ButtonTrailer>assista o trailer</ButtonTrailer>
        </MainContainerRight>
        <MainContainerLeft>
          <Image src={imageIllus} />
        </MainContainerLeft>
      </Main>
    </Container>
  );
}
