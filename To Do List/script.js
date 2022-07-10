

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const listElements = document.querySelector("#tasks")

    form.addEventListener('submit', e => {
        e.preventDefault()

        const task = input.value

        if(!task){
            alert("Please input something")
            return
        }

        const taskElement = document.createElement("div")
        taskElement.classList.add("task")

        const taskContentElement = document.createElement("div")
        taskContentElement.classList.add("content")

        taskElement.appendChild(taskContentElement)

        //Input task
        const taskInputElement = document.createElement("input")
        taskInputElement.classList.add("text")
        taskInputElement.type = "text"
        taskInputElement.value = task
        taskInputElement.setAttribute("readonly", "readonly")

        taskContentElement.appendChild(taskInputElement)

        //Div for edit and delete buttons
        const taskActionsElement = document.createElement("div")
        taskActionsElement.classList.add("actions")

        //Edit button
        const taskEditElement = document.createElement("button")
        taskEditElement.classList.add("edit")
        taskEditElement.innerHTML = "Edit"

        //Delete button
        const taskDeleteElement = document.createElement("button")
        taskDeleteElement.classList.add("delete")
        taskDeleteElement.innerHTML = "Delete"

        taskActionsElement.appendChild(taskEditElement)
        taskActionsElement.appendChild(taskDeleteElement)

        taskElement.appendChild(taskActionsElement)

        listElements.appendChild(taskElement)

        input.value = ""

        //Edit button pressed
        taskEditElement.addEventListener("click", () => {
            if(taskEditElement.innerText.toLowerCase() == "edit"){
                taskInputElement.removeAttribute("readonly")
                taskInputElement.focus()
                taskEditElement.innerHTML = "Save"
            }
            else{
                taskInputElement.setAttribute("readonly", "readonly")
                taskEditElement.innerHTML = "Edit"
            }
        })

        taskDeleteElement.addEventListener("click", () => {
            listElements.removeChild(taskElement)
        })
    })
})