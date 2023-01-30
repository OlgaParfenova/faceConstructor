const getRandomIndex = (arr) => Math.round(Math.random() * (arr.length - 1));

const paintElement = (container, color) => {
    const elements = container.querySelectorAll('svg *');

    elements.forEach((item) => {
        item.style.fill = color;
    })
}

const renderPerson = (container, data) => {
    const colorSkin = data.skin.color.value;
    const colorEyes = data.eyes.color.value;
    const colorMouth = data.mouth.color.value;

    container.innerHTML = `
    <div class="earsContainer" id="earsBox">
        ${data.ears.layout}
    </div>
    <div class="faceContainer" id="faceBox">
        ${data.face.layout}
    </div>
    <div class="eyesContainer" id="eyesBox">
        ${data.eyes.layout}
    </div>
    <div class="noseContainer" id="noseBox">
        ${data.nose.layout}
    </div>
    <div class="mouthContainer" id="mouthBox">
        ${data.mouth.layout}
    </div>
    `
    const $faceBox = document.getElementById('faceBox');
    const $eyesBox = document.getElementById('eyesBox');
    const $mouthBox = document.getElementById('mouthBox');
    const $earsBox = document.getElementById('earsBox');

    paintElement($eyesBox, colorEyes);
    paintElement($faceBox, colorSkin);
    paintElement($earsBox, colorSkin);
    paintElement($mouthBox, colorMouth);

};

const renderPersonData = (container, data) => {

    container.innerHTML = `
                        <h6 class="sidebarTitleCategory">Face:</h6>

                    <ul class="featuresList">
                        <li>Label: ${data.face.label}</li>
                    </ul>

                    <h6 class="sidebarTitleCategory">Ears:</h6>

                    <ul class="featuresList">
                        <li>Label: ${data.ears.label}</li>
                    </ul>

                    <h6 class="sidebarTitleCategory">Eyes:</h6>

                    <ul class="featuresList">
                        <li>Label: ${data.eyes.label}</li>
                        <li>Color:<span class="color" style="color: ${data.eyes.color.value}"> ${data.eyes.color.label}</span></li>
                    </ul>

                    <h6 class="sidebarTitleCategory">Nose:</h6>

                    <ul class="featuresList">
                        <li>Label: ${data.nose.label}</li>
                    </ul>

                    <h6 class="sidebarTitleCategory">Mouth:</h6>

                    <ul class="featuresList">
                        <li>Label: ${data.mouth.label}</li>
                        <li>Color: <span class="color" style="color: ${data.mouth.color.value}">${data.mouth.color.label}</span></li>
                    </ul>

                    <h6 class="sidebarTitleCategory">Skin:</h6>

                    <ul class="featuresList">
                        <li>Color: <span class="color" style="color: ${data.skin.color.value}">${data.skin.color.label}</span></li>
                    </ul>
    `;
};


const getCheckboxList = (datalist, name) => datalist.map(({label}) => `            
            <label class="checkboxShape inputBoxItem">
                <input type="radio" name="${name}" value="${label}">
                <span class="label">${label}</span>
            </label>`);

const renderConstructorForm = (container, data) => {

    const faceShapeList = data.face.shapes;
    const eyesShapeList = data.eyes.shapes;
    const eyesColorList = data.eyes.colors;
    const earsShapeList = data.ears.shapes;
    const noseShapeList = data.nose.shapes;
    const mouthShapeList = data.mouth.shapes;
    const mouthColorList = data.mouth.colors;
    const skinColorList = data.skin.colors;

    const faceShapeCheckboxList = getCheckboxList(faceShapeList, 'faceShape');
    const eyesShapeCheckboxList = getCheckboxList(eyesShapeList, 'eyesShape');
    const earsShapeCheckboxList = getCheckboxList(earsShapeList, 'earsShape');
    const noseShapeCheckboxList = getCheckboxList(noseShapeList, 'noseShape');
    const mouthShapeCheckboxList = getCheckboxList(mouthShapeList, 'mouthShape');
    const mouthColorCheckboxList = getCheckboxList(mouthColorList, 'mouthColor');
    const eyesColorCheckboxList = getCheckboxList(eyesColorList, 'eyesColor');
    const skinColorCheckboxList = getCheckboxList(skinColorList, 'skinColor');

    container.innerHTML = `
        <h3 class="sidebarPanelTitle">Customise your person</h3>
        <p class="formTitle">Face</p>
        <p class="formSubtitle">Shapes:</p>
            <div class="inputBox">${faceShapeCheckboxList.join('')}</div>

        <p class="formTitle">Ears</p>
        <p class="formSubtitle">Shapes:</p>
            <div class="inputBox">${earsShapeCheckboxList.join('')}</div>

        <p class="formTitle">Eyes</p>
        <p class="formSubtitle">Shapes:</p>
            <div class="inputBox">${eyesShapeCheckboxList.join('')}</div>
        <p class="formSubtitle">Colors:</p>
            <div class="inputBox">${eyesColorCheckboxList.join('')}</div>

        <p class="formTitle">Nose</p>
        <p class="formSubtitle">Shapes:</p>
            <div class="inputBox">${noseShapeCheckboxList.join('')}</div>

        <p class="formTitle">Mouth</p>
        <p class="formSubtitle">Shapes:</p>
            <div class="inputBox">${mouthShapeCheckboxList.join('')}</div>
        <p class="formSubtitle">Colors:</p>
            <div class="inputBox">${mouthColorCheckboxList.join('')}</div>

        <p class="formTitle">Skin</p>
        <p class="formSubtitle">Colors:</p>
            <div class="inputBox">${skinColorCheckboxList.join('')}</div>
            
        <button type="submit" class="buttonSubmit">Apply</button>
    `;
}
