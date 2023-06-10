const LoginComponent = () =>{
    return(
        <>

<body>
  <h2 className="text-4xl font-bold uppercase">Inicio de Sesión</h2>
  <form method="POST" action="/login">
    <div>
      <label for="email">Correo electrónico:</label>
      <input type="email" required/>
    </div>
    <div>
      <label for="password">Contraseña:</label>
      <input type="password" required/>
    </div>
    <button type="submit">Iniciar sesión</button>
  </form>
</body>

    
        </>
    )
}

export default LoginComponent;