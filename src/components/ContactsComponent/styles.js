// import {ScaledSheet} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  name: {fontSize: 17, color: 'black'},
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
    color: 'black'
  },

  floatingActionButton: {
    backgroundColor: 'red',
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    
  },

  actionText: {
    textAlign: 'center',
    maxWidth: '70@s',
    paddingTop: '5@s',
    fontSize: '14@s',
    color: colors.white,
  },
  actionTextStyle: {
    padding: '40@s',
  },
});
