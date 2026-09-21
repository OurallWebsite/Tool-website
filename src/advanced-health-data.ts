const advancedHealth: Record<string, any> = {
  'bmi-calculator': {
    op: 'bmiAdvanced', advanced: true,
    description: 'Calculate adult BMI in metric or imperial units, see the CDC adult category, BMI Prime and the weight range corresponding to BMI 18.5–24.9.',
    inputs: [
      { key:'v0', label:'Weight', value:70, type:'number', min:1, max:700, step:.1, help:'Body weight. Choose kilograms or pounds in the calculator.' },
      { key:'v1', label:'Height', value:175, type:'number', min:50, max:275, step:.1, help:'Standing height. Choose centimeters or inches in the calculator.' },
    ],
    formula: 'BMI = weight (kg) ÷ height² (m²); imperial inputs are converted before calculation',
    unit: 'kg/m²', params: [],
    keywords: ['adult BMI calculator','BMI calculator kg cm','BMI calculator pounds inches','BMI Prime','healthy weight range'],
  },
  'bmr-calculator': {
    op: 'bmrAdvanced', advanced: true,
    description: 'Estimate resting energy expenditure with the Mifflin–St Jeor equation using sex, age, height and weight in metric or imperial units.',
    inputs: [
      { key:'v0', label:'Weight', value:70, type:'number', min:1, max:700, step:.1, help:'Body weight. Choose kilograms or pounds in the calculator.' },
      { key:'v1', label:'Height', value:175, type:'number', min:50, max:275, step:.1, help:'Standing height. Choose centimeters or inches in the calculator.' },
      { key:'v2', label:'Age', value:30, type:'number', min:18, max:120, step:1, help:'Adult age in completed years.' },
    ],
    formula: 'Mifflin–St Jeor: 10w + 6.25h − 5a + 5 (male) or −161 (female)',
    unit: 'kcal/day', params: [],
    keywords: ['BMR calculator','Mifflin St Jeor calculator','resting energy expenditure','calories at rest'],
  },
  'tdee-calculator': {
    op: 'tdeeAdvanced', advanced: true,
    description: 'Estimate total daily energy expenditure from Mifflin–St Jeor BMR and a selectable activity factor, with metric and imperial input modes.',
    inputs: [
      { key:'v0', label:'Weight', value:70, type:'number', min:1, max:700, step:.1, help:'Body weight. Choose kilograms or pounds in the calculator.' },
      { key:'v1', label:'Height', value:175, type:'number', min:50, max:275, step:.1, help:'Standing height. Choose centimeters or inches in the calculator.' },
      { key:'v2', label:'Age', value:30, type:'number', min:18, max:120, step:1, help:'Adult age in completed years.' },
    ],
    formula: 'TDEE = Mifflin–St Jeor BMR × selected activity factor',
    unit: 'kcal/day', params: [],
    keywords: ['TDEE calculator','maintenance calories calculator','activity calorie calculator','daily energy expenditure'],
  },
};
export default advancedHealth;
