Feature: Mensagens

Scenario: Exibir página de mensagens
    Given que o usuário está logado 
    When ele clicar no menu Mensagens 
    Then é exibida a tela de mensagens 

    Scenario Outline: Validar Model de pesquisa
    Given que o usuário clique na pesquisa
    When ele não informar nenhum usuário para pesquisa 
    Then ele deve receber mensagens de alerta "<msg_Error>"
   
     Examples:  
    | msg_Error                                     |
    | Parece que nenhum contato foi selecionado...  |


    Scenario Outline: Validar comportamento de um contato que não existe   
    Given que na consulta de contatos 
    When o contado não existe "<contato>"
    Then não é exibido nenhum contato "<msg_Error>"
      Examples:  
    | contato                | msg_Error                                     |
    | Fernando Fulano Silva  | Parece que nenhum contato foi selecionado...  |

    Scenario Outline: Validar últimas interaçoes de um contato que existe   
    Given que na consulta de contatos
    When o contado for selecionado "<contato>"
    Then é exibida as útimas interações contato
    Examples:  
    | contato   |
    | Anderson  |


 Scenario Outline: Não enviar arquivo para o contato   
    Given que na tela de mensagens
    When não selecioar uma arquivo "<contato>"
    Then é exibiba uma mensagem de erro "<msg_Error>"
    Examples:  
    | contato   | msg_Error                               |
    | Anderson  | Você não anexou nenhum arquivo válido!  |

  


   