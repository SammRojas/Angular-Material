import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';

 @Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  listUsuarios:Usuario[]=[]
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource! : MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(
    private _usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  loadUsers():void{
    this.listUsuarios = this._usuarioService.getUsuario()
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }
  deleteUser(index:number):void{
    this._usuarioService.deleteUser(index)
    this.snackBar.open('Borrado exitosamente','',{
      duration : 4000,
      horizontalPosition:'center',
    verticalPosition: 'bottom'
    })
    this.loadUsers()
  }
}
