import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { User } from "../models/login.model"

@Injectable({
	providedIn: 'root'
})

export class LoginService {

	private user: User = {
		id: null,
		name: ''
	}
	private error: string = ''

	constructor(private readonly http: HttpClient) {
	}

	public fetchUser(id: number): void {
		this.http.get<User>('https://noroff-assignment-api-frontend.herokuapp.com/trainers/'+id)
			.subscribe(user => {
				this.user = user
			}, (error: HttpErrorResponse) => {
				this.error = error.message;
			});
	}
}