var Paint = {};

Paint.start = function() {
    Paint.bindMenuActions();
    Paint.generateDynamicColors();
};

Paint.bindMenuActions = function() {
    var buttonSave = document.getElementById("save");
    buttonSave.addEventListener("click", Paint.save);
    var buttonLoad = document.getElementById("load");
    buttonLoad.addEventListener("click", Paint.load);
    var buttonNew = document.getElementById("new");
    buttonNew.addEventListener("click", Paint.new);
};

Paint.save = function() {
    alert('save');                  // TODELETE
};

Paint.load = function() {
    alert('load');                 // TODELETE
};

Paint.new = function() {
    alert('new');                 // TODELETE
};

Paint.colors = ['black','red','green','blue','brown','white'];

Paint.generateDynamicColors = function() {
    var colorsHolder = document.getElementById("colors-menu");
    for (var i=0; i<Paint.colors.length;i++) {
        var buttonItem = document.createElement('li');
        var newButton = document.createElement('button');
        newButton.style.backgroundColor = Paint.colors[i];
        newButton.style.borderRadius = "50%";
        newButton.style.height = "40px";
        newButton.style.width = "40px";
        newButton.className = Paint.colors[i];
        buttonItem.appendChild(newButton);
        colorsHolder.appendChild(buttonItem);
    }
}




Paint.start();
