import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:Usuario[]=[
  {id:1, nomuser:"Jonas",clave:"123"} ,
  {id:2, nomuser:" Ana",clave:"456"} ,
  {id:3, nomuser:"Maria",clave:"5565"} ,
  {id:4, nomuser:"Lucas",clave:"999"} 
]


  constructor() { }

  ngOnInit(): void {
  }

}