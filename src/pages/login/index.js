import React from 'react';

import AsignIn from '../../components/asignIn/asignIn';
import Form from '../../components/form/form';

import './styled.css';

function LoginPage() {
    return (
        <div id="login_container" >
            <div id="login_wrapper">
            <div id="one">
                <AsignIn></AsignIn>
            </div>
            <div id="two">
                <Form>
                </Form>
                <div className="bottom_login">
                <a  className="link_toHome" href="www.google.com">Voltar para tela inicial</a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;