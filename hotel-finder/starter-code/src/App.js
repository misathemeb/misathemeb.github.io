import logo from "./logo.png";
// import `css`and `ThemeProvider` from "@emotion/react" package
// import styled components, theming and animation from "./styles.js" file
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardWrapper, ImageWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ActionsWrapper,
  Button, LogoSpin } from "./styles";


const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "a picture of a bed and a person looking out a big window at sunset",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "a lagoon like pool surrounded by thatched huts and tall, thin palm trees",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, & poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "a shot of a bed and bedside table with a lamp against a dark navy blue wall",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <main
      css={{
        color: "#0e4c61",
        background: "#caf0f8",
        height: "1200px",
        fontFamily: "Lato', sans-serif"
      }}
    >
       <img
        src={logo}
        alt="logo"
        css={css`
          display: absolute;
          margin-top: 15px;
          margin-left: 15px;
          height: 100px;
          width: 100px;
          animation: ${LogoSpin} 12s linear infinite;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          padding: 20px;
          @media (max-width: 1000px) {
            display: grid;
          }
        `}
      >
        {hotels.map((hotel) => {
          return (
            <CardWrapper key={hotel.id}>
              <ImageWrapper src={hotel.src} alt={hotel.alt} />
              <TextWrapper>
                <TitleWrapper>{hotel.title}</TitleWrapper>
                <DescriptionWrapper>{hotel.description}</DescriptionWrapper>
              </TextWrapper>
              <ActionsWrapper>
                <Button>Details</Button>
                <Button>Book</Button>
              </ActionsWrapper>
            </CardWrapper>
          );
        })}
      </div>
    </main>
  );
}

export default App;
