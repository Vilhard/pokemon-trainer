import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
	providedIn: 'root'
})

export class SessionService {
	private _user: User | undefined;

	constructor() {
		const storedUser = localStorage.getItem('user')
		if(storedUser) {
			this._user = JSON.parse(storedUser) as User;
		}
	}

	get user() : User |  undefined {
		return this._user;
	}

	setUser(user: User) : void {
		this._user = user;
		localStorage.setItem('user', JSON.stringify(user));
	}

	logout() {
		this._user = undefined;
		localStorage.removeItem('user');
	}

}
