var Paint = {};

Paint.start = function() {
    Paint.bindMenuActions();
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

Paint.start();