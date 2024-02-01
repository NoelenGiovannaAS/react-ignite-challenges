import { styled } from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const TitleSubtitle = styled.div`
  display: flex;
  flex-direction: column; //gap: 1.25rem;
  gap: 1rem;
  max-width: 36rem;
  > h1 {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme.base.title};
    font-size: 3rem;
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base.subtitle};
  }
`;

export const ImageCoffeDelivery = styled.img`
  width: 476px;
  height: 360px;
  @media (max-width: 768px) {
    width: 370px;
    height: 300px;
  }
`;
