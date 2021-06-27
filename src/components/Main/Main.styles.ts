import styled from "styled-components";

const MainContainer = styled.main`
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filterContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;

    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 425px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

export { MainContainer };
