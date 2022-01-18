import { StyleSheet, View, Text } from 'react-native';

function Header(props) {
   return (
      <View style={style.container}>
         <Text style={style.title}>{props.title}</Text>
      </View>
   )
}

const style = StyleSheet.create({
   container: {
      height: '15%',
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
   },
   title: {
      fontSize: 30,
      color: '#E3E3E3',
      padding: "5%"
   }
})

export default Header;
