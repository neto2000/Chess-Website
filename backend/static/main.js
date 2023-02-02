document.getElementById("test-button").onclick = Click



function Click()
{
    let data = Get_Checklist_Data();

    console.log(data);
}


async function Get_Checklist_Data()
{

    const response = await fetch("http://127.0.0.1:9000/api", {
        method: "get"
    })

    const data = await response.json()

    return data
}