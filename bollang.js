// 🚀 BolLang: A Simple JavaScript-Based Custom Language
// CDN-Ready, Funny Yet Functional Programming Language

(function () {
  const scripts = document.querySelectorAll('script[type="text/bollang"]');

  scripts.forEach(script => {
    let code = script.textContent;

    // 💡 Transpile custom keywords to JavaScript
    code = code
      // Print
      .replace(/\bbolna\s*\(/g, 'console.log(')

      // Control Flow
      .replace(/\bagar\s*\(/g, 'if (')
      .replace(/\bnahi_to\b/g, 'else')
      .replace(/\bjab_tak\s*\(/g, 'while (')
      .replace(/\brukja\(\)/g, 'break;')
      .replace(/\bagla\(\)/g, 'continue;')

      // Variables and Assignment
      .replace(/\bbanao\b/g, 'let')

      // Functions and Abstraction
      .replace(/\bkaam\s+(\w+)\s*\(/g, 'function $1(')

      // Booleans
      .replace(/\bsach\b/g, 'true')
      .replace(/\bjhuth\b/g, 'false')

      // Operators
      .replace(/\bya\b/g, '||')
      .replace(/\baur\b/g, '&&')
      .replace(/\bnahi\b/g, '!');

    // 🛠 Execute the final JavaScript code
    try {
      new Function(code)();
    } catch (e) {
      console.error("BolLang Error:", e);
    }
  });
})();

