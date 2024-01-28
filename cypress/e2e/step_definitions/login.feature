Feature: Login

  Scenario Outline: Login Inválido Captcha
    Given Que o usuário está na página de login
    When ele informar as credências inválidas e o captcha "<username>","<password>","<captcha>" 
    Then e exibido um alerta do captcha "<error_message>"

    Examples:
      | username       | password       | captcha           | error_message                               |
      |                |                |                   | Por favor, digite o código do CAPTCHA.      |
      | 11111          |                |                   | Por favor, digite o código do CAPTCHA.      |
      |                | 11111          |                   | Por favor, digite o código do CAPTCHA.      |
      | 91358566021    | 123456787      |                   | Por favor, digite o código do CAPTCHA.      |
      | 91358566021    | 123456788      | 11111111111111111 | Atenção: Código do CAPTCHA Errado!          |
    
 Scenario Outline: Login Inválido
    Given Que o usuário está na página de login
    When ele informar as credências inválidas e o captcha é valido "<username>","<password>" 
    Then é exibido um alerta do captcha "<error_message>"

    Examples:
      | username       | password       | error_message                               |
      | 91358566021    | 123456788      | Essas credenciais não foram encontradas em nossos registros. |
      |                | 123456788      | O campo usuário é obrigatório. |
      | 91358566021    |                | O campo senha é obrigatório. |
      | 91358566020    | 123456711      | Essas credenciais não foram encontradas em nossos registros. |
      | 91358566441    | 123456789      | Essas credenciais não foram encontradas em nossos registros. |
      |111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111|111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111| Essas credenciais não foram encontradas em nossos registros. |
      |2736197832UGUEFEWˆ8FFWEJHF884GADHADAASDADHA |2736197832UGUEFEWˆ8FFWEJHF884GADHADAASDADHA | Essas credenciais não foram encontradas em nossos registros. |
  
   Scenario Outline: Comportamento tela de login
   Given Que o usuário esteja na tela de login
    When e informe as credenciais e deixe a tela "<username>","<password>" 
    Then a tela de login tem que apresentar o comportamento inicial
    Examples:  
    | username    | password  |  
    | 91358561120 | 123456729 | 

  Scenario Outline: Logar com credenciais validas
    Given Que o usuário esteja na página de login
    When ele informar as credenciais válidas "<username>","<password>" 
    Then deve acessar o sistema

  Examples:  
    | username    | password  |  
    | 91358566020 | 123456789 | 