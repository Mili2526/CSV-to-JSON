const csvFileInput = document.getElementById("csvFile");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
  const csvFile = csvFileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const csvData = reader.result;
    const jsonData = csvToJson(csvData);
    console.log(jsonData);
  };
  reader.readAsText(csvFile);
});

function csvToJson(csvData) {
  const lines = csvData.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result);
}
