var fileList = ["file1.html", "file2.html", "file3.html", "file4.html", "file5.html", "file6.html", "file7.html", "8.html","9.html","10.html","11.html","12.html","13.html","14.html","15.html","16.html","17.html","18.html","19.html","20.html","21.html","22.html","23.html","24.html","25.html","26.html","27.html","28.html","29.html","30.html"]; // list of html files

function openPopups() {
	var file1 = fileList[Math.floor(Math.random() * fileList.length)]; // choose random file from list
	var file2 = fileList[Math.floor(Math.random() * fileList.length)]; // choose another random file from list

	while (file2 == file1) { // ensure that the two files are not the same
		file2 = fileList[Math.floor(Math.random() * fileList.length)];
	}

	var popup1 = window.open(file1, "popup1", "width=400,height=400"); // open the first popup window
	var popup2 = window.open(file2, "popup2", "width=400,height=400"); // open the second popup window

	popup1.addEventListener("load", function() { // when the first popup window loads
		popup2.focus(); // focus on the second popup window
	});
}

document.getElementById("openPopups").addEventListener("click", openPopups); // listen for click on the button to open the popups
