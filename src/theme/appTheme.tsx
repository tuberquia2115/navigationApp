import {StyleSheet} from 'react-native';

export const colors = {
    primary: '#5856D6',
    secondary: '#FF6427'
}
export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnLarge: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 10,
  },
  btnLargeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  menuContainer: {
    margin: 30,
  },
  menuItem: {
    marginVertical: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});
