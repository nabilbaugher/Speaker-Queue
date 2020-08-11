const el = document.getElementById("draggable_list");
const sortable = Sortable.create(el);

// add proper capitalization to the list of submitted strings
function capitalize(string) {
    let result = "";
    for (x of string.split(" ")) {
        result += x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() + " ";
    }
    return result.slice(0, result.length);
}

// add a name to the end of the list
function add(name) {
    $("#draggable_list").append(
        "<li class=\"list-group-item\">" + 
        name + 
        "<button type=\"button\" class=\"btn btn-primary float-right ml-2 mr-2\" onclick=\"requeue(this)\">Done speaking</button>" +
        "<button type=\"button\" class=\"btn btn-danger float-right ml-2 mr-2\" onclick=\"remove(this)\">Remove</button>" +
         "</li>"
    );
}
 
// remove element from list
function remove(btn) {
    btn.parentNode.parentNode.removeChild(btn.parentNode);
}

// remove element from list and add it at the bottom
function requeue(btn) {
    remove(btn);
    $("#draggable_list").append(btn.parentNode);
}

// when the user presses enter, add their submissions to the list and clear the textareas
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

// light/dark mode toggle
$("#toggle").change(function() {
    if (this.checked) {
        $("#light_mode").remove();
        $("head").append('<link id="dark_mode" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css" integrity="sha384-Bo21yfmmZuXwcN/9vKrA5jPUMhr7znVBBeLxT9MA4r2BchhusfJ6+n8TLGUcRAtL" crossorigin="anonymous">');
    } else {
        $("#dark_mode").remove();
        $("head").append('<link id="light_mode" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css">');
    }
})