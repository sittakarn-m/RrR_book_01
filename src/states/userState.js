import axios from 'axios'
import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

const useUserStore = create( persist((set, get)=> ({
	

	user: null,
	token : '',
	login : async (input)=>{
		const res = await axios.post('http://localhost:8899/auth/login', input)
		set({token : res.data.token , user: res.data.user})
		
		console.log("Token:", useUserStore.getState().token);

		return res.data
		
	},
	logout : ()=>{
		set({token: '', user: null})
	}
}),{
	name: 'state',
	storage: createJSONStorage(()=> localStorage)
}))

export default useUserStore