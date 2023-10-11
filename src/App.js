import React, { useState } from "react";
import "./styles.css";
import img from "react-image";
import foto from "./undraw_predictive_analytics_re_wxt8.svg";

function ConfirmarSenha() {
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="container">
      <div className="form-image">
        <object data="./undraw_predictive_analytics_re_wxt8.svg"></object>
      </div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Digite sua nova senha</h1>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="senha">Nova senha</label>
            <input
              placeholder="Digite sua senha"
              required
              id="senha"
              type="password"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="confirmaSenha">Confirme sua nova senha</label>
            <input
              placeholder="Digite sua nova senha"
              required
              id="confirmaSenha"
              type="password"
              name="confirmaSenha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </div>
          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmarSenha;
