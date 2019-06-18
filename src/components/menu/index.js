import React from 'react';
import './style.css';

function Menu() {
	return (
		<div aria-label="Secciones del sistema" className="hide-on-med-and-down collection menu-custom">
			<a href="#!" className="collection-item">Normatividad</a>
			<a href="#!" className="collection-item">Programas Anuales</a>
			<a href="#!" className="collection-item">Programas de Contratación</a>
			<a href="#!" className="collection-item">Proveedores Vigentes</a>
			<a href="#!" className="collection-item">Información de Ayuda</a>
		</div>
	);
}

function Drawer() {
	return (
		<ul className="sidenav" id="mobile-demo">
			<li><a aria-hidden="true" href="#!">Normatividad</a></li>
			<li><a aria-hidden="true" href="#!">Programas Anuales</a></li>
			<li><a aria-hidden="true" href="#!">Programas de Contratación</a></li>
			<li><a aria-hidden="true" href="#!">Proveedores Vigentes</a></li>
			<li><a aria-hidden="true" href="#!">Información de Ayuda</a></li>
		</ul>
	);
}

Menu.Drawer = Drawer;

export default Menu;