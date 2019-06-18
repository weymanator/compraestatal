import React from 'react';
import './style.css';

export default () => (
	<div className="row">
		<div className="col s12 m6">
			<div className="card" aria-labelledby="whatssystem">
				<div className="card-content">
					<span className="card-title left-align">¿Qué es este sistema?</span>
					<p id="whatssystem" className="justify-text">
						En este portal encontraras información acerca de adquisiciones, arrendamientos y servicios de la
						administración Pública de cada unidad compradora. Este portal facilita la operación de los
						procedimientos de contratación con transparencia y agilidad y, asimismo, permite darles
						seguimiento desde la publicación de la convocatoria hasta el fallo correspondiente.
					</p>
				</div>
			</div>
		</div>
		<div className="col s12 m6">
			<div className="card left-align">
				<div className="card-content">
					<span className="card-title">Enlaces utiles</span>
					<div class="collection">
						<a href="#!" class="collection-item">Programas Anuales</a>
						<a href="#!" class="collection-item">Procedimientos de contratación</a>
						<a href="#!" class="collection-item">Actas de las juntas de aclaraciones</a>
						<a href="#!" class="collection-item">información de contratos</a>
						<a href="#!" class="collection-item">Dictámenes de selección de propuesta</a>
						<a href="#!" class="collection-item">Seguimiento</a>
						<a href="#!" class="collection-item">Registrarte como proveedor</a>
						<a href="#!" class="collection-item">Participar en procedimientos de contratación</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
