  
import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Producto[]=[
    {id:1, nombre:"Aceite",precio:4.50,cantidad:8} ,
    {id:2, nombre:"Arroz",precio:2.50,cantidad:7} ,
    {id:3, nombre:"Leche",precio:3.10, cantidad:5} ,
    {id:4, nombre:"Azucar",precio:5.20, cantidad:6} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}