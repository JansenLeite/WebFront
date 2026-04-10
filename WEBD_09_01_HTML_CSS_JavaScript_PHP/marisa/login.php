<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style type="text/css">@import url("css/config_ini.css");</style>
    <style type="text/css">@import url("css/login.css");</style>

    <title>Marisa - Login</title>
</head>
<body>
    <!-- Inicio - Importa Topo -->
    <?php include("includes/topo.php");?>
    <!-- Fim - Importa Topo -->

    <!-- Inicio - Login -->
    <div class="login">
        <form action="" method="" class="formulario">
            <h3>Faça seu login</h3>
            <label>E-mail ou CPF *</label>
            <input type="text" name="login" placeholder="Informe e-mail ou CPF" class="inp_login" />

            <label>Senha *</label>
            <input type="text" name="senha" placeholder="Informe senha" class="inp_login"/>

            <a href="" class="link_esqueceu">Esqueceu sua senha?</a>

            <input type="submit" value="Entrar" class="bt_entrar" />

            <b>Ainda não tem um cadastro? <a href="">Crie sua conta</a></b>
        </form>
    </div>
    <!-- Fim - Login -->

    <!-- Inicio - Importa Rodape -->
    <?php include("includes/rodape.php");?>
    <!-- Fim - Importa Rodape -->

</body>
</html>