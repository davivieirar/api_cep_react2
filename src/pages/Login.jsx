import React, { useState } from 'react'

export const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('submit')
        if(login.email === 'adm@teste' && login.senha === '123'){
            console.log('vai pra home')
            navigate('/home')
        }else{
            alert(`Usuário ou senha inválido`)
        }
        
    }


    const [login, setLogin] = useState({});
    // getEmailByID = () => {
    //     let emailValor = document.getElementById(floatingInput).value;
    //     console.log(emailValor);
    // }
  return (
    <main className="form-signin w-100 m-auto">
  <form onSubmit={handleLogin}>
    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <input 
          type="email" 
          className="form-control" 
          id="email"
          placeholder="name@example.com"
          value={login.email || ""}
        />

     

    <input 
          type="password" 
          className="form-control" 
          id="senha"
          placeholder="Senha"
          value={login.senha || ""}
        />

     

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form>
</main>

  );
};
