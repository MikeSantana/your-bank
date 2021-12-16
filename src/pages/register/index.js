import React from 'react';
import '../login/styled.css';

import Background from '../../components/background/background.jsx';
import Text from '../../components/text/text.js';
import Form2 from '../../components/form/form2';

function RegisterPage() {
    return (
        <div id="login_container" >
            <div id="login_wrapper">
                <div id="one">
                <Background>
                        <Text />
                    </Background>
                </div>
                <div id="two">
                    <Form2>
                    </Form2>
                    <div className="bottom_login">
                        <a className="link_toHome" href="/">Voltar para tela inicial</a>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default RegisterPage;