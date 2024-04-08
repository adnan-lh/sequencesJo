// import addSequencesToArray from './nameInfo';

let Sequences = []
let SequencesArray = [];
let calculateNumberValueArray = [];
let oldCalculateNumberValueArray = [];
let differenceArray = [];
let algorithmData = 0;
let countPower;
let algebraicEquation;

function algorithm() {
    // إعادة تهيئة المصفوفتين والمتغير بقيمهم الافتراضية
    SequencesArray = [];
    Sequences = []
    calculateNumberValueArray = [];
    oldCalculateNumberValueArray = [];
    algebraicEquation = `T(n) =`;
    algorithmData = 0;

    // استيراد الأرقام من العنصر ".inputSequences"
    const sequencesv = document.querySelector(".inputSequences").value;
    // التحقق مما إذا كانت القيمة المدخلة غير فارغة
    if (sequencesv === "") {
        alert("الرجاء إدخال أرقام متسلسلة مفصولة بمسافة");
        innerAnswer("متتالية فارغة");
        return;
    } else {
        // تحويل المصفوفة إلى نص وتجميعها بواسطة فاصلة واحدة
        convertToNumberArray(sequencesv);
        differenceArray = Sequences;
        oldCalculateNumberValueArray = Sequences;
        algorithmArray()
        // تحديث النص المعروض في الواجهة الأمامية
        innerAnswer(algebraicEquation);
        // console.log(`عدد مرات إعادة عملية الفرق بين المصفوفات: ${algorithmData}`);
    }
    // addSequencesToArray();
}

// الدالة التي تقوم بتحويل الأرقام المتتالية المدخلة إلى مصفوفة
function convertToNumberArray(input) {
    // استخدام الدالة split() لتحويل النص إلى مصفوفة بناءً على المسافات
    let array = input.split(' ');

    // تحويل العناصر النصية في المصفوفة إلى أرقام صحيحة
    array = array.map(num => parseInt(num, 10));
    Sequences = array;
    SequencesArray = array;
    return array;
}

// تفير الناتج بالواجهة
function innerAnswer(params) {
    const answer = document.querySelector('.answer');
    answer.innerHTML = params;
}

// تنفيذ الخوارزمية بتكرار
function algorithmArray() {
    // تربيعي وطالع
    while (!allNumbersEqual(differenceArray)) {
        // حساب الفروقات بين العناصر
        calculateDifference();
        // حساب القيمة الجبرية
        calculateNumberValue(countPower);
        //حساب الفرق بين مصفوفتين
        calculateDifferenceArray();
        // if(!allNumbersEqual(SequencesArray)){break;}
        SequencesArray = differenceArray;
        oldCalculateNumberValueArray = differenceArray;
        calculateNumberValueArray = [];
        algorithmData++;
    }
    if (differenceArray[0] !== 0) {
        algebraicEquation += ` + ${differenceArray[0]}`;
    }
}

//حساب الفرق بين مصفوفتين
function calculateDifferenceArray() {
    differenceArray = [];
    for (let i = 0; i < Sequences.length; i++) {
        const differenceArrayFor = oldCalculateNumberValueArray[i] - calculateNumberValueArray[i];
        differenceArray.push(differenceArrayFor);
    }
}

// حساب الفرق العام بين العناصر حتى تصبح جميع الارقام متساوية
function calculateDifference() {
    let NewSequencesArray = [];
    let countNPower = 0;
    // حلقة while loop لحساب الفرق بين كل عنصر والعنصر الذي يليه حتى تصبح جميع الأرقام متساوية
    while (!allNumbersEqual(SequencesArray)) {
        // حلقة for loop لحساب الفرق بين كل عنصر والعنصر الذي يليه وتخزينه في المصفوفة الجديدة
        for (let i = 0; i < SequencesArray.length - 1; i++) {
            // حساب الفرق بين العنصر الحالي والعنصر التالي
            const difference = SequencesArray[i + 1] - SequencesArray[i];
            // إضافة الفرق إلى المصفوفة الجديدة
            NewSequencesArray.push(difference);
        }
        // زيادة عدد مرات إعادة الحساب
        countNPower++;
        // تحديد المصفوفة الأصلية بقيم الفروقات الجديدة للدورة القادمة
        SequencesArray = NewSequencesArray.slice();
        NewSequencesArray = [];
    }
    countPower = countNPower;
}

// دالة تحقق من تساوي جميع الأرقام في المصفوفة
function allNumbersEqual(arr) {
    return arr.every(num => num === arr[0]);
}

// حساب القيمة الجبرية
function calculateNumberValue(p) {
    // / !n الرقم مضروب بالرقم الذي قبله    3*2=6
    const calculateCountPower = (p * (p - 1));
    let index = 0;

    if (p == 1 || p == 0) {
        algebraicEquation += ` + ${SequencesArray[0]}n`;
        while (index < Sequences.length) {
            index++;
            const nv = (SequencesArray[0] * index);
            // دفع ناتج العملية الى مصفوفة جديدة
            calculateNumberValueArray.push(nv);
        }
    }
    else {
        while (index < Sequences.length) { 
            index++;
            // n^n   رفع القوة على الرقم
            const Sequenceslength = Math.pow(index, p);
            const nv = (SequencesArray[0] / calculateCountPower) * Sequenceslength;
            // دفع ناتج العملية الى مصفوفة جديدة
            calculateNumberValueArray.push(nv);
        }
        if ((SequencesArray[0] / calculateCountPower) == 1) { algebraicEquation += ` + n<sup>${p}</sup> `; }
        else { algebraicEquation += ` + ${+SequencesArray[0] / calculateCountPower}n<sup>${p}</sup> `; }
    }
}


//8 15 22 29 36    T(n) = + 7n + 1
//5 12 19 26 33    T(n) = + 7n + -2
//1 7 19 37 61     T(n) = + 3n2 + -3n + 1
//5 8 13 20 29     T(n) = + n2 + 4
//0 7 26 63 124    T(n) = + n3 + -1