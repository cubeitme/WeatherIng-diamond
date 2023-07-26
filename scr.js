

const displayData = (data) => {
    let li = document.createElement("li")
    li.innerText = data.message
    ChatHistory.appendChild(li)
}

const history = fetch("History.json")
    .then(response => response.json())
    .then(displayData)

const appendToHistory = (data) => {
    data.message = MessageInput.value
    console.log(data)

    let li = document.createElement("li")
    li.innerText = data.message
    ChatHistory.appendChild(li)
}

fetch("History.json")
    .then(resp => resp.json())
    .then(appendToHistory)

SendMessage.addEventListener("click", function () {
    if (MessageInput.value == "") {
        window.alert("нельзя отправлять пустые сообщения")
        return
    }

    fetch("History.json")
        .then(resp => resp.json())
        .then(appendToHistory)

    /* let li = document.createElement("li")
    li.innerText = MessageInput.value
    ChatHistory.appendChild(li) */


    //MessageInput.value = ""
})