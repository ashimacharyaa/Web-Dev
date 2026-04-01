/*<script>
const boss = document.getElementById('b0ss');
boss.innerText = 'Ashim Acharya';
</script>
window.addEventListener('DOMContentLoaded', () => {
    const boss = document.getElementById('boss');
    boss.innerText = 'Hello Ashim!';
});
*/
const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index, Boxes) => {
    if (index === Boxes.length - 1) {
        box.innerText = "I am ashim";
        } else {
        box.innerText = `Box ${index + 1}`;
    }
});