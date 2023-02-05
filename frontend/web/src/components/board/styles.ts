import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Pack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Loader = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  width: 50px;
  height: 50px;
  border: 8px solid var(--purple-800);
  border-top: 8px solid var(--purple-500);
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`