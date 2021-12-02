import React from 'react';

import Background from '../../components/background/background';
import Form from '../../components/form/form';

import './styled.css';

function LoginPage() {
    return (
        <div id="login_container" >
            <div id="login_wrapper">
                <div id="one">
                    <Background></Background>
                </div>
                <div id="two">
                    <Form>
                    </Form>
                    <div className="bottom_login">
                        <a className="link_toHome" href="/">Voltar para tela inicial</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;