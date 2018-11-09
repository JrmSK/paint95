var Paint = {};
Paint.colors = ['black', 'red', 'green', 'blue', 'brown', 'white'];      // if you want to add colors, add it here in the array before white (eraser);
Paint.selectedColor = "";

Paint.start = function () {
    Paint.bindMenuActions();
    Paint.generateDynamicColors();
};

Paint.bindMenuActions = function () {
    var buttonNew = document.getElementById("new");
    buttonNew.addEventListener("click", Paint.new);
    var buttonSave = document.getElementById("save");
    buttonSave.addEventListener("click", Paint.save);
    var buttonLoad = document.getElementById("load");
    buttonLoad.addEventListener("click", Paint.load);

};

Paint.save = function () {
    alert('save');                  // TODELETE
};

Paint.load = function () {
    alert('load');                 // TODELETE
};

Paint.new = function () {
    alert('new');                 // TODELETE
};



Paint.generateDynamicColors = function () {
    var colorsHolder = document.getElementById("colors-menu");
    for (var i = 0; i < Paint.colors.length; i++) {
        var buttonItem = document.createElement('li');
        var newButton = document.createElement('button');
        newButton.style.backgroundColor = Paint.colors[i];
        newButton.style.borderRadius = "50%";
        newButton.style.height = "40px";
        newButton.style.width = "40px";
        newButton.className = "cover-bg colors-btn";
        newButton.id = Paint.colors[i];
        buttonItem.appendChild(newButton);
        colorsHolder.appendChild(buttonItem);
        newButton.addEventListener("click", function(e) {
            var clickedColor = this;
            Paint.selectedColor = clickedColor.id;
            allColorsButtons = document.getElementsByClassName("colors-btn")
            for (var j = 0; j < Paint.colors.length; j++) {
                allColorsButtons[j].classList.remove("selected");
            }
            clickedColor.classList.add("selected");
        })

    }
}
Paint.start();