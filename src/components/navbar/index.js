import React, { useEffect } from 'react';
import Menu from '../menu';
import './style.css';

export default () => {
	useEffect(() => {
		var elems = document.querySelectorAll('.sidenav');
		window.M.Sidenav.init(elems);
	});

	return (
		<React.Fragment>
			<nav aria-labelledby="whatssystem" >
				<div className="nav-wrapper flex">
					<a href="#!" className="brand-logo">
						<img src="assets/img/contraloria.png" alt="Secretaría de Contraloría" />
					</a>
					<a aria-label="Menu" href="#!" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<div className="hide-on-med-and-down spacer"></div>
					<ul class="right hide-on-med-and-down">
						<li>
							<a aria-label="Ir al buscador avanzado" href="#!">
								<i className="material-icons">search</i>
							</a>
						</li>
						<li><a aria-label="Iniciar sesion" href="#!">Login</a></li>
					</ul>
				</div>
			</nav>

			<Menu.Drawer />
		</React.Fragment>
	);
}
