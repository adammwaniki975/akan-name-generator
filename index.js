document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Validate inputs
    if (!birthdate || !gender) {
        alert("Please fill in all fields.");
        return;
    }
    

    // Generate Akan name (simplified logic)
    const names = {
        male: ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"],
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Afia", "Yaa", "Ama"]
    };

    const dayOfWeek = new Date(birthdate).getDay(); 
    const nameIndex = dayOfWeek % names[gender].length;
    const akanName = names[gender][nameIndex];
    const MM= new Date(birthdate).getMonth() + 1; // getMonth() returns 0-11, so add 1 for 1-12
const YYYY=new Date(birthdate).getFullYear();

    const CC = Math.floor(YYYY / 100);
    const YY = YYYY % 100;
    const DD = new Date(birthdate).getDate();

    if (DD < 1 || DD > 31) {MM < 1 || MM > 12 }
    {
        alert("Please enter a valid date.");
        return;
    }

    let d = Math.floor
    ( ( (CC/4) -2*CC -1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    d = (d + 7) % 7; // Ensure positive value

    // Display the Akan name
    (
    // Display the result
    document.getElementById('akanName').textContent = `${akanName} (Born on ${MM}/${new Date(birthdate).getDate()}/${YYYY})`;
});