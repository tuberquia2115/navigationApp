export const getIconName = (route: any) => {
    let iconName: string = '';
    switch (route.name) {
      case 'Tab1Screen':
        iconName = 't1';
        break;
  
      case 'Tab2Screen':
        iconName = 't2';
        break;
  
      case 'StackNavigator':
        iconName = 'St';
        break;
    }
  
    return iconName;
  };