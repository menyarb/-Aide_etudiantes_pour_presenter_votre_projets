import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'app/model/Admin.model';
import { Categorie } from 'app/model/Categorie.model';
import { Client } from 'app/model/Client.model';
import { Condidat } from 'app/model/Condidat.model';
import { Offre } from 'app/model/Offre.model';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}
@Injectable({
  providedIn: 'root'
})

export class Chaja3niService {


  loginUserUrl="http://localhost:9090/api/admin/login";
  private apiurl = "http://localhost:9090/api";
  helper=new JwtHelperService();

  constructor(private http:HttpClient ) { }

//add
  addNewAdmin(admin :Admin): Observable<Admin>{
    return this.http.post<Admin>(this.apiurl + "/admin", admin, httpOptions) ;
  }
  addNewCondidat(condidat :Condidat): Observable<Condidat>{
    return this.http.post<Condidat>(this.apiurl + "/condidat", condidat, httpOptions) ;
  }
  addNewClient(client :Client): Observable<Client>{
    return this.http.post<Client>(this.apiurl + "/client", client, httpOptions) ;
  }

  addNewOffre(offre :Offre): Observable<Offre>{
    return this.http.post<Offre>(
      this.apiurl + "/offre", offre, httpOptions) ;
  }
  addNewCategorie(Categorie :Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(
      this.apiurl + "/categorie", Categorie, httpOptions) ;
  }
 
  
  //upload_image
  upload(formData:any): Observable<any>{
    return this.http.post(this.apiurl + "/categorie/upload", formData) ;
  }
  uploadOffre(formData:any): Observable<any>{
    return this.http.post(this.apiurl + "/offre/upload", formData) ;
  }
  uploadAdmin(formData:any): Observable<any>{
    return this.http.post(this.apiurl + "/admin/upload", formData) ;
  }
  uploadClient(formData:any): Observable<any>{
    return this.http.post(this.apiurl + "/client/upload", formData) ;
  }
  uploadCondidat(formData:any): Observable<any>{
    return this.http.post(this.apiurl + "/condidat/upload", formData) ;
  }
  //liste
  public listeadmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(
      this.apiurl + "/admin"
    );
  }

  public listeclient(): Observable<Client[]>{
    return this.http.get<Client[]>(
      this.apiurl + "/client"
    );
  }

 
  public listecategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(
      this.apiurl + "/categorie"
    );
  }
  public listeoffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(
      this.apiurl + "/offre"
    );
  }
  public listecondidat(): Observable<Condidat[]>{
    return this.http.get<Condidat[]>(
      this.apiurl + "/client"
    );
  }
  //delete
  public   deleteadmin(id:number):Observable<Admin>{
    return this.http.delete<Admin>(
      this.apiurl+"/admin/"+id,httpOptions);
     
  }

  public   deleteclient(idClient:number):Observable<Client>{
    return this.http.delete<Client>(
      this.apiurl+"/client/"+idClient,httpOptions);
     
  }
  public   deletecategorie(idCategorie:number):Observable<Categorie>{
    return this.http.delete<Categorie>(
      this.apiurl+"/categorie/"+idCategorie,httpOptions);
     
  }
  public   deleteoffre(idOffre:number):Observable<Offre>{
    return this.http.delete<Offre>(
      this.apiurl+"/offre/"+idOffre,httpOptions);
     
  }
  public   deletecondidat(id:number):Observable<Condidat>{
    return this.http.delete<Condidat>(
      this.apiurl+"/condidat/"+id,httpOptions);
     
  }
  //adminid
 getAdminById(id:number):Observable<Admin>{
    return this.http.get<Admin>(
      this.apiurl+"/admin/"+id, httpOptions);
  }
  getClientById(idClient:number):Observable<Client>{
    return this.http.get<Client>(
      this.apiurl+"/client/"+idClient, httpOptions);
  }

  getCategorieById(idCategorie:number):Observable<Categorie>{
    return this.http.get<Categorie>(
      this.apiurl+"/categorie/"+idCategorie, httpOptions);
  }
  
  getOffreById(id:number):Observable<Offre>{
    return this.http.get<Offre>(
      this.apiurl+"/offre/"+id, httpOptions);
  }
  getCondidatById(id:number):Observable<Condidat>{
    return this.http.get<Condidat>(
      this.apiurl+"/condidat/"+id, httpOptions);
  }
  //modifier

updateAdmin(admin : Admin) : Observable<Admin>{
  return this.http.put<Admin>(this.apiurl + "/admin" , admin , httpOptions)
}

updateClient(client : Client) : Observable<Client>{
  return this.http.put<Client>(this .apiurl + "/client" , client , httpOptions)
}

updateCategorie(categorie : Categorie) : Observable<Categorie>{
  return this.http.put<Categorie>(this.apiurl + "/categorie" , categorie , httpOptions)
}
updateOffre(offre: Offre) : Observable<Offre>{
  return this.http.put<Offre>(this.apiurl + "/offre" , offre , httpOptions)
}

updateCondidat(condidat: Condidat) : Observable<Condidat>{
  return this.http.put<Condidat>(this.apiurl + "/role" , condidat, httpOptions)
}
//authenticate
loginAdmin(admin:Admin){
  return this.http.post<any>(this.loginUserUrl, admin);
}

isLoggedIn(){

  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
//profil
/* enregistrement des donnes dans localstorage*/

/* on install le jwt avec la commande npm i @auth0/angular-jwt apres on l'import*/
saveDataProfil(token:any){
    
  //  let decodeToken= this.helper.decodeToken(token)
    
   localStorage.setItem('myToken',token)

  }
  userDetails(){
   let token:any=localStorage.getItem('myToken');
   let decodeToken= this.helper.decodeToken(token);
   decodeToken.data.Role = 'Admin'
       return decodeToken.data;
  }


}

