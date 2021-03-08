import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './sidebar';

class Formulario extends Component{

	nombreRef = React.createRef();
	apellidosRef = React.createRef();
	bioRef = React.createRef();
	generoHombreRef = React.createRef();
	generoMujerRef = React.createRef();
	generoOtroRef = React.createRef();

	recibirFormulario = (e) => {
		e.preventDefault(); /*bloquea acción por defecto en este caso el envío del formulario y recarga de la página*/
		console.log( "Formulario Enviado !");
		console.log( this.nombreRef.current.value );
		console.log( this.apellidosRef.current.value );
		console.log( this.bioRef.current.value );

	}


	render() {

		return (
			<div>
				<div className="contenido">

					<h2> FORMULARIO</h2>

					<form className="mid-form" onSubmit={this.recibirFormulario}>
						<div className="form-group">
							<label htmlFor="nombre">Nombre</label>
							<input type="text" name="nombre" ref={this.nombreRef} />
						</div>

						<div className="form-group">
							<label htmlFor="apellidos">Apellidos</label>
							<input type="text" name="apellidos" ref={this.apellidosRef} />
						</div>

						<div className="form-group">
							<label htmlFor="bio">Biografía</label>
							<textarea type="text" name="bio" ref={this.bioRef} />
						</div>

						<div className="form-group radiobuttons">
							<input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
							<input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
							<input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
						</div>
						
						<div className="cleaner"></div>

						<input type="submit" value="Enviar" className="btn btn-success" />


					</form>

				</div>

				<div className="aside">
					<Sidebar
						blog="false"
					/>
				</div>


			</div>
		)
	}
}

export default Formulario