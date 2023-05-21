const patientform = document.querySelector(".patient-form");
patientform.addEventListener("submit", (e) => {
patientformProcess(e);
});

async function patientformProcess(e) {
  const patientFirstName = document.querySelector("#f-name").value;
  const patientLastName = document.querySelector("#l-name").value;
  const age = document.querySelector("#age")
  const gender = document.querySelector(".gender")
  const mobileNo = document.querySelector("#mobile-no")
  const weight = document.querySelector("#weight")
  const medicalConditions = document.querySelector("#medical-conditions")
  const symptoms = document.querySelector("#symptoms")
  const allergies = document.querySelector("#allergies")
  const lastVisit = document.querySelector("#date-visited")
  const record = document.querySelector(".record")


  console.log(patientFirstName, patientLastName, age, gender, mobileNo, weight, medicalConditions, symptoms, allergies, lastVisit, record);
  await axios
    .post("https://easydoc-ut70.onrender.com/patient/form", {
        patientFirstName: patientFirstName,
        age: age,
        gender: gender,
        mobileNo: mobileNo,
        patientLastName: patientLastName,
        weight: weight,
        medicalConditions: medicalConditions,
        symptoms: symptoms,
        allergies: allergies ,
        lastVisit: lastVisit,
        record: record,
    })
    .then((res) => {
      console.log(res.data);
    });
}