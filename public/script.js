const el = document.getElementById("draggable_list");
const sortable = Sortable.create(el);

function capitalize(string) {
    let result = "";
    for (x of string.split(" ")) {
        result += x.charAt(0).toUpperCase() + x.slice(1) + " ";
    }
    return result.slice(0, result.length);
}

function add(name) {
    $("#draggable_list").append(
        "<li class=\"list-group-item\">" + 
        name + 
        "<button type=\"button\" class=\"btn btn-primary float-right ml-2 mr-2\" onclick=\"requeue(this)\">Done speaking</button>" +
        "<button type=\"button\" class=\"btn btn-danger float-right ml-2 mr-2\" onclick=\"remove(this)\">Remove</button>" +
         "</li>"
    );
}

function remove(btn) {
    btn.parentNode.parentNode.removeChild(btn.parentNode);
}

function requeue(btn) {
    remove(btn);
    $("#draggable_list").append(btn.parentNode);
}

$("#input_names").keyup(function(event) {
    if (event.which === 13) {
        console.log("names recieved");
        let names = $("#input_names").val().split(",");
        for (name of names) {
            name = name.trim();
            if (name === "") {
                continue;
            }
            name = capitalize(name);
            console.log(name);
            add(name);
        }
        $("#input_names").val("");
    }
})