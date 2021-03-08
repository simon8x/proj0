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

	state = {
		user:{}
	};

	recibirFormulario = (e) => {
		e.preventDefault(); /*bloquea acción por defecto en este caso el envío del formulario y recarga de la página*/

		var genero = 'hombre';

		if(this.generoHombreRef.current.checked){
			genero = this.generoHombreRef.current.value;
		}else if(this.generoMujerRef.current.checked){
			genero = this.generoMujerRef.current.value;
		}else { 
			genero = this.generoOtroRef.current.value;
		}
		
		var user = {
			nombre:this.nombreRef.current.value,
			apellidos:this.apellidosRef.current.value,
			bio:this.bioRef.current.value,
			genero:genero
		}

		this.setState({
			user:user
		});

		console.log( "Formulario Enviado !");
		console.log( user );

	}


	render() {

		if(this.state.user.nombre){
			var user = this.state.user;
		}


		return (
			<div>
				<div className="contenido">

					<h2> FORMULARIO</h2>

					{/* mostrar datos recibidos desde el form */}

					{this.state.user.nombre &&
						<div id="userdata">
							<p>Nombre : <strong> { user.nombre } </strong></p>
							<p>Apellidos : <strong> { user.apellidos } </strong></p>
							<p>Bio : <strong> { user.bio } </strong></p>
							<p>Género = <strong> { user.genero } </strong></p>
						</div>


					}


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