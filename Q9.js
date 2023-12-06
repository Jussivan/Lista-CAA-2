//Pesquisa1

/*Esta função divide o tamanho n em um terço a cada chamada recursiva. A cada chamada, é realizado um custo constante de n^3. Portanto, a função faz logaritmicamente log3(n) chamadas recursivas e cada uma delas tem um custo de n^3. Assim, a complexidade total desta função recursiva é O(n^3 * log n).*/

//Função Pesquisa2

/*Esta função também realiza chamadas recursivas descartando uma fração dos elementos, aproximadamente 2/5 a cada chamada. Como não há um número fixo de divisões, mas sim uma porcentagem fixa de descarte, podemos representar a complexidade como uma série geométrica. A complexidade é aproximadamente O(n log n).*/

//Pesquisa3

/*Esta função descarta uma fração dos elementos (aproximadamente 1/3) a cada chamada recursiva. Assim como no caso anterior, a complexidade pode ser representada como uma série geométrica, resultando em uma complexidade aproximada de O(n log n).*/

//Enigma1 e Enigma2

/*A função Enigma2 implementa uma versão modificada do algoritmo de ordenação QuickSort. Sua complexidade no pior caso é O(n^2) se os elementos estiverem muito desbalanceados, mas no caso médio e melhor caso é O(n log n).

A função Enigma1 chama Enigma2 e faz duas chamadas recursivas subsequentes, limitadas por m e n. No melhor caso, quando o QuickSort funciona de maneira eficiente, a complexidade é O(n log n). No pior caso, quando os elementos não são particionados de forma ideal, a complexidade é O(n^2).*/
