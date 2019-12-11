create database Marketing;
use Marketing;

create table Local(
IdLocal int PRIMARY KEY auto_increment,
NombreLocal varchar(35),
ApellidoDue varchar(30),
NombreDue varchar(35),
Telefono varchar(10),
email varchar(30),
tipopago varchar(30)
);



create table Producto(
IdProducto int,
IdLocal int,
Producto varchar(20),
Precio decimal,
Descripcion varchar(50),
constraint Pk_IdProducto primary key(IdProducto),
constraint Fk_Producto_Local foreign key(IdLocal) references Local(IdLocal)
);