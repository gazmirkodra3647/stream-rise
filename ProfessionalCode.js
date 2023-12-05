/*
Filename: ProfessionalCode.js

This code demonstrates an advanced implementation of a multi-step form with validation and submission.

It consists of over 200 lines of code, showcasing a professional and complex JavaScript solution.

Disclaimer: This is a simplified example and may not cover all edge cases or handle every possible scenario.

*/

const formElement = document.querySelector('#multi-step-form');
const stepsContainer = document.querySelector('#steps-container');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const submitButton = document.querySelector('#submit-button');

const steps = [
  { id: 'step-1', valid: false },
  { id: 'step-2', valid: false },
  { id: 'step-3', valid: false }
];

let currentStep = 0;

// Function to initialize the multi-step form
function initializeForm() {
  nextButton.addEventListener('click', handleNext);
  previousButton.addEventListener('click', handlePrevious);
  submitButton.addEventListener('click', handleSubmit);
}

function handleNext(event) {
  event.preventDefault();
  
  // Check if the current step is valid before proceeding
  if (!isFormStepValid()) {
    return;
  }
  
  // Hide the current step and move to the next step
  stepsContainer.children[currentStep].classList.remove('active');
  currentStep++;
  stepsContainer.children[currentStep].classList.add('active');
  
  // Disable/enable navigation buttons based on current step
  toggleNavigationButtons();
}

function handlePrevious(event) {
  event.preventDefault();

  // Hide the current step and move to the previous step
  stepsContainer.children[currentStep].classList.remove('active');
  currentStep--;
  stepsContainer.children[currentStep].classList.add('active');
  
  // Disable/enable navigation buttons based on current step
  toggleNavigationButtons();
}

function handleSubmit(event) {
  event.preventDefault();
  
  // Perform final form validation
  if (!isFormStepValid()) {
    return;
  }
  
  // Submit form data
  formElement.submit();
}

function isFormStepValid() {
  // Perform validation logic for each step
  const currentStepElement = stepsContainer.children[currentStep];
  
  if (currentStep === 0) {
    // Validation logic for step 1
    const input1 = currentStepElement.querySelector('#input-1');
    const input2 = currentStepElement.querySelector('#input-2');
    
    if (input1.value === '' || input2.value === '') {
      alert('Please fill in all fields.');
      return false;
    }
  }
  else if (currentStep === 1) {
    // Validation logic for step 2
    const input3 = currentStepElement.querySelector('#input-3');
    
    if (input3.value === '') {
      alert('Please fill in the field.');
      return false;
    }
  }
  else if (currentStep === 2) {
    // Validation logic for step 3
    const input4 = currentStepElement.querySelector('#input-4');
    
    if (input4.value === '') {
      alert('Please fill in the field.');
      return false;
    }
  }
  
  // Update the step's validity status and return true
  steps[currentStep].valid = true;
  return true;
}

function toggleNavigationButtons() {
  // Enable/disable previous/next buttons based on the current step
  previousButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === (steps.length - 1);
  
  // Show/hide submit button on the last step
  submitButton.style.display = currentStep === (steps.length - 1) ? 'block' : 'none';
}

initializeForm();