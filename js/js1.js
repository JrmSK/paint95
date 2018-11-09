var Paint = {};
Paint.colors = ['black', 'red', 'green', 'blue', 'brown', 'white'];      // if you want to add colors, add it here in the array before white (eraser);
Paint.selectedColor = "";
Paint.nameOfPainting = "";
Paint.selectedSize = 5;

Paint.start = function () {
    Paint.bindMenuActions();
    Paint.generateDynamicColors();
    Paint.generateDynamicSizes();
    Paint.showModal();
    Paint.bindCanvasClick();
};

Paint.bindMenuActions = function () {
    var buttonNew = document.getElementById("new");
    buttonNew.addEventListener("click", Paint.new);
    var buttonSave = document.getElementById("save");
    buttonSave.addEventListener("click", Paint.save);
    var buttonLoad = document.getElementById("load");
    buttonLoad.addEventListener("click", Paint.load);

};

Paint.showModal = function () {
    var modalWrapper = document.getElementById("modal-wrapper");
    var nameOfPainting = document.getElementById("painting-name");
    var validate = document.getElementById("validate-btn");
    modalWrapper.style.display = "block";
    validate.addEventListener("click", function () {
        Paint.nameOfPainting = nameOfPainting.value;
        modalWrapper.style.display = "none";
    })

}

Paint.save = function () {
    alert('save');                  // TODELETE
};

Paint.load = function () {
    alert('load');                 // TODELETE
};

Paint.new = function () {
    Paint.showModal();
};

Paint.draw = function (e) {
    var canvas = document.getElementById("canvas");
    Paint.pixel = document.createElement("div");
    canvas.appendChild(Paint.pixel);
    Paint.pixel.style.position = "absolute";
    Paint.pixel.style.top = e.clientY - canvas.offsetTop + "px";
    Paint.pixel.style.left = e.clientX - canvas.offsetLeft + "px";
    Paint.pixel.style.backgroundColor = Paint.selectedColor;
    Paint.pixel.style.height = `${Paint.selectedSize}px`;
    Paint.pixel.style.width = `${Paint.selectedSize}px`;
    Paint.pixel.style.borderRadius = "30%";

}

Paint.bindCanvasClick = function () {
    var canvas = document.getElementById("canvas");
    canvas.addEventListener("click", Paint.draw);
    canvas.addEventListener("mousedown", function () {
        canvas.addEventListener("mousemove", Paint.draw);
    });
    document.addEventListener("click", function () {
        canvas.removeEventListener("mousemove", Paint.draw)
    });
}

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
        newButton.addEventListener("click", function (e) {
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

Paint.generateDynamicSizes = function () {
    var sizeHolder = document.getElementById("selected-size");
    var displaySize = document.getElementById("display-size");
    displaySize.innerHTML = Paint.selectedSize;
    sizeHolder.oninput = function () {
        displaySize.innerHTML = sizeHolder.value;
        Paint.selectedSize = sizeHolder.value;
    }

}

Paint.start();