var Paint = {};
Paint.colors = ['black', 'yellow', 'green', 'blue', 'brown', 'white'];      // if you want to add colors, add it here in the array before white (eraser);
Paint.selectedColor = Paint.colors[0];
Paint.nameOfPainting = "";
Paint.selectedSize = 10;

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
        document.getElementById("painting-title").innerHTML = Paint.nameOfPainting;
        modalWrapper.style.display = "none";
    })

}

Paint.save = function () {
    var canvas = document.getElementById("canvas");
    var canvasLeft = canvas.getBoundingClientRect().left;
    var canvasTop = canvas.getBoundingClientRect().top;
    var canvasObj = {};
    canvasObj["name"] = document.getElementById("painting-title").innerHTML;
    canvasObj["pixels"] = [];
    var allPixels = canvas.getElementsByClassName("pixel");
    for (var i=0; i<allPixels.length; i++) {
        var currentPixel = allPixels[i];
        var pixelObj = {};
        pixelObj["size"] = currentPixel.style.height;
        pixelObj["top"] = currentPixel.getBoundingClientRect().top - canvasTop;
        pixelObj["left"] = currentPixel.getBoundingClientRect().left - canvasLeft;
        canvasObj["pixels"].push(pixelObj);
    }
    localStorage.setItem("painting", JSON.stringify(canvasObj));
    alert("your painting have been saved");
};



Paint.load = function () {
    alert('load');                 // TODELETE
};

Paint.new = function () {
    Paint.showModal();
    var canvas = document.getElementById("canvas");
    var allPixels = canvas.getElementsByClassName("pixel");
    while (allPixels.length > 0) {
        canvas.removeChild(allPixels[0]);
    }

};

Paint.draw = function (e) {
    var canvas = document.getElementById("canvas");
    Paint.pixel = document.createElement("div");
    canvas.appendChild(Paint.pixel);
    Paint.pixel.className = "pixel";
    Paint.pixel.style.position = "absolute";
    Paint.pixel.style.top = e.clientY - canvas.offsetTop + "px";
    Paint.pixel.style.left = e.clientX - canvas.offsetLeft + "px";
    Paint.pixel.style.backgroundColor = Paint.selectedColor;
    Paint.pixel.style.height = `${Paint.selectedSize}px`;
    Paint.pixel.style.width = `${Paint.selectedSize}px`;
    Paint.pixel.style.borderRadius = "20%";

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
        newButton.style.height = "4vw";
        newButton.style.width = "4vw";
        newButton.className = "cover-bg colors-btn";
        newButton.id = Paint.colors[i];
        if (Paint.colors[i] === "black")
            newButton.classList.add("selected");
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