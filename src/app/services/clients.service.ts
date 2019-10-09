import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/entities/client';

const ROOT = "http://localhost:3000/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  public async GetClients(): Promise<Client[]> {
    return await this.http.get<Client[]>(ROOT).toPromise();
  }

  public async GetClient(id: number): Promise<Client> {
    return await this.http.get<Client>(`${ROOT}/${id}`).toPromise();
  }

  public async CreateClient(client: Client) {
    return this.http.post(ROOT, client).toPromise();
  }

  public async UpdateClient(client: Client) {
    return this.http.put(`${ROOT}/${client.NUM_COD_CLIENTE}`, client).toPromise();
  }

  public async DeleteClient(client: Client) {
    return this.http.delete(`${ROOT}/${client.NUM_COD_CLIENTE}`).toPromise();
  }

}
