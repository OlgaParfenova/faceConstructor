const defaultSettings = {
    face: {
        label: faces[0].label,
        layout: faces[0].value,
    },
    ears: {
        label: ears[0].label,
        layout: ears[0].value,
    },
    eyes: {
        label: eyes[0].label,
        layout: eyes[0].value,
        color:{
            label: eyesColors[0].label,
            value: eyesColors[0].value,
        },
    },
    nose: {
        label: noses[0].label,
        layout: noses[0].value,
    },
    mouth: {
        label: mouths[0].label,
        layout: mouths[0].value,
        color:{
            label: lipsColors[0].label,
            value: lipsColors[0].value,
        },
    },
    skin: {
        color: {
            label: skinColors[0].label,
            value: skinColors[0].value,
        },
    },
};

const globalPerson = {
    data: defaultSettings,
    setColor(personPart, objColor) {
        this.data[personPart].color = objColor;
    },
    setPersonPart(personPart, partObj) {
        this.data[personPart].label = partObj.label;
        this.data[personPart].layout = partObj.layout;
    },
    getColor(personPart) {
        return this.data[personPart].color;
    },
    getData() {
        return this.data;
    },
};