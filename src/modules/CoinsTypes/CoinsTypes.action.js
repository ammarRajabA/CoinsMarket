import API from '../../api/API';

export const getCoinsMarket=()=>async dispatch=>{
	try{
		dispatch({type:"START_LOADING_COINS_TYPES"})
		var response=await API.CoinMarket.get('cryptocurrency/listings/latest');
		dispatch({type:"GOT_COINS_TYPES",payload:response.data.data})
	}catch(err){
		dispatch({type:"GOT_COINS_TYPES",payload:[]})
	}
}