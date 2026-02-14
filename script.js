const text = "Some wishes are too big... So I made them reality.";
let index = 0;

function type() {
    if(index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

type();function openThis() {
    alert("You opened it 😎");
}

function forYou() {
    alert("This is specially for you 💙");
}
<script>
function showImages() {
    document.getElementById("imageContainer").style.display = "block";
}
</script>