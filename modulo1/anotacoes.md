
### Aula 1: O que é Typescript?

- Linguagem de programação feita pela Microsoft
- Baseada em javascript
- Não roda diretamente no navegador (precisa ser convertido para javascript p/ rodar)
- Serve para prevê erros
- Código mais seguro e limpo
- Tipagem do javascript

### Aula 3 e 4: Instalando e usando o Typescript parte 1 e 2
Para compilar o código typescript em javascript:
```
tsc caminho_do_arquivo_em_typescript --outDir caminho_onde_o_js_deve_ficar
```
Ex:
```
tsc .\src\script.ts --outDir public
```

Nesse exemplo o js será gerado na mesma pasta do ts:
```
tsc .\src\script.ts
```

### Aula 5: Aviso sobre o processo de compilação

Existe uma forma de automatizar a conversão do typescript para o javascript que
irá ser mostrado em outro módulo

