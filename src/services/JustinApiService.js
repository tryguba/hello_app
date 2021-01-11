export default class JustinApiService {
	
	_apiBase = `http://openapi.justin.ua`;
	
	
	getResponce = async (url) => {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const result = await fetch(`${proxyurl}${this._apiBase}/${url}`);
		
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, received ${result.status} `)
		}
		return await result.json();
	};
	
	//Запит для отримання інформації всіх відділень
	getAllBranches = async () => {
		const res = await this.getResponce(`/branches/`);
		return res.result.map(this._transformBranch);
	};
	
	//Запит для отримання інформації про відділення в населеному пункті (підтримує багатомовність):
	getAllBranchLocality = async (city) => {
		const res = await this.getResponce(`/branches/?locality=${city}`);
		return res.result;
	};
	
	//Запит для отримання інформації одного відділення:
	getOneBranch = async (id) => {
		const branch = await this.getResponce(`/branches/${id}`);
		return this._transformBranch(branch.result[0]);
	};
	
	//Метод дозволяє отримати інформацію про типи відділень
	getTypesInfo = async () => {
		const res = await this.getResponce(`/branch_types`);
		return res.result;
	};
	
	//Метод дозволяє отримати інформацію про найближчі відділення до вказаної адреси
	getOneNearestBranch = async (id) => {
		const res = await this.getResponce(`/branches_locator/${id}`);
		return res.result;
	};
	
	//Метод дозволяє отримати інформацію про відправлення
	getTracking = async (numOrder) => {
		const res = await this.getResponce(`/tracking/${numOrder}`);
		return res.result;
	};
	
	//Метод дозволяє отримати історію руху відправлення
	getTrackingHistory = async (numOrder) => {
		const res = await this.getResponce(`/tracking_history/${numOrder}`);
		return res.result;
	};
	
	//Метод дозволяє отримати інформацію про населені пункти
	getInfoLocation = async () => {
		const res = await this.getResponce(`/localities`);
		return res.result;
	};
	
	//Запит на отримання інформації про населені пункти в яких на даний момент працюють відділення
	getInfoLocationActive = async () => {
		const res = await this.getResponce(`/localities/activity`);
		return res.result;
	};
	
	getServices = async () => {
		const res = await this.getResponce(`/services`);
		return res.result;
	};
	
	_transformBranch = (branch) => {
		console.log(branch);
		return {
			description: branch.description,
			adress: branch.adress,
			number: branch.number,
			photo: branch.photos[0],
			format: branch.format
		}
	}
	
}
