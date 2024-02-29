import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.base.card};
  border-radius: 8px 50px 8px 50px;
  width: 16rem;
  padding: 0 1.25rem;
  /*width: 16rem;
  height: 19.375rem;
  padding-bottom: 1rem;
  padding: 1.25rem;*/
`;

export const ImageCoffee = styled.img`
  position: relative;
  top: -30px;
  width: 7.5rem;
  height: 7.5rem;
`;

export const CoffeeTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const CoffeTag = styled.div`
  background: ${(props) => props.theme.product["yellow-light"]};
  color: ${(props) => props.theme.product["yellow-dark"]};
  font-weight: bold;
  line-height: 130%;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
`;

export const CoffeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CoffeName = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme.base.title};
`;

export const CoffeDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base.label};
  text-align: center;
  padding: 0 1.25rem;
`;

export const FooterPriceQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 0.75rem;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffePrice = styled.h5`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;

  > strong {
    font-weight: bold;
    font-size: 24px;
    margin-left: 3px;
  }
`;
