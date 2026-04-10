<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style type="text/css">@import url("css/config_ini.css");</style>
    <style type="text/css">@import url("css/cadastro.css");</style>

    <link rel="shortcut icon" type="image/x-icon" media="all" href="images/favicon.png" />

    <title>Marisa - Cadastro</title>
</head>
<body>
    <!-- Inicio - Importa Topo -->
    <?php include("includes/topo.php");?>
    <!-- Fim - Importa Topo -->

    <!-- Inicio - Cadastro -->




    <div class="cadastro">
        <div class="cadastro_box">
        
            <div class="cadastro_box1">
                <form action="" method="" class="form1">
                    <h3>Quer se cadastrar?</h3>
                    <label>Por favor preencha os campos abaixo, vai ser rapidinho</label>

                    <div class="box_form">
                        <span><input type="radio" name="pessoa" class="inp_radio" />Pessoa Física</span>
                        <span><input type="radio" name="pessoa" class="inp_radio" />Pessoa Jurídica</span>
                    </div>

                    <div class="box_form">
                        <b>Nome completo *</b>
                        <input type="text" name="login" placeholder="Informe seu nome" class="inp_cad" />
                    </div>

                    <div class="box_form">
                        <div class="box_form_nasc">
                            <b>Data de nescimento*</b>
                            <input type="text" name="dtnasc" placeholder="00/00/0000" class="inp_cad" />
                        </div>
                        <div class="box_form_cpf">
                            <b>CPF *</b>
                            <input type="text" name="login" placeholder="000.000.000-00" class="inp_cad" />
                        </div>
                    </div>

                    <div class="box_form">
                        <b class="subtit1">Gênero *</b>
                        <span><input type="radio" name="genero" class="inp_radio" />Masculino</span>
                        <span><input type="radio" name="genero" class="inp_radio" />Feminino</span>
                        <span><input type="radio" name="genero" class="inp_radio" />Não informar</span>
                    </div>

                    <div class="box_form">
                        <div class="box_form_ddd1">
                            <b>DDD *</b>
                            <input type="text" name="ddd1" placeholder="(00)" class="inp_cad" />
                        </div>
                        <div class="box_form_celular">
                            <b>Celular *</b>
                            <input type="text" name="celular" placeholder="0000 - 0000" class="inp_cad" />
                        </div>
                        <div class="box_form_ddd2">
                            <b>DDD *</b>
                            <input type="text" name="ddd2" placeholder="(00)" class="inp_cad" />
                        </div>
                        <div class="box_form_tel">
                            <b>Telefone *</b>
                            <input type="text" name="tel" placeholder="0000 - 0000" class="inp_cad" />
                        </div>
                    </div>
                    
                </form>
            </div>

            <div class="cadastro_box2"></div>

        </div>
    </div>
    <!-- Fim - Cadastro -->

    <!-- Inicio - Importa Rodape -->
    <?php include("includes/rodape.php");?>
    <!-- Fim - Importa Rodape -->

</body>
</html>