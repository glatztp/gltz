# Security Policy

## 🔒 Versões Suportadas

Atualmente, oferecemos suporte de segurança para as seguintes versões da gltzUI:

| Versão | Suporte             |
| ------ | ------------------- |
| 2.x.x  | ✅ Suporte completo |
| 1.x.x  | ⚠️ Críticas apenas  |
| < 1.0  | ❌ Não suportado    |

## 🚨 Reportando Vulnerabilidades

A segurança da gltzUI é uma prioridade. Se você descobrir uma vulnerabilidade de segurança, por favor, reporte-a de forma responsável seguindo este processo:

### 📧 Como Reportar

**NÃO** crie uma issue pública para vulnerabilidades de segurança.

Em vez disso, envie um email para: **security@gltz.dev**

### 📋 Informações Necessárias

Inclua as seguintes informações em seu relatório:

1. **Descrição da vulnerabilidade**

   - Descrição detalhada do problema
   - Componentes afetados
   - Versões impactadas

2. **Passos para reproduzir**

   - Instruções claras para reproduzir
   - Código de exemplo (se aplicável)
   - Screenshots (se relevante)

3. **Impacto potencial**

   - Que tipo de ataque é possível?
   - Quais dados ou sistemas podem ser comprometidos?
   - Qual a severidade estimada?

4. **Informações do ambiente**
   - Versão da gltzUI
   - Versão do React
   - Navegador e versão
   - Sistema operacional

### ⏱️ Processo de Resposta

1. **Confirmação** (24-48 horas)

   - Confirmaremos o recebimento do seu relatório
   - Forneceremos um ID de rastreamento

2. **Investigação** (1-7 dias)

   - Nossa equipe investigará o problema
   - Podem solicitar informações adicionais

3. **Correção** (1-14 dias)

   - Desenvolveremos uma correção
   - Testaremos a solução
   - Prepararemos o patch de segurança

4. **Divulgação** (Após correção)
   - Lançaremos a correção
   - Publicaremos um advisory de segurança
   - Creditaremos você na descoberta (se desejar)

### 🎯 Escopo de Segurança

**Incluído no escopo:**

- ✅ Vulnerabilidades de XSS
- ✅ Injeção de código
- ✅ Bypass de validação
- ✅ Exposição de dados sensíveis
- ✅ Problemas de autenticação/autorização
- ✅ Vulnerabilidades de dependências

**Não incluído no escopo:**

- ❌ Problemas de usabilidade
- ❌ Bugs funcionais sem impacto de segurança
- ❌ Configurações incorretas do usuário
- ❌ Ataques que requerem acesso físico

### 🏆 Programa de Reconhecimento

Reconhecemos e agradecemos pesquisadores de segurança que reportam vulnerabilidades de forma responsável:

- **Hall of Fame** - Lista pública de colaboradores
- **Créditos** - Menção em changelogs e advisories
- **Badges** - Badges especiais em perfis GitHub
- **Certificados** - Certificados de reconhecimento

### 📞 Contato de Emergência

Para vulnerabilidades críticas que estão sendo exploradas ativamente:

- **Email**: emergency-security@gltz.dev
- **Telefone**: +55 (11) 99999-9999 (disponível 24/7)

### 🔐 Criptografia

Para relatórios sensíveis, você pode criptografar usando nossa chave PGP:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
[Chave PGP seria inserida aqui]
-----END PGP PUBLIC KEY BLOCK-----
```

### 📚 Recursos Adicionais

- [Guia de Segurança](./docs/security-guide.md)
- [Melhores Práticas](./docs/best-practices.md)
- [CVE Database](https://cve.mitre.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

**Última atualização**: Janeiro 2025  
**Versão da política**: 1.0
