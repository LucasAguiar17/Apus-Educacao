Feature: Questões

Scenario Outline: Validar Excessões ao não informar nenhum dado
Given que o usuário está na página de cadastrar questões - Tipo questão e Titulo 
When ele não informa o tipo de questão e o titulo clicar no botão cadastrar questões "<acao>","<tipoQuestao>","<titulo>","<msnError>"
Then é exibido mensagens de alerta -tipo questão e titulo "<msnError>"

  Examples:
  |acao  | tipoQuestao                   | titulo                         |msnError                          |
  |1     | Selecione uma tipo de questão |                                |                                  |
  |2     | 1                             |                                |                                  |
  |3     | 1                             | Questão objetiva Teste         | Preencha o enunciado da questão! |



Scenario Outline: Validar Excessões ao não informar etapa

   Given que o usuário está na página de cadastrar questões - etapas 
   When ele não informa a etapa da questão e clicar no botão cadastrar questões "<tipoQuestao>","<titulo>","<enunciado>","<etapas>"
   Then é exibido mensagens de alerta -etapas "<msnError>"

Examples:
    | tipoQuestao | titulo                         | enunciado            |etapas              | msnError                                                                                              |
    | 1           | Questão objetiva Teste         | enunciado questão    |Selecione uma etapa | Atenção, é necessário a seleção de pelo menos 1 (uma) Habilidade BNCC ou de um dos Outros Currículos. |


Scenario Outline: Validar Excessões ao não informar anos faixa etária

   Given que o usuário está na página de cadastrar questões - anos faixa etária 
   When ele não informar anos faixa etária e clicar no botão cadastrar questões "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>"
   Then é exibido mensagens de alerta -etapas "<msnError>"

   Examples:
   | tipoQuestao    | titulo                    | enunciado            |etapas    | anosFaixaEtaria                  | msnError                                                                                              |
   | 1              | Questão objetiva Teste    | enunciado questão    | 1        | Selecione um ano / faixa etária  | Atenção, é necessário a seleção de pelo menos 1 (uma) Habilidade BNCC ou de um dos Outros Currículos. |

   


Scenario Outline: Validar Excessões ao não informar experiência

   Given que o usuário está na página de cadastrar questões - experiência 
   When ele não informar a experiência e clicar no botão cadastrar questões "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>"
   Then é exibido mensagens de alerta -experiência "<msnError>"

   Examples:
    | tipoQuestao | titulo                       | enunciado          |etapas      | anosFaixaEtaria  | campoExperiencia                         | msnError                                                                                             |
    | 1           | Questão objetiva Teste       |  enunciado questão |        1   |   1              |  Selecione um componente / campo de exp. | Atenção, é necessário a seleção de pelo menos 1 (uma) Habilidade BNCC ou de um dos Outros Currículos. |

   


Scenario Outline: Validar Excessões ao não informar habilidade BNCC

   Given que o usuário está na página de cadastrar questões - habilidade 
   When ele não informar a habilidade BNCC e clicar no botão cadastrar questões "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>"
   Then é exibido mensagens de alerta -habilidade "<msnError>"

   Examples:
  
   | tipoQuestao  | titulo                   | enunciado           |etapas  | anosFaixaEtaria   | campoExperiencia  | msnError                                                                                              |
   | 1            | Questão objetiva Teste   |  enunciado questão  |   1    |   1               |        1          | Atenção, é necessário a seleção de pelo menos 1 (uma) Habilidade BNCC ou de um dos Outros Currículos. |
   


Scenario Outline: Validar Excessões ao não adicionar habilidade BNCC

   Given que o usuário está na página de cadastrar questões - habilidade BNCC
   When ele não informar a habilidade BNCC e clicar no botão adicionar habilidade "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>"
   Then é exibido mensagens de alerta -habilidade "<msnError>"

   Examples:
     | tipoQuestao  | titulo                 | enunciado            |etapas   | anosFaixaEtaria | campoExperiencia |msnError                   |
     | 1            | Questão objetiva Teste | enunciado questão    |   1     |   1             |        1         |Selecione as habilidades!  | 
   

 

Scenario Outline: Validar Excessões ao não adicionar as alternativas

   Given que o usuário está na página de cadastrar questões - alternativas
   When ele não informar as alternativas e clicar no botão cadastrar "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>","<habilidade>"
   Then é exibido mensagens de alerta -habilidade "<msnError>"

   Examples:
     | tipoQuestao  | titulo                 | enunciado            |etapas   | anosFaixaEtaria | campoExperiencia | habilidade | msnError                                                    |
     | 1            | Questão objetiva Teste | enunciado questão    |   1     |   1             |        1         | EI01EO01   | As alternativas são obrigatórias para questões objetivas!   | 
   

  



Scenario Outline: Validar Excessões ao não adicionar duas alternativas

   Given que o usuário está na página de cadastrar questões - duas alternativas
   When ele não informar as duas alternativas e clicar no botão cadastrar "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>","<habilidade>","<alternativas>" 
   Then é exibido mensagens de alerta -habilidade "<msnError>"

   Examples:
     | tipoQuestao    | titulo                  | enunciado           |etapas   | anosFaixaEtaria  | campoExperiencia  | habilidade | alternativas               | msnError                                                           |
      | 1              | Questão objetiva Teste  |  enunciado questão  |   1     |   1              |        1          | EI01EO01   | essa é a primeira opção A | Você deve enviar pelo menos 2 alternativas para questões objetivas!|




 
Scenario Outline: cadastro da questão objetiva com sucesso

   Given que o usuário está na página de cadastrar questões
   When ele informma todos os dados para a questão do tipo objetiva e clicar no botão cadastrar "<tipoQuestao>","<titulo>","<enunciado>","<etapas>","<anosFaixaEtaria>","<campoExperiencia>","<habilidade>","<alternativas>","<alternativas2>" 
   Then a questão é cadastrada com sucesso "<msnError>","<tipoQuestao>","<titulo>"

   Examples:
      | tipoQuestao    | titulo                  | enunciado           |etapas   | anosFaixaEtaria  | campoExperiencia  | habilidade | alternativas   | alternativas2    | msnError                      |
      | 1              | Questão objetiva Teste  |  enunciado questão  |   1     |   1              |        1          | EI01EO01   | opção positiva |  opção negativa  |Questão cadastrada com sucesso!|
