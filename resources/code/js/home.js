document.getElementById('startButton').addEventListener('click', function () {
    this.style.display = 'none';
    var blocks = document.getElementById('colorBlocks');
    blocks.style.visibility = 'visible';
    blocks.style.opacity = '1';
});
