import React from 'react';
import '../login/styled.css';

import AsignIn from '../../components/asignIn/asignIn';
import Form2 from '../../components/form/form2';

function RegisterPage() {
    return (
        <div id="login_container" >
        <div id="login_wrapper">
        <div id="one">
            <AsignIn></AsignIn>
        </div>
        <div id="two">
            <Form2>
            </Form2>
            <div className="bottom_login">
            <a  className="link_toHome" href="www.google.com">Voltar para tela inicial</a>
            </div>
        </div>
        </div>
    </div>
    );

}
export default RegisterPage;