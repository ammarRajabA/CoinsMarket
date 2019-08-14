import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import { connect } from 'react-redux';

import {getCoinsMarket} from './CoinsTypes.action'

import Card from '../../components/Card/Card.component'

export class CoinsTypes extends Component{
	componentDidMount(){
		this.props.getCoinsMarket()
	}
	renderItem=({item,index})=>{
		return (
				<Card
					title={item.name}
					titleTag={item.symbol}
					subtitle={item.slug}
					tags={['rank: '+item.cmc_rank,'Trading Pairs: '+item.num_market_pairs,'Circulating Supply: '+item.circulating_supply,'Total Supply: '+item.total_supply]}
					date={item.last_updated}
				/>
			)
	}
	render(){
		return(
				<View>
					<FlatList
						keyExtractor={(item,index)=>index.toString()}
						data={this.props.coinsTypes.types}
						renderItem={this.renderItem}
						onRefresh={this.props.getCoinsMarket}
						refreshing={this.props.coinsTypes.loading}
						extraData={this.state}
					/>
				</View>
			)
	}
}

const mapStateToProps=(state)=>{
	return {coinsTypes:state.coinsTypes}
}

export default connect(mapStateToProps,{getCoinsMarket})(CoinsTypes)