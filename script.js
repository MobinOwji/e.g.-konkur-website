function calculateQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let discriminant = b * b - 4 * a * c;
    let result;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `ریشه‌ها: x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        result = `ریشه مضاعف: x = ${root.toFixed(2)}`;
    } else {
        result = "معادله ریشه حقیقی ندارد";
    }
    document.getElementById('quadraticResult').innerText = result;
}