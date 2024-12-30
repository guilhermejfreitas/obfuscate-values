# ObfuscateValues

🚀 **ObfuscateValues** é uma biblioteca poderosa que facilita a ofuscação de valores sensíveis em objetos, aplicando regras personalizadas. Ela é ideal para esconder informações críticas de logs ou exibições, protegendo a privacidade dos dados! 🔒

---

## ✨ **Características**

- 📜 Regras personalizáveis para ofuscar valores de atributos específicos.
- 🤖 Ofuscação automática com base nas configurações fornecidas.
- 🛡️ Segurança aprimorada para evitar vazamento de informações sensíveis.

---

## 💻 **Instalação**

Adicione a biblioteca ao seu projeto:

```bash
npm install obfuscate-values
```

---

## ⚙️ **Como usar**

Abaixo está um exemplo prático de como utilizar a biblioteca para proteger informações sensíveis:

```javascript
const obj = {
    email: 'guilherme@dev.com',
    password: '123456789'
};

const ObfuscateValues = require('obfuscate-values');

const obfuscateValues = new ObfuscateValues({
    obfuscate_attrs: ['email', 'password'],
    rules: {
        email: {
            everything_before: '@',
            change_to: '*'
        }
    }
});

console.log(obfuscateValues.obfuscate(obj));
```

**Saída esperada:**

```javascript
{
    email: '*@dev.com',
    password: '***'
}
```

---

## 📋 **Explicação do exemplo**

1. Criamos um objeto com informações sensíveis:
   ```javascript
   const obj = {
       email: 'guilherme@dev.com',
       password: '123456789'
   };
   ```

2. Configuramos o **ObfuscateValues**:
   - `obfuscate_attrs`: define quais atributos devem ser ofuscados.
   - `rules`: especifica as regras de ofuscação para cada atributo.

   Neste caso:
   - Para o atributo `email`, tudo antes do caractere `@` será substituído por `*`.
   - O atributo `password` será completamente ofuscado por `***` (regra padrão).

3. Chamamos o método `obfuscate(obj)` para aplicar as regras ao objeto e retornamos um novo objeto com os valores ofuscados.

## 📚 **Documentação Completa**

### **Configuração Base**

- **`obfuscate_attrs`** *(array)*: Lista de atributos a serem ofuscados no objeto.
- **`rules`** *(object)*: Regras de ofuscação aplicadas aos atributos. Cada chave deve corresponder a um atributo listado em `obfuscate_attrs`.

### **Regras Disponíveis**

- `everything_before`: Substitui tudo antes de um caractere especificado.
- `everything_after`: Substitui tudo depois de um caractere especificado.
- `change_to`: Define o caractere a ser usado para substituição (opcional).

---

## 📜 **Licença**

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

**💡 Dica:** Experimente a biblioteca agora mesmo e torne seus logs mais seguros! 🔐
