import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

 @Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  listUsuarios: Usuario[] = [
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},  
    {usuario : 'Rmaria', nombre: 'Maria', apellido: 'rojas', sexo: 'Femenino'},
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'jperez', nombre: 'Samuel', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'Rmaria', nombre: 'Maria', apellido: 'rojas', sexo: 'Femenino'},
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'jperez', nombre: 'Harvey', apellido: 'Perez', sexo: 'Masculino'},
  ]
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
