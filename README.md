

<p align="center">
  <img width="200" src="#">
</p>

<p align="center">
  <img  src="https://user-images.githubusercontent.com/47900225/98261991-d9216580-1f63-11eb-986a-6bc70ccbca66.png">
</p>

 <p align="center">
    <a href="#RemoteCarAccess_about">Sobre</a> • 
    <a href="#RemoteCarAccess_techs">Tecnologias</a> • 
    <a href="#RemoteCarAccess_install">Instalação</a> • 
    <a href="#RemoteCarAccess_ref">Referências</a> •
   <a href="#RemoteCarAccess_ref">Demo</a>
    <h3 align="center">INTERFACE WEB DO PROJETO REMOTE CAR ACCESS</h3>

  <p align="center">
    Interface web para visualizar e enviar comandos via wifi para dois protótipos de carro localizados em cidades diferentes.   
  </p>


## :pushpin: Sobre
<p id="RemoteCarAccess_about">
   O projeto Remote Car Access é um sistema teleoperação robótica para controlar dois protótipos carros utilizando o protocolo MQTT e o módulo ESP8266. Esse projeto foi desenvolvido em grupo como requisito avaliativo da disciplina Projetos de Sistemas Mecatrônicos II da Escola de Engenharia de São Carlos - USP. No intuito de deixar a experiência mais criativa, desenvolvi uma interface web para interagir com os protótipos que estão incialmente, em cidades diferentes. A interface é baseada num controle de Nintendo Switch e os comandos são enviados para os carros através de cada um dos Joy-cons. No monitor serão exibidas duas lives simultâneamente, no dia da apresentação final.
</p>

## :pushpin: Tecnologias
<ul id="RemoteCarAccess_techs">
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li> 
    <li>MQTT</li> 
</ul>  

## :pushpin: Instalação
<p id="RemoteCarAccess_install">

• Para utilizar as funcionalidades dessa interface é necessário baixar os arquivos ou clonar esse repositório:

`git clone https://github.com/4ngelica/INTERFACE-RemoteCarAccess.git `

• Certifique-se de que os arquivos permaneçam dentro da mesma pasta.

• Abra o arquivo <b>index.html</b> em qualquer editor para alterar as propriedades <i>value="seuTopicoPublish"</i> e <i>value="seuTopicoSubscribe"</i> <b>(Esse passo é MUITO IMPORTANTE. Caso não altere essas propriedades, a chance de acessar a nodeMCU de outra pessoa é grande).</b>

Se você deseja reproduzir o projeto completo, acesse a seção de instalação do repositório <a href="https://github.com/4ngelica/ESP-MQTT-RemoteCarAccess">ESP-MQTT-RemoteCarAccess</a>, que fornece detalhadamente os componentes necessários, desenhos esquemáticos, projetos mecânicos, eletrônicos, bibliotecas necessárias e demais arquivos.</p>

## :pushpin: Referências
<p id="RemoteCarAccess_ref">
 • Artigo: <a href="https://www.filipeflop.com/blog/controle-monitoramento-iot-nodemcu-e-mqtt/ ">Controle e Monitoramento IoT com NodeMCU e MQTT</a> 
 • Repositório: <a href="https://github.com/filipeflop/Interface-Web-MQTT">Interface-Web-MQTT</a>

</p>

<footer>
    <hr></hr>
<p align="center">
Made with :heart: by Angélica Batassim
</p>
</footer> 
