/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const btnSend = document.querySelector("#btn-send");


const lastMessage = document.querySelector("#last-message");

btnSend.addEventListener("click", function () {
	const messageInput = document.querySelector("#message");
	const message = messageInput.value;
	lastMessage.textContent = message;
	messageInput.value = "";
})