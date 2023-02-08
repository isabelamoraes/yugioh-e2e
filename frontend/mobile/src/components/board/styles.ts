import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'cover'
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.ActivityIndicator.attrs(props => ({
  color: props.theme.colors.purple500,
  size: 'large'
}))``;

export const Content = styled.View`
  flex-direction: row;
`;