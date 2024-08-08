# HTML-CSS-Basic

px (pixels): O pixel é uma unidade de medida fixa e absoluta. 1 pixel é a menor unidade de exibição em uma tela. No entanto, ele não é tão flexível quanto unidades relativas para criar designs responsivos.

rem = 'root em' = tamanhos relativos com base no tamanho da fonte do elemento raiz.  exemplo de rem: se no HTML a fonte é 16px, então 1rem é igual a 16px, 2 rem é igual a 32px, etc.

em: Similar ao rem, mas em vez de ser relativo ao tamanho da fonte do elemento raiz, é relativo ao tamanho da fonte do elemento pai (o código que estiver cobrindo o seu). Por exemplo, se um elemento pai tem um tamanho de fonte de 20px, 1em será igual a 20px.

% (porcentagem): Usada principalmente para definir larguras e alturas em relação ao tamanho de seu elemento pai. Por exemplo, se você definir width: 50% para um elemento filho, ele ocupará metade da largura do elemento pai.

vw (viewport width): Essa unidade é relativa à largura da janela de visualização (viewport). 1vw é igual a 1% da largura da janela.

vh (viewport height): Similar ao vw, mas relativo à altura da janela de visualização. 1vh é igual a 1% da altura da janela.

vmin e vmax: Essas unidades também são relativas à viewport, mas levam em consideração a menor (vmin) ou a maior (vmax) dimensão da janela. Por exemplo, 1vmin é igual a 1% da menor dimensão (largura ou altura) da janela.

cm, mm, in, pt, pc: Unidades absolutas de medidas físicas. cm representa centímetros, mm milímetros, in polegadas, pt pontos (1/72 de polegada) e pc picas (1/6 de polegada). No entanto, essas unidades não são muito usadas na web devido à variação nas telas e dispositivos.

ex: Essa unidade é relativa à altura do caractere "x" da fonte do elemento pai. Geralmente é menor que em e rem.

# Pseudo-Classes:

As pseudo-classes são utilizadas para aplicar estilos a elementos em estados específicos ou em interações do usuário.

:hover: Aplica estilos quando o cursor do mouse está sobre o elemento.

:active: Aplica estilos quando o elemento está sendo clicado.

:focus: Aplica estilos quando o elemento está focado, geralmente usado em elementos interativos como links e campos de formulário.

:visited: Aplica estilos a links que já foram visitados pelo usuário.

:nth-child(n): Seleciona elementos que são o enésimo filho de seu elemento pai. Por exemplo, :nth-child(odd) seleciona os elementos ímpares.

:nth-of-type(n): Funciona de maneira semelhante ao nth-child, mas considera o tipo do elemento.

:first-child: Seleciona o primeiro elemento filho de seu elemento pai.

:last-child: Seleciona o último elemento filho de seu elemento pai.

:not(selector): Seleciona elementos que não correspondem a um determinado seletor.

:checked: Aplica estilos a elementos de entrada (input) do tipo "checkbox" ou "radio" que estejam marcados.

:disabled: Aplica estilos a elementos de entrada (input), botões ou outras partes do formulário que estão desabilitados.

:enabled: Aplica estilos a elementos de entrada (input), botões ou outras partes do formulário que estão habilitados.

:nth-last-child(n): Funciona como :nth-child, mas contando a partir do final.

:only-child: Seleciona elementos que são filhos únicos de seu elemento pai.

:nth-of-type(n): Seleciona elementos com base na posição de seu tipo entre os irmãos.

:first-of-type: Seleciona o primeiro elemento do seu tipo entre os irmãos.

:last-of-type: Seleciona o último elemento do seu tipo entre os irmãos.

