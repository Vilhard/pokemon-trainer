import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { User } from "../models/user.model"
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class LoginService {

	private _user: User = {
		id: null,
		username: '',
		pokemon: []
	}
	private _error: string = ''
	private _apiUrl: string = 'https://noroff-assignment-api-frontend.herokuapp.com'
	private _apiKey: string = 'sdfdflsdnfsdklnfoiruourpgklfldkjhtrhirhreghkglndfnbnfllkdfjhgerl'

	constructor(private readonly http: HttpClient) {
	}

	public fetchById(id: number): void {
		this.http.get<User>(this._apiUrl+'/trainers/'+id)
			.subscribe(user => {
				this._user = user
			}, (error: HttpErrorResponse) => {
				this._error = error.message;
			});
	}

	public addUser(username: string): void {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'X-API-Key': this._apiKey
			})
		};

		const body = JSON.stringify({ 
			username: username,
			pokemon: [] 
		});

		this.http.post<User>(this._apiUrl+'/trainers', body, httpOptions)
		.subscribe(data => {
			this._user.id = data.id
		}, (error: HttpErrorResponse) => {
			this._error = error.message;
		});
	}

	public getUser(): User {
		return this._user;
	}

	public getError(): string {
		return this._error;
	}
}