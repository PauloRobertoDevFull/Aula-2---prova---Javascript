const idade = Number(prompt("Digite sua idade: "))
const status = idade >= 18 ? "registrado" : "não registrado"
console.log(`Status: ${status}`)

switch (status) {
    case "registrado":
    console.log("Boas-vindas!")
    break;
    case "não registrado":
    console.log("Por favor, complete seu registro.")
    break;
    default:
    console.log("Status desconhecido.")
}
if (idade >= 18 && status === "registrado") {
    console.log("Cadastro completado. Acesso completo.")
} else if (idade < 18 || status !== "registrado") {
    console.log("Você tem acesso limitado.") }
