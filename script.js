const thirukkural= async()=>{
    let content=document.getElementById("submit");
    content.addEventListener("click",ev =>{
        let num1=document.getElementById("num").value;
        fetch(`https://api-thirukkural.vercel.app/api?num=`+num1)
        .then((response)=> response.json())
        .then(data=>{
            console.log(data)
            let finalData="";
                finalData+=`
                
        <div class="border-1 shadow rounded-2 p-4 m-3 fw-700 new" style="width:600px; color:white">
        <h3><b>TAMIL</b></h3>
            <div>
            <b><label for="">"${data.line1}</label></b>
            <b><label for="">${data.line2}"</label></b>
            </div>
            <br>

            <div>
            <b><label for="">Tamil Section:</label></b>
            <label for="">${data.sect_tam}</label>
            </div>

            <div>
            <b><label for="">Tamil Explanation:</label></b>
            <label for="">${data.tam_exp}</label>
            </div>

            <div>
            <b><label for="">Tamil Chapter:</label></b>
            <label for="">${data.chap_tam}</label>
            </div>
            </div>
            
            <div class="border-1 shadow rounded-2 p-4 m-3 fw-700 new" style="width:600px; color:white">
            <h3><b>ENGLISH</b></h3>
            <div>
            <b><label for="">"${data.eng}"</label></b>
            </div>
            <br>

            <div>
            <b><label for="">English Section:</label></b>
            <label for="">${data.sect_eng}</label>
            </div>

            <div>
            <b><label for="">English Explanation:</label></b>
            <label for="">${data.eng_exp}</label>
            </div>

            <div>
            <b><label for="">English Chapter:</label></b>
            <label for="">${data.chap_eng}</label>
            </div>
            </div>`
            document.getElementById("main").innerHTML=finalData;
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Number");
        })
    })
}
thirukkural();  