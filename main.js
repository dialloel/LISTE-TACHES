document.getElementById("plus").onclick = function(){
    if(document.getElementById("list").value == 0){
        alert("Please Enter a Task")
    }

    else{
        document.getElementById("tasks").innerHTML += `
            <div class="task">
            <input type="checkbox" id="horns" name="horns">
                <span id="taskname">
                    ${document.getElementById("list").value}
                </span>
              
            </div>
        `;

        


    }
}