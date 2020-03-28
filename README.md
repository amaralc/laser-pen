# Laser Pen

Projeto desenvolvido para disciplina Fundamentos de Visão Computacional, ministrada por Armando Albertazzi na Pós-graduação em Engenharia Mecânica da UFSC.

O projeto consiste em desenvolver um sistema que capture em tempo real o vídeo to trajeto de um laser pointer sobre uma superfície e desenhe o caminho na tela.

Os demais requisitos serão melhor registrados aqui em outro momento.

# Desenvolvimento

O projeto se encontra em desenvolvimento e na data deste commit (28/03/2020) tem capacidade para reconhecer pixels com tom de vermelho acima de um threshold determinado.

Para rodar o projeto você precisa ter `NodeJS` e o gerenciador de pacotes `Yarn` instalados em seu computador. Siga os passos abaixo para rodar o projeto e visualizar o resultado.

* Instale **NodeJS** em seu computador;
* Instale o gerenciador **Chocolatey** (https://chocolatey.org/docs/installation);
  * Abra o cmd e cole o comando:

   ```@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"```

* Instale o gerenciador **Yarn** em seu computador (https://classic.yarnpkg.com/en/docs/install#windows-stable);
  * Abra o cmd e cole o comando: `choco install yarn` ;

* Faça o download do projeto utilizando git ou executando o download do arquivo zip;
* Vá até o diretório onde se encontra o projeto utilizando o cmd;
* Rode o comando `yarn` para instalar as bibliotecas necessárias;
* Rode o comando `yarn dev` para inicializar o servidor na porta `3333`;
* Abra um navegador (ex.: Chrome), digite `localhost:3333` na barra do navegador e aperte `Enter`;

Seu navegador pedirá acesso à sua webcam e o projeto será inicializado.

* Escolha um objeto vermelho, bem iluminado, ou um laser pointer;
* Vire a webcam para a parede e faça um desenho na mesma região da parede utilizando o pointer ou o objeto vermelho bem iluminado;

O projeto ainda está em desenvolvimento e podem haver bugs no processo. Fique à vontade para sugerir modificações.


# Referencias

* P5 - Load video, manipulate pixels and draw to canvas, https://p5js.org/examples/dom-video-pixels.html
* Image moments, https://www.youtube.com/watch?v=AAbUfZD_09s
* Image moments - Formulas, https://youtu.be/AAbUfZD_09s?t=186

