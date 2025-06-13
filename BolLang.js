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

/*
=======================================
🧾 BolLang Documentation
=======================================

📌 Overview:
BolLang is a lightweight, browser-based, Hindi-syntax-inspired programming language built on top of JavaScript. It’s ideal for beginners, meme-loving coders, and educational purposes.

📦 How It Works:
- Include BolLang via CDN
- Write code inside <script type="text/bollang">
- BolLang transpiles it into JavaScript and runs it

🔧 CDN Usage:
<script src="https://yourcdn.com/bollang.min.js"></script>

📄 Language Syntax:
---------------------------------------
✅ Print:
  bolna("Hello");          // console.log("Hello")

✅ Variables:
  banao x = 10;            // let x = 10;
  x = x + 1;

✅ Data Types:
  banao naam = "Aman";     // string
  banao umar = 14;         // number
  banao sachHai = sach;    // boolean true
  banao fake = jhuth;      // boolean false

✅ Operators:
  aur -> &&
  ya -> ||
  nahi -> !

✅ Conditionals:
  agar (x > 5) {
    bolna("Bada hai");
  } nahi_to {
    bolna("Chhota ya barabar hai");
  }

✅ Loops:
  banao i = 0;
  jab_tak (i < 3) {
    bolna(i);
    i = i + 1;
  }

✅ Jump Statements:
  rukja();                 // break
  agla();                  // continue

✅ Functions:
  kaam greet(naam) {
    bolna("Hello, " + naam);
  }

  greet("Aman");

✅ Comments:
  // This is a comment (JS-style)

🔐 Error Handling:
BolLang wraps user code inside try/catch and prints errors in the console with the tag "BolLang Error".

🧱 Advanced Topics:
---------------------------------------
🔹 Semantics:
BolLang preserves the logic of programming through custom syntax while performing real JS operations.
Example: agar (x > 0) means "if x is positive"

🔹 Abstraction:
Using functions like `kaam` hides complexity. For example:

  kaam dikhado(msg) {
    bolna("Screen pe: " + msg);
  }
  dikhado("Welcome");

🔹 Control Flow:
if, else, loops, and jumps are supported in natural syntax.

🔹 Data Types and Structures:
Primitives like string, number, boolean work. Arrays and objects can be used directly as in JavaScript.

🔹 Future Ideas:
- Arrays: list = [1, 2, 3]
- Dictionaries: dict = { naam: "Aman" }
- User-defined Modules
- Built-in REPL or Playground

📘 Sample Program:
<script type="text/bollang">
  banao naam = "Aman";
  kaam greet(who) {
    bolna("Namaste, " + who);
  }

  greet(naam);
</script>

Made with ❤️ by Aman
Maar ke mutti baitha hai godha , jisne kiya RCB ko support vo hai behnkalauda

