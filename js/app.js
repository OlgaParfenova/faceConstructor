const randomPerson = () => {
    const rndFace = faces[getRandomIndex(faces)];
    const rndMouth = mouths[getRandomIndex(mouths)];
    const rndEyes = eyes[getRandomIndex(eyes)];
    const rndNose = noses[getRandomIndex(noses)];
    const rndEars = ears[getRandomIndex(ears)];

    const rndSkinColor = skinColors[getRandomIndex(skinColors)];
    const rndMouthColor = lipsColors[getRandomIndex(lipsColors)];
    const rndEyesColor = eyesColors[getRandomIndex(eyesColors)];

    globalPerson.setPersonPart('face', {
        label: rndFace.label,
        layout: rndFace.value,
    });

    globalPerson.setPersonPart('mouth', {
        label: rndMouth.label,
        layout: rndMouth.value,
    });

    globalPerson.setPersonPart('eyes', {
        label: rndEyes.label,
        layout: rndEyes.value,
    });

    globalPerson.setPersonPart('nose', {
        label: rndNose.label,
        layout: rndNose.value,
    });

    globalPerson.setPersonPart('ears', {
        label: rndEars.label,
        layout: rndEars.value,
    });

    globalPerson.setColor('skin', {
        label: rndSkinColor.label,
        value: rndSkinColor.value,
    })

    globalPerson.setColor('mouth', {
        label: rndMouthColor.label,
        value: rndMouthColor.value,
    })

    globalPerson.setColor('eyes', {
        label: rndEyesColor.label,
        value: rndEyesColor.value,
    })
}

$generateButton.addEventListener('click', function () {
    randomPerson();
    renderPerson($personFrame, globalPerson.getData());
    renderPersonData($dataContainer, globalPerson.getData());
});


renderPerson($personFrame, globalPerson.getData());
renderPersonData($dataContainer, globalPerson.getData());


$personSidebar.addEventListener('click', (event) => {
    const elem = event.target;

    if (elem.classList.contains('btnSidebar')) {
        const effect = elem.dataset.effect;

        if (effect === 'open') {
            $personSidebar.classList.add('sidebarPanelOpened');
        }

        if (effect === 'close') {
            $personSidebar.classList.remove('sidebarPanelOpened');
        }
    }
});

renderConstructorForm($personConstructorForm, personData);




