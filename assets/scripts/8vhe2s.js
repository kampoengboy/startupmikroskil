function previewFile(){
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var file_url = document.querySelector('#fileurl');
  var file_name = document.querySelector('#filename');
  reader.onloadend = function () {
      file_url.value = reader.result;
  }
  if (file) {
      if(file.type!="application/zip" && file.type!="application/x-rar")
      {
        $('#avatar').val("");
        alert("File yang diupload harus dalam bentuk RAR ataupun ZIP.");
        file_name.value = "";
        file_url.value = "";
        return;
      }
      if(file.size>=10000000)
      {
          $('#avatar').val("");
          alert("File yang diupload tidak boleh lebih dari 10 MB.");
          file_name.value = "";
          file_url.value = "";
          return;
      }
      else {
        file_name.value = file.name;
        reader.readAsDataURL(file); //reads the data as a URL
      }
    } else {
      file_name.value = "";
      file_url.value = "";
  }
}
previewFile();
