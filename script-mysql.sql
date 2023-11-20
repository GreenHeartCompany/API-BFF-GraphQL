CREATE TABLE plano (
    id_plano INT AUTO_INCREMENT PRIMARY KEY,
    titulo_plano VARCHAR(45),
    descricao VARCHAR(100),
    tempo_duracao INT,
    valor DECIMAL(5, 2)
);

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(60),
    senha VARCHAR(150),
    nome VARCHAR(60),
    telefone CHAR(11),
    tipo_usuario VARCHAR(25) CHECK (
        tipo_usuario IN ('VOLUNTARIO', 'EMPRESA', 'ADMINISTRADOR')
    ),
    cnpj CHAR(14),
    cpf CHAR(11),
    dt_nasc DATE,
    fk_plano INT,
    data_adesao DATE,
    data_expiracao DATE,
    ativo BIT,
    FOREIGN KEY (fk_plano) REFERENCES plano(id_plano)
);

CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(60),
    cep CHAR(8),
    numero INT,
    complemento VARCHAR(45),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE publicacao (
    id_publicacao INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45),
    descricao TEXT,
    tipo_acao VARCHAR(40),
    total_hr_trabalho TIME,
    categoria_trabalho VARCHAR(35),
    nome_organizador VARCHAR(45),
    email_organizador VARCHAR(60),
    tel_organizador VARCHAR(60)
);

CREATE TABLE acaoSocial (
    data_hora DATETIME,
    fk_usuario INT,
    fk_publicacao INT,
    fk_endereco INT,
    PRIMARY KEY (fk_usuario, fk_publicacao),
    FOREIGN KEY (fk_endereco) REFERENCES endereco(id_endereco),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (fk_publicacao) REFERENCES publicacao(id_publicacao)
);

CREATE TABLE beneficio (
    id_beneficio INT,
    alimentacao BIT,
    hospedagem BIT,
    transporte BIT,
    fk_publicacao INT,
    PRIMARY KEY (id_beneficio, fk_publicacao),
    FOREIGN KEY (fk_publicacao) REFERENCES publicacao(id_publicacao)
);