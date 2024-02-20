function calculateTraiangleArea() {
    const triangleBaseInput = getInputValueById('triangle-base');
    const triangleHeightInput = getInputValueById('triangle-height');
    const area = 0.5 * triangleBaseInput * triangleHeightInput;
    setInnerTextById('triangle-area',area);
}

function calculateRectangleArea() {
    const RectangleWidthInput = getInputValueById('Rectangle-width');
    const RectangleLengthInput = getInputValueById('Rectangle-width');
    const area = RectangleWidthInput * RectangleLengthInput;
    setInnerTextById('Rectangle-area',area);
}

function calculateParallelogramArea() {
    const ParallelogramBase = getInputValueById('Parallelogram-base');
    const ParallelogramHeight = getInputValueById('Parallelogram-height');
    const area = ParallelogramBase * ParallelogramHeight;
    setInnerTextById ('Parallelogram-area',area);

}
function calculateRhombusarea() {
    const Rhombusbase = getInputValueById('Rhombus-base');
    const Rhombusheight = getInputValueById('Rhombus-height');
    const area = 0.5 * Rhombusbase * Rhombusheight;
    setInnerTextById('Rhombus-area',area);
}
function calculatePentagonarea() {
    const Pentagonbase = getInputValueById('Pentagon-base');
    const Pentagonheight = getInputValueById('Pentagon-height');
    const area = 0.5 * Pentagonbase * Pentagonheight;
    setInnerTextById('Pentagon-area',area);
}
function calculateEllipsearea() {
    const Ellipsebase = getInputValueById('Ellipse-base');
    const Ellipseheight = getInputValueById('Ellipse-height');
    const area = 3.1416 * Ellipsebase * Ellipseheight;
    setInnerTextById('Ellipse-area',area);
}

// re usable function 

function getInputValueById(inputFieldId) {
    const inputfield = document.getElementById(inputFieldId);
    const inputValueText = inputfield.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}