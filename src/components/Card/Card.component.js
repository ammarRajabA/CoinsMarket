import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../resources/Colors'

import moment from 'moment'

export default class Card extends Component{
	render(){
		return(
			<View style={[styles.container,styles.shadow]}>
				<TouchableOpacity onPress={this.props.onPress}>
					<View style={[styles.row,{justifyContent:'space-between'}]}>
						<Text style={styles.title}>{this.props.title}</Text>
						<Text style={[styles.titleTag,styles.shadow]}>{this.props.titleTag}</Text>
					</View>
					<Text style={styles.subtitle}>{this.props.subtitle}</Text>
					<View style={styles.row}>
						{this.props.tags && this.props.tags.map((tag,i)=>
							<Text key={i.toString()} style={[styles.tag,styles.shadow]}>{tag}</Text>
						)}
					</View>
					<View style={styles.row}>
						<Text style={styles.date}>{moment(this.props.date).format('lll')}</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles={
	container:{
		position:'relative',
		width:'90%',
		marginBottom:10,
		padding:10,
		backgroundColor:Colors['White Ice'],
		alignSelf:'center'
	},
	row:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		marginTop:10,
		marginBottom:10,
		flexWrap:'wrap'
	},
	title:{
		fontSize:24,
		fontWeight:'bold',
		color:Colors['Black Bean'],
		marginLeft:10,
		marginRight:10
	},
	tag:{
		padding:10,
		backgroundColor:Colors['Tan'],
		color:Colors['White'],
		margin:10,
		borderRadius:5
	},
	titleTag:{
		padding:10,
		backgroundColor:Colors['Red'],
		color:Colors['White'],
		borderRadius:5
	},
	date:{
		color:Colors['Gray'],
		marginLeft:'auto',
		marginRight:20
	},
	subtitle:{
		color:Colors['Gray Chateau'],
		fontSize:12,
		marginLeft:10,
		marginRight:10
	},
	shadow:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
}