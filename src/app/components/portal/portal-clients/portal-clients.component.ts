import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from 'src/app/entities/client';

@Component({
  selector: 'portal-clients',
  templateUrl: './portal-clients.component.html',
  styleUrls: ['./portal-clients.component.css'],
  providers: [ClientsService]
})
export class PortalClientsComponent implements OnInit {

  constructor(private clientsService: ClientsService) {}

  public Clients: Client[];
  public EditClientModal: Client = new Client();
  public CreateClientModal: Client = new Client();
  public DeleteClientModal: Client = new Client();

  public ShowErrorAlert: boolean = false;
  public ShowOkAlert: boolean = false;
  
  ngOnInit(): void {
    this.LoadClients();
  }

  LoadClients(): void {
    this.clientsService.GetClients().then((clients) => {
      this.Clients = clients;
    });
  }

  OkAlerts() {
    this.ShowErrorAlert = false;
    this.ShowOkAlert = true;
  }

  ErrorAlerts() {
    this.ShowErrorAlert = true;
    this.ShowOkAlert = false;
  }

  ResetAlerts() {
    this.ShowErrorAlert = false;
    this.ShowOkAlert = false;
  }

  ShowModalEditClient(client: Client): void {
    this.ResetAlerts();
    this.EditClientModal.NUM_COD_CLIENTE = client.NUM_COD_CLIENTE;
    this.EditClientModal.NOM_RZN_SOC_EMIS = client.NOM_RZN_SOC_EMIS;
    this.EditClientModal.COD_UBI_EMIS = client.COD_UBI_EMIS;
    this.EditClientModal.NUM_RUC_EMIS = client.NUM_RUC_EMIS;
    this.EditClientModal.TXT_DMCL_FISC_EMIS = client.TXT_DMCL_FISC_EMIS;
  }

  EditClient(client: Client): void {
    this.clientsService.UpdateClient(client).then((res: any) => {
      if (res.updated) {
        this.OkAlerts();
        this.LoadClients();
      } else {
        this.ErrorAlerts();
      }
    });
  }

  ShowModalCreateClient(): void {
    this.ResetAlerts();
  }

  CreateClient(client: Client): void {
    this.clientsService.CreateClient(client).then((res: any) => {
      if (res.created) {
        this.OkAlerts();
        this.LoadClients();
        this.CreateClientModal = new Client();
      } else {
        this.ErrorAlerts();
      }
    });
  }

  ShowModalDeleteClient(client: Client): void {
    this.ResetAlerts();
    this.DeleteClientModal.NUM_COD_CLIENTE = client.NUM_COD_CLIENTE;
  }

  DeleteClient(client: Client): void {
    this.clientsService.DeleteClient(client).then((res: any) => {
      if (res.deleted) {
        this.OkAlerts();
        this.LoadClients();
      } else {
        this.ErrorAlerts();
      }
    });
  }

}
