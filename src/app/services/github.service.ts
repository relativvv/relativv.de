import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GitHubRepository} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public gitHubUrl: string = "https://api.github.com";
  public headers: HttpHeaders = new HttpHeaders()
    .set("Accept", "application/vnd.github+json")
    .set("Authorization", "Bearer " + environment.github_bearer)
    .set("X-Github-Api-Version", "2022-11-28");

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  public getRepositories(): Observable<GitHubRepository[]> {

    return this.httpClient.get<GitHubRepository[]>(this.gitHubUrl + "/users/relativvv/repos", {headers: this.headers});
  }

  public getRepositoryLanguages(repositoryName: string): Observable<any> {
    return this.httpClient.get<any>(this.gitHubUrl + "/repos/relativvv/" + repositoryName + "/languages", {headers: this.headers});
  }
}
