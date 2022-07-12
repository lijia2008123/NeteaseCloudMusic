import { defineStore } from "pinia";

export const tabStore = defineStore({
	id: 'tab',
	state: () => {
		return {
			activeKey: 'found'
		}
	},
	actions: {
		changeTab(type:string) {
			this.activeKey = type
		}
	}
})