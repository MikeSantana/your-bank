import React from 'react';
import UIButton from '../Button/button';

import './styled.css';

const Form = () => {
    return (
        <div className="user-login">
            <h1 className="user-login__title asignIn_title font">Fazer Cadastro</h1>
            <form className="form_login" autoComplete="nope" >
                <div className="user-login__form-control">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" placeholder="cliente@YouBank.com" type="text" name="email" autoComplete="off" />
                </div>
                <div className="user-login__form-control">
                    <label htmlFor="CPF">CPF</ label>
                    <input id="CPF" placeholder="123.456.678-91" type="password" name="password" />
                </div>
                <div className="user-login__form-control">
                    <label htmlFor="password">Senha</ label>
                    <input id="password" placeholder="*******************" type="password" name="password" />
                </div>
                <div className="btn_login">
                <UIButton id="btn_login" >Cadastrar-se  </UIButton>
                </div>
            </form>
            
        </div>
    );
};

export default Form;