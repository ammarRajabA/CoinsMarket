const INIT_STATE={
	loading:false,
	types:[]
}

export default (state=INIT_STATE,action)=>{
	switch (action.type){
		case 'START_LOADING_COINS_TYPES':
			return {...state,loading:true}
		case 'GOT_COINS_TYPES':
			return {...state,loading:false,types:action.payload}
		default:
			return state
	}
}