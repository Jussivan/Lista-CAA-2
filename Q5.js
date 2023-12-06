//Algoritmo 1

sum = 0;
for (int i = 0; i < n; i++) {
	for (int j = 1; j <= n; j++) {
		sum++;
        }
}

/*O loop externo executa n vezes e, para cada iteração do loop externo, o laço interno também executa n vezes. Portanto, o custo total é O(n^2).*/

//Algoritmo 2

sum = 0;
for (int i = 1; i < n; i *= 2) {
	for (int j = 1; j <= n; j++) {
		sum++;
	}
}

/*No loop externo executa log2(n) vezes, pois i dobra a cada iteração até atingir n, já o laço interno executa n vezes. Portanto, o custo total é O(n log n).*/

//Algoritmo 3

sum = 0;
for (int i = 0; i < n; i *= 2) {
	for (int j = 1; j <= n; j += i) {
		sum++;
	}
}

/*O loop externo executa log2(n) vezes, pois i dobra a cada iteração até atingir n, já o loop interno executa n / i vezes. Portanto, o custo total é O(n log n).*/
