import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { User } from "../models/user.model"
import { HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { SessionService } from 'src/app/services/session.service';

const API_URL = environment.baseURL
const API_KEY = environment.API_KEY

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

	constructor(private readonly http: HttpClient, private readonly sessionService: SessionService) {
	}

	public fetchByUsername(username: string): Observable<User[]> {
		return this.http.get<User[]>(API_URL+'/trainers/?username='+username)
	}

	public fetchById(id: number): Observable<User> {
		return this.http.get<User>(API_URL+'/trainers/'+id)
	}

	public addUser(username: string): Observable<User> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'X-API-Key': API_KEY
			})
		};

		const body = JSON.stringify({ 
			username: username,
			pokemon: [] 
		});

		return this.http.post<User>(API_URL+'/trainers', body, httpOptions)
	}

	public getUser(): User {
		return this._user;
	}

	public getError(): string {
		return this._error;
	}

	public authenticate(username: string, onSuccess: () => void): void {
		// RxJS
		// switchMap, map, retry, finalize, catch, throwError, tap

		this.fetchByUsername(username)
		.pipe(
			switchMap((users: User[]) => {
				if(users.length) {
					return of(users[0])
				}
				return this.addUser(username)
			})
		)
		.subscribe(
			(user: User) => { // success
				if(user.id) {
					this.sessionService.setUser(user);
					onSuccess();
				}
			},
			(error: HttpErrorResponse) => { // error
				this._error = error.message;
			}
		)
	}
}