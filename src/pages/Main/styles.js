import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #333;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0px 10px;
`;

export const Avatar = styled.Image`
  width: 45;
  height: 45;
  border-radius: 8px;
  background: #eee;
`;

export const InfoView = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-left: 8px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  color: #999;
  margin-left: 8px;
`;

export const ProfileButton = styled(RectButton)``;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
