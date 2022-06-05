// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1 = {} as Humano;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz

let pessoa2 = {} as Humano;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Padeiro;

let pessoa3:Humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4 : Humano= {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};